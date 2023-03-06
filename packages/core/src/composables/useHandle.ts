import type { MaybeRef } from '@vueuse/core'
import type { Connection, ConnectionHandle, HandleType, MouseTouchEvent, ValidConnectionFunc } from '~/types'

interface UseHandleProps {
  handleId: MaybeRef<string | null>
  nodeId: MaybeRef<string>
  type: MaybeRef<HandleType>
  isValidConnection?: ValidConnectionFunc
  edgeUpdaterType?: MaybeRef<HandleType>
  onEdgeUpdate?: (event: MouseTouchEvent, connection: Connection) => void
  onEdgeUpdateEnd?: (event: MouseTouchEvent) => void
}

const alwaysValid = () => true

export default function useHandle({
  handleId: _handleId,
  nodeId: _nodeId,
  type,
  isValidConnection,
  edgeUpdaterType: _edgeUpdaterType,
  onEdgeUpdate,
  onEdgeUpdateEnd,
}: UseHandleProps) {
  const isTarget = $computed(() => unref(type) === 'target')
  const nodeId = $computed(() => unref(_nodeId))
  const handleId = $computed(() => unref(_handleId))
  const edgeUpdaterType = $computed(() => unref(_edgeUpdaterType))

  const {
    vueFlowRef,
    connectionMode,
    connectionRadius,
    connectOnClick,
    connectionClickStartHandle,
    nodesConnectable,
    autoPanOnConnect,
    findNode,
    panBy,
    getNodes,
    startConnection,
    updateConnection,
    endConnection,
    emits,
    viewport,
    edges,
  } = useVueFlow()

  let connection: Connection | null = null
  let isValid = false
  let handleDomNode: Element | null = null

  function handlePointerDown(event: MouseTouchEvent) {
    const isMouseTriggered = isMouseEvent(event)

    if ((isMouseTriggered && event.button === 0) || !isMouseTriggered) {
      // when vue-flow is used inside a shadow root we can't use document
      const doc = getHostForElement(event.target as HTMLElement)

      const node = findNode(unref(nodeId))

      let validConnectFunc = isValidConnection || alwaysValid

      if (!isValidConnection) {
        if (node) validConnectFunc = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid
      }

      let prevClosestHandle: ConnectionHandle | null

      let autoPanId = 0

      const { x, y } = getEventPosition(event)
      const clickedHandle = doc?.elementFromPoint(x, y)
      const handleType = getHandleType(unref(edgeUpdaterType), clickedHandle)
      const containerBounds = vueFlowRef.value?.getBoundingClientRect()

      if (!containerBounds || !handleType) {
        return
      }

      let prevActiveHandle: Element
      let connectionPosition = getEventPosition(event, containerBounds)
      let autoPanStarted = false

      const handleLookup = getHandleLookup({
        nodes: getNodes.value,
        nodeId,
        handleId,
        handleType,
      })

      // when the user is moving the mouse close to the edge of the canvas while connecting we move the canvas
      const autoPan = () => {
        if (!autoPanOnConnect) {
          return
        }
        const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds)

        panBy({ x: xMovement, y: yMovement })
        autoPanId = requestAnimationFrame(autoPan)
      }

      startConnection(
        {
          nodeId: unref(nodeId),
          handleId: unref(handleId),
          type: unref(handleType),
        },
        {
          x: x - containerBounds.left,
          y: y - containerBounds.top,
        },
        event,
      )

      emits.connectStart({ event, nodeId, handleId, handleType })

      function onPointerMove(event: MouseTouchEvent) {
        connectionPosition = getEventPosition(event, containerBounds)

        prevClosestHandle = getClosestHandle(
          pointToRendererPoint(connectionPosition, viewport.value, false, [1, 1]),
          connectionRadius.value,
          handleLookup,
        )

        if (!autoPanStarted) {
          autoPan()
          autoPanStarted = true
        }

        const result = isValidHandle(
          event,
          prevClosestHandle,
          connectionMode.value,
          nodeId,
          handleId,
          isTarget ? 'target' : 'source',
          validConnectFunc,
          doc,
          edges.value,
          findNode,
        )

        connection = result.connection
        isValid = result.isValid
        handleDomNode = result.handleDomNode

        updateConnection(
          prevClosestHandle && isValid
            ? rendererPointToPoint(
                {
                  x: prevClosestHandle.x,
                  y: prevClosestHandle.y,
                },
                viewport.value,
              )
            : connectionPosition,
          getConnectionStatus(!!prevClosestHandle, isValid),
        )

        if (!prevClosestHandle && !isValid && !handleDomNode) return resetRecentHandle(prevActiveHandle)

        if (connection.source !== connection.target && handleDomNode) {
          resetRecentHandle(prevActiveHandle)

          prevActiveHandle = handleDomNode

          // todo: remove `vue-flow__handle-connecting` in next major version
          handleDomNode.classList.add('connecting', 'vue-flow__handle-connecting')
          handleDomNode.classList.toggle('valid', isValid)
          // todo: remove this in next major version
          handleDomNode.classList.toggle('vue-flow__handle-valid', isValid)
        }
      }

      function onPointerUp(event: MouseTouchEvent) {
        if (prevClosestHandle || handleDomNode) {
          if (connection && isValid) {
            if (!onEdgeUpdate) emits.connect(connection)
            else onEdgeUpdate(event, connection)
          }
        }

        emits.connectEnd(event)

        if (edgeUpdaterType) onEdgeUpdateEnd?.(event)

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

  const handleClick = (event: MouseEvent) => {
    if (!connectOnClick.value) return

    if (!connectionClickStartHandle.value) {
      startConnection({ nodeId: unref(nodeId), type: unref(type), handleId: unref(handleId) }, undefined, event, true)
    } else {
      let validConnectFunc = isValidConnection ?? alwaysValid

      const node = findNode(unref(nodeId))

      if (!isValidConnection) {
        if (node) validConnectFunc = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid
      }

      if (node && (typeof node.connectable === 'undefined' ? nodesConnectable : node.connectable) === false) return

      const doc = getHostForElement(event.target as HTMLElement)

      const { connection, isValid } = isValidHandle(
        event,
        {
          nodeId,
          id: handleId,
          type: unref(type),
        },
        connectionMode.value,
        connectionClickStartHandle.value.nodeId,
        connectionClickStartHandle.value.handleId || null,
        connectionClickStartHandle.value.type,
        validConnectFunc,
        doc,
        edges.value,
        findNode,
      )

      const isOwnHandle = connection.source === connection.target

      if (isValid && !isOwnHandle) emits.connect(connection)

      endConnection(event, true)
    }
  }

  return {
    handlePointerDown,
    handleClick,
  }
}
