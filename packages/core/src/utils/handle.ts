import { ConnectionMode } from '~/types'
import type {
  Actions,
  Connection,
  ConnectionStatus,
  GraphEdge,
  GraphNode,
  HandleType,
  NodeHandleBounds,
  ValidConnectionFunc,
  ValidHandleResult,
  XYPosition,
} from '~/types'

export interface ConnectionHandle {
  id: string | null
  type: HandleType
  nodeId: string
  x: number
  y: number
}

export function resetRecentHandle(handleDomNode: Element): void {
  handleDomNode?.classList.remove('valid', 'connecting', 'vue-flow__handle-valid', 'vue-flow__handle-connecting')
}

// this functions collects all handles and adds an absolute position
// so that we can later find the closest handle to the mouse position
export function getHandles(
  node: GraphNode,
  handleBounds: NodeHandleBounds,
  type: HandleType,
  currentHandle: string,
): ConnectionHandle[] {
  return (handleBounds[type] || []).reduce<ConnectionHandle[]>((res, h) => {
    if (`${node.id}-${h.id}-${type}` !== currentHandle) {
      res.push({
        id: h.id || null,
        type,
        nodeId: node.id,
        x: (node.computedPosition?.x ?? 0) + h.x + h.width / 2,
        y: (node.computedPosition?.y ?? 0) + h.y + h.height / 2,
      })
    }
    return res
  }, [])
}

export function getClosestHandle(
  pos: XYPosition,
  connectionRadius: number,
  handles: ConnectionHandle[],
): ConnectionHandle | null {
  let closestHandle: ConnectionHandle | null = null
  let minDistance = Infinity

  handles.forEach((handle) => {
    const distance = Math.sqrt((handle.x - pos.x) ** 2 + (handle.y - pos.y) ** 2)
    if (distance <= connectionRadius && distance < minDistance) {
      minDistance = distance
      closestHandle = handle
    }
  })

  return closestHandle
}

// checks if  and returns connection in fom of an object { source: 123, target: 312 }
export function isValidHandle(
  event: MouseEvent | TouchEvent,
  handle: Pick<ConnectionHandle, 'nodeId' | 'id' | 'type'> | null,
  connectionMode: ConnectionMode,
  fromNodeId: string,
  fromHandleId: string | null,
  fromType: string,
  isValidConnection: ValidConnectionFunc,
  doc: Document | ShadowRoot,
  edges: GraphEdge[],
  findNode: Actions['findNode'],
) {
  const isTarget = fromType === 'target'

  const handleDomNode = doc.querySelector(`.vue-flow__handle[data-id="${handle?.nodeId}-${handle?.id}-${handle?.type}"]`)
  const { x, y } = getEventPosition(event)
  const handleBelow = doc.elementFromPoint(x, y)
  const handleToCheck = handleBelow?.classList.contains('vue-flow__handle') ? handleBelow : handleDomNode

  const result: ValidHandleResult = {
    handleId: null,
    handleDomNode: handleToCheck,
    isValid: false,
    connection: { source: '', target: '', sourceHandle: null, targetHandle: null },
  }

  if (handleToCheck && handleDomNode && handle) {
    const handleNodeId = handleDomNode.getAttribute('data-nodeid')
    const handleId = handleDomNode.getAttribute('data-handleid')

    const connection: Connection = {
      source: isTarget ? handle.nodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handle.nodeId,
      targetHandle: isTarget ? fromHandleId : handleId,
    }

    result.connection = connection
    result.handleId = handleId

    // in strict mode we don't allow target to target or source to source connections
    const isValid =
      handleToCheck.classList.contains('connectable') && connectionMode === ConnectionMode.Strict
        ? (isTarget && handle.type === 'source') || (!isTarget && handle.type === 'target')
        : handleNodeId !== fromNodeId || handleId !== fromHandleId

    if (isValid) {
      result.isValid = isValidConnection(connection, {
        edges,
        sourceNode: findNode(connection.source)!,
        targetNode: findNode(connection.target)!,
      })
    }
  }

  return result
}

interface GetHandleLookupParams {
  nodes: GraphNode[]
  nodeId: string
  handleId: string | null
  handleType: string
}

export function getHandleLookup({ nodes, nodeId, handleId, handleType }: GetHandleLookupParams) {
  return nodes.reduce<ConnectionHandle[]>((res, node) => {
    const { handleBounds } = node
    let sourceHandles: ConnectionHandle[] = []
    let targetHandles: ConnectionHandle[] = []

    if (handleBounds) {
      sourceHandles = getHandles(node, handleBounds, 'source', `${nodeId}-${handleId}-${handleType}`)
      targetHandles = getHandles(node, handleBounds, 'target', `${nodeId}-${handleId}-${handleType}`)
    }

    res.push(...sourceHandles, ...targetHandles)
    return res
  }, [])
}

export function getHandleType(edgeUpdaterType: HandleType | undefined, handleDomNode: Element | null): HandleType | null {
  if (edgeUpdaterType) {
    return edgeUpdaterType
  } else if (handleDomNode?.classList.contains('target')) {
    return 'target'
  } else if (handleDomNode?.classList.contains('source')) {
    return 'source'
  }

  return null
}

export function getConnectionStatus(isInsideConnectionRadius: boolean, isHandleValid: boolean) {
  let connectionStatus: ConnectionStatus | null = null

  if (isHandleValid) {
    connectionStatus = 'valid'
  } else if (isInsideConnectionRadius && !isHandleValid) {
    connectionStatus = 'invalid'
  }

  return connectionStatus
}
