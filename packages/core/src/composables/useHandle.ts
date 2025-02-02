import type { MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'
import { calcAutoPan, getEventPosition, getHostForElement, isMouseEvent, rendererPointToPoint } from '@xyflow/system'
import type { Connection, ConnectionInProgress, HandleElement, HandleType, MouseTouchEvent, ValidConnectionFunc } from '../types'
import {
  getClosestHandle,
  getConnectionStatus,
  getHandle,
  getHandlePosition,
  getHandleType,
  isConnectionValid,
  isValidHandle,
  oppositePosition,
  pointToRendererPoint,
  resetRecentHandle,
} from '../utils'
import { Position } from '../types'
import { useVueFlow } from './useVueFlow'

export interface UseHandleProps {
  handleId: MaybeRefOrGetter<string | null>
  nodeId: MaybeRefOrGetter<string>
  type: MaybeRefOrGetter<HandleType>
  isValidConnection?: MaybeRefOrGetter<ValidConnectionFunc | null>
  edgeUpdaterType?: MaybeRefOrGetter<HandleType>
  onEdgeUpdate?: (event: MouseTouchEvent, connection: Connection) => void
  onEdgeUpdateEnd?: (event: MouseTouchEvent) => void
}

function alwaysValid() {
  return true
}

/**
 * This composable provides listeners for handle events
 *
 * Generally it's recommended to use the `<Handle />` component instead of this composable.
 *
 * @public
 */
export function useHandle({
  handleId,
  nodeId,
  type,
  isValidConnection,
  edgeUpdaterType,
  onEdgeUpdate,
  onEdgeUpdateEnd,
}: UseHandleProps) {
  const {
    id: flowId,
    vueFlowRef,
    connectionMode,
    connectionRadius,
    connectOnClick,
    connectionClickStartHandle,
    nodesConnectable,
    autoPanOnConnect,
    autoPanSpeed,
    findNode,
    panBy,
    startConnection,
    updateConnection,
    endConnection,
    emits,
    viewport,
    edges,
    nodes,
    isValidConnection: isValidConnectionProp,
    nodeLookup,
  } = useVueFlow()

  let connection: Connection | null = null
  let isValid: boolean | null = false
  let handleDomNode: Element | null = null

  function handlePointerDown(event: MouseTouchEvent) {
    const isTarget = toValue(type) === 'target'

    const isMouseTriggered = isMouseEvent(event)

    // when vue-flow is used inside a shadow root we can't use document
    const doc = getHostForElement(event.target as HTMLElement)

    if ((isMouseTriggered && event.button === 0) || !isMouseTriggered) {
      const node = findNode(toValue(nodeId))

      let isValidConnectionHandler = toValue(isValidConnection) || isValidConnectionProp.value || alwaysValid

      if (!isValidConnectionHandler && node) {
        isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid
      }

      let closestHandle: HandleElement | null

      let autoPanId = 0

      const { x, y } = getEventPosition(event)
      const clickedHandle = doc?.elementFromPoint(x, y)
      const handleType = getHandleType(toValue(edgeUpdaterType), clickedHandle)
      const containerBounds = vueFlowRef.value?.getBoundingClientRect()

      if (!containerBounds || !handleType) {
        return
      }

      const fromHandleInternal = getHandle(toValue(nodeId), handleType, toValue(handleId), nodeLookup.value, connectionMode.value)

      if (!fromHandleInternal) {
        return
      }

      let prevActiveHandle: Element
      let connectionPosition = getEventPosition(event, containerBounds)
      let autoPanStarted = false

      // when the user is moving the mouse close to the edge of the canvas while connecting we move the canvas
      const autoPan = () => {
        if (!autoPanOnConnect.value) {
          return
        }

        const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds, autoPanSpeed.value)

        panBy({ x: xMovement, y: yMovement })
        autoPanId = requestAnimationFrame(autoPan)
      }

      // Stays the same for all consecutive pointermove events
      const fromHandle: HandleElement = {
        ...fromHandleInternal,
        nodeId: toValue(nodeId),
        type: handleType,
        position: fromHandleInternal.position,
      }

      const fromNodeInternal = nodeLookup.value.get(toValue(nodeId))!

      const from = getHandlePosition(fromNodeInternal, fromHandle, Position.Left, true)

      const newConnection: ConnectionInProgress = {
        inProgress: true,
        isValid: null,

        from,
        fromHandle,
        fromPosition: fromHandle.position,
        fromNode: fromNodeInternal,

        to: connectionPosition,
        toHandle: null,
        toPosition: oppositePosition[fromHandle.position],
        toNode: null,
      }

      startConnection(
        {
          nodeId: toValue(nodeId),
          id: toValue(handleId),
          type: handleType,
          position: (clickedHandle?.getAttribute('data-handlepos') as Position) || Position.Top,
        },
        {
          x: x - containerBounds.left,
          y: y - containerBounds.top,
        },
      )

      emits.connectStart({ event, nodeId: toValue(nodeId), handleId: toValue(handleId), handleType })

      let previousConnection: ConnectionInProgress = newConnection

      function onPointerMove(_event: Event) {
        const event = _event as MouseTouchEvent
        connectionPosition = getEventPosition(event, containerBounds)

        closestHandle = getClosestHandle(
          pointToRendererPoint(connectionPosition, viewport.value, false, [1, 1]),
          connectionRadius.value,
          nodeLookup.value,
          fromHandle,
        )

        if (!autoPanStarted) {
          autoPan()
          autoPanStarted = true
        }

        const result = isValidHandle(
          event,
          {
            handle: closestHandle,
            connectionMode: connectionMode.value,
            fromNodeId: toValue(nodeId),
            fromHandleId: toValue(handleId),
            fromType: isTarget ? 'target' : 'source',
            isValidConnection: isValidConnectionHandler,
            doc,
            lib: 'vue',
            flowId,
            nodeLookup: nodeLookup.value,
          },
          edges.value,
          nodes.value,
          findNode,
        )

        handleDomNode = result.handleDomNode
        connection = result.connection
        isValid = isConnectionValid(!!closestHandle, result.isValid)

        const newConnection: ConnectionInProgress = {
          // from stays the same
          ...previousConnection,
          isValid,
          to:
            closestHandle && isValid
              ? rendererPointToPoint({ x: closestHandle.x, y: closestHandle.y }, [
                  viewport.value.x,
                  viewport.value.y,
                  viewport.value.zoom,
                ])
              : connectionPosition,
          toHandle: result.toHandle,
          toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
          toNode: result.toHandle ? nodeLookup.value.get(result.toHandle.nodeId)! : null,
        }

        // we don't want to trigger an update when the connection
        // is snapped to the same handle as before
        if (
          isValid &&
          closestHandle &&
          previousConnection?.toHandle &&
          newConnection.toHandle &&
          previousConnection.toHandle.type === newConnection.toHandle.type &&
          previousConnection.toHandle.nodeId === newConnection.toHandle.nodeId &&
          previousConnection.toHandle.id === newConnection.toHandle.id &&
          previousConnection.to.x === newConnection.to.x &&
          previousConnection.to.y === newConnection.to.y
        ) {
          return
        }

        updateConnection(
          closestHandle && isValid
            ? rendererPointToPoint(
                {
                  x: closestHandle.x,
                  y: closestHandle.y,
                },
                [viewport.value.x, viewport.value.y, viewport.value.zoom],
              )
            : connectionPosition,
          result.toHandle,
          getConnectionStatus(!!closestHandle, isValid),
        )

        previousConnection = newConnection

        if (!closestHandle && !isValid && !handleDomNode) {
          return resetRecentHandle(prevActiveHandle)
        }

        if (connection && connection.source !== connection.target && handleDomNode) {
          resetRecentHandle(prevActiveHandle)

          prevActiveHandle = handleDomNode

          // todo: remove `vue-flow__handle-connecting` in next major version
          handleDomNode.classList.add('connecting', 'vue-flow__handle-connecting')
          handleDomNode.classList.toggle('valid', !!isValid)
          // todo: remove this in next major version
          handleDomNode.classList.toggle('vue-flow__handle-valid', !!isValid)
        }
      }

      function onPointerUp(_event: Event) {
        const event = _event as MouseTouchEvent
        if ((closestHandle || handleDomNode) && connection && isValid) {
          if (!onEdgeUpdate) {
            emits.connect(connection)
          } else {
            onEdgeUpdate(event, connection)
          }
        }

        emits.connectEnd(event)

        if (edgeUpdaterType) {
          onEdgeUpdateEnd?.(event)
        }

        resetRecentHandle(prevActiveHandle)

        cancelAnimationFrame(autoPanId)
        endConnection(event)

        autoPanStarted = false
        isValid = false
        connection = null
        handleDomNode = null

        doc.removeEventListener('mousemove', onPointerMove)
        doc.removeEventListener('mouseup', onPointerUp)

        doc.removeEventListener('touchmove', onPointerMove)
        doc.removeEventListener('touchend', onPointerUp)
      }

      doc.addEventListener('mousemove', onPointerMove)
      doc.addEventListener('mouseup', onPointerUp)

      doc.addEventListener('touchmove', onPointerMove)
      doc.addEventListener('touchend', onPointerUp)
    }
  }

  function handleClick(event: MouseEvent) {
    if (!connectOnClick.value) {
      return
    }

    const isTarget = toValue(type) === 'target'

    if (!connectionClickStartHandle.value) {
      emits.clickConnectStart({ event, nodeId: toValue(nodeId), handleId: toValue(handleId) })

      startConnection(
        { nodeId: toValue(nodeId), type: toValue(type), id: toValue(handleId), position: Position.Top },
        undefined,
        true,
      )

      return
    }

    let isValidConnectionHandler = toValue(isValidConnection) || isValidConnectionProp.value || alwaysValid

    const node = findNode(toValue(nodeId))

    if (!isValidConnectionHandler && node) {
      isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid
    }

    if (node && (typeof node.connectable === 'undefined' ? nodesConnectable.value : node.connectable) === false) {
      return
    }

    const doc = getHostForElement(event.target as HTMLElement)

    const result = isValidHandle(
      event,
      {
        handle: {
          nodeId: toValue(nodeId),
          id: toValue(handleId),
          type: toValue(type),
          position: Position.Top,
        },
        connectionMode: connectionMode.value,
        fromNodeId: connectionClickStartHandle.value.nodeId,
        fromHandleId: connectionClickStartHandle.value.id || null,
        fromType: connectionClickStartHandle.value.type,
        isValidConnection: isValidConnectionHandler,
        doc,
        lib: 'vue',
        flowId,
        nodeLookup: nodeLookup.value,
      },
      edges.value,
      nodes.value,
      findNode,
    )

    const isOwnHandle = result.connection?.source === result.connection?.target

    if (result.isValid && result.connection && !isOwnHandle) {
      emits.connect(result.connection)
    }

    emits.clickConnectEnd(event)

    endConnection(event, true)
  }

  return {
    handlePointerDown,
    handleClick,
  }
}
