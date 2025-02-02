import { computed, defineComponent, h, inject } from 'vue'
import { getBezierPath, getMarkerId, getSmoothStepPath } from '@xyflow/system'
import type { HandleElement } from '../../types'
import { ConnectionLineType, ConnectionMode, Position } from '../../types'
import { getHandlePosition, oppositePosition } from '../../utils'
import { useVueFlow } from '../../composables'
import { Slots } from '../../context'
import { getSimpleBezierPath } from '../Edges/SimpleBezierEdge'

const ConnectionLine = defineComponent({
  name: 'ConnectionLine',
  compatConfig: { MODE: 3 },
  setup() {
    const {
      id,
      connectionMode,
      connectionStartHandle,
      connectionEndHandle,
      connectionPosition,
      connectionLineType,
      connectionLineStyle,
      connectionLineOptions,
      connectionStatus,
      viewport,
      findNode,
    } = useVueFlow()

    const connectionLineComponent = inject(Slots)?.['connection-line']

    const fromNode = computed(() => findNode(connectionStartHandle.value?.nodeId))

    const toNode = computed(() => findNode(connectionEndHandle.value?.nodeId) ?? null)

    const toXY = computed(() => {
      return {
        x: (connectionPosition.value.x - viewport.value.x) / viewport.value.zoom,
        y: (connectionPosition.value.y - viewport.value.y) / viewport.value.zoom,
      }
    })

    const markerStart = computed(() =>
      connectionLineOptions.value.markerStart ? `url(#${getMarkerId(connectionLineOptions.value.markerStart, id)})` : '',
    )

    const markerEnd = computed(() =>
      connectionLineOptions.value.markerEnd ? `url(#${getMarkerId(connectionLineOptions.value.markerEnd, id)})` : '',
    )

    return () => {
      if (!fromNode.value || !connectionStartHandle.value) {
        return null
      }

      const startHandleId = connectionStartHandle.value.id

      const handleType = connectionStartHandle.value.type

      const fromHandleBounds = fromNode.value.handleBounds
      let handleBounds = fromHandleBounds?.[handleType] || []

      if (connectionMode.value === ConnectionMode.Loose) {
        const oppositeBounds = fromHandleBounds?.[handleType === 'source' ? 'target' : 'source'] || []
        handleBounds = [...handleBounds, ...oppositeBounds] || oppositeBounds
      }

      if (!handleBounds) {
        return null
      }

      const fromHandle = (startHandleId ? handleBounds.find((d) => d.id === startHandleId) : handleBounds[0]) ?? null
      const fromPosition = fromHandle?.position || Position.Top
      const { x: fromX, y: fromY } = getHandlePosition(fromNode.value, fromHandle, fromPosition)

      let toHandle: HandleElement | null = null
      if (toNode.value) {
        // if connection mode is strict, we only look for handles of the opposite type
        if (connectionMode.value === ConnectionMode.Strict) {
          toHandle =
            toNode.value.handleBounds[handleType === 'source' ? 'target' : 'source']?.find(
              (d) => d.id === connectionEndHandle.value?.id,
            ) || null
        } else {
          // if connection mode is loose, look for the handle in both source and target bounds
          toHandle =
            [...(toNode.value.handleBounds.source || []), ...(toNode.value.handleBounds.target || [])]?.find(
              (d) => d.id === connectionEndHandle.value?.id,
            ) || null
        }
      }

      const toPosition = connectionEndHandle.value?.position ?? (fromPosition ? oppositePosition[fromPosition] : null)

      if (!fromPosition || !toPosition) {
        return null
      }

      const type = connectionLineType.value ?? connectionLineOptions.value.type ?? ConnectionLineType.Bezier

      let dAttr = ''

      const pathParams = {
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: fromPosition,
        targetX: toXY.value.x,
        targetY: toXY.value.y,
        targetPosition: toPosition,
      }

      if (type === ConnectionLineType.Bezier) {
        ;[dAttr] = getBezierPath(pathParams)
      } else if (type === ConnectionLineType.Step) {
        ;[dAttr] = getSmoothStepPath({
          ...pathParams,
          borderRadius: 0,
        })
      } else if (type === ConnectionLineType.SmoothStep) {
        ;[dAttr] = getSmoothStepPath(pathParams)
      } else if (type === ConnectionLineType.SimpleBezier) {
        ;[dAttr] = getSimpleBezierPath(pathParams)
      } else {
        dAttr = `M${fromX},${fromY} ${toXY.value.x},${toXY.value.y}`
      }

      return h(
        'svg',
        { class: 'vue-flow__edges vue-flow__connectionline vue-flow__container' },
        h(
          'g',
          { class: 'vue-flow__connection' },
          connectionLineComponent
            ? h(connectionLineComponent, {
                sourceX: fromX,
                sourceY: fromY,
                sourcePosition: fromPosition,
                targetX: toXY.value.x,
                targetY: toXY.value.y,
                targetPosition: toPosition,
                sourceNode: fromNode.value,
                sourceHandle: fromHandle,
                targetNode: toNode.value,
                targetHandle: toHandle,
                markerEnd: markerEnd.value,
                markerStart: markerStart.value,
                connectionStatus: connectionStatus.value,
              })
            : h('path', {
                'd': dAttr,
                'class': [connectionLineOptions.value.class, connectionStatus, 'vue-flow__connection-path'],
                'style': {
                  ...connectionLineStyle.value,
                  ...connectionLineOptions.value.style,
                },
                'marker-end': markerEnd.value,
                'marker-start': markerStart.value,
              }),
        ),
      )
    }
  },
})

export default ConnectionLine
