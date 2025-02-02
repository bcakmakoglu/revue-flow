import { defineComponent, h } from 'vue'
import { getSmoothStepPath } from '@xyflow/system'
import type { SmoothStepEdgeProps } from '../../types'
import { Position } from '../../types'
import BaseEdge from './BaseEdge.vue'

const SmoothStepEdge = defineComponent<SmoothStepEdgeProps>({
  name: 'SmoothStepEdge',
  props: [
    'sourcePosition',
    'targetPosition',
    'label',
    'labelStyle',
    'labelShowBg',
    'labelBgStyle',
    'labelBgPadding',
    'labelBgBorderRadius',
    'sourceY',
    'sourceX',
    'targetX',
    'targetY',
    'borderRadius',
    'markerEnd',
    'markerStart',
    'interactionWidth',
    'offset',
  ] as any,
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getSmoothStepPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top,
      })

      return h(BaseEdge as any, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props,
      })
    }
  },
})

export default SmoothStepEdge
