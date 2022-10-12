/**
 * Vue Flow Core pkg
 * @module @vue-flow/core
 */

export { default as VueFlow } from './container/VueFlow/VueFlow.vue'

export { default as Handle } from './components/Handle/Handle.vue'

export { default as Panel } from './components/Panel/Panel.vue'

export {
  StraightEdge,
  StepEdge,
  BezierEdge,
  SimpleBezierEdge,
  SmoothStepEdge,
  BaseEdge,
  EdgeText,
  EdgeLabelRenderer,
} from './components/Edges'

export {
  getBezierPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  getStraightPath,
  getSimpleEdgeCenter,
  getBezierEdgeCenter,
} from './components/Edges/utils'

export {
  isNode,
  isEdge,
  isGraphNode,
  isGraphEdge,
  addEdge,
  updateEdge,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
  getTransformForBounds,
  getRectOfNodes,
  graphPosToZoomedPos,
  getNodesInside,
  getMarkerId,
  getBoundsofRects,
  connectionExists,
} from './utils/graph'

/**
 * Intended for options API
 * In composition API you can access apply utilities from `useVueFlow`
 */
export { applyChanges, applyEdgeChanges, applyNodeChanges } from './utils/changes'

export { Storage as GlobalVueFlowStorage, createVueFlow } from './utils/storage'

export { defaultEdgeTypes, defaultNodeTypes } from './store/state'

export { VueFlow as VueFlowInjection, NodeId as NodeIdInjection } from './context'

export { default as useZoomPanHelper } from './composables/useZoomPanHelper'

export { default as useVueFlow } from './composables/useVueFlow'

export { default as useHandle } from './composables/useHandle'

export { default as useNode } from './composables/useNode'

export { default as useEdge } from './composables/useEdge'

export { useGetPointerPosition } from './composables/useGetPointerPosition'

export { VueFlowError } from './utils/log'

export * from './types'
