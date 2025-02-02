<script lang="ts" setup>
import type { GraphNode, PanelPosition } from '@vue-flow/core'
import { Panel, getBoundsOfRects, getConnectedEdges, getRectOfNodes, useVueFlow } from '@vue-flow/core'
import { computed, onMounted, onUnmounted, provide, ref, toRef, useAttrs, watch } from 'vue'
import type { XYMinimapInstance } from '@xyflow/system'
import { XYMinimap } from '@xyflow/system'
import type { MiniMapEmits, MiniMapNodeFunc, MiniMapProps, MiniMapSlots, ShapeRendering } from './types'
import MiniMapNode from './MiniMapNode.vue'
import { Slots } from './types'

const {
  width,
  height,
  nodeStrokeColor = 'transparent',
  nodeColor = '#e2e2e2',
  nodeClassName,
  nodeBorderRadius = 5,
  nodeStrokeWidth = 2,
  maskColor = 'rgb(240, 240, 240, 0.6)',
  position = 'bottom-right' as PanelPosition,
  maskStrokeColor = 'none',
  maskStrokeWidth = 1,
  maskBorderRadius = 0,
  pannable = false,
  zoomable = false,
  ariaLabel = 'Vue Flow mini map',
  inversePan = false,
  zoomStep = 10,
  offsetScale = 5,
} = defineProps<MiniMapProps>()

const emit = defineEmits<MiniMapEmits>()

const slots = defineSlots<MiniMapSlots>()

const attrs: Record<string, any> = useAttrs()

const defaultWidth = 200
const defaultHeight = 150

const { id, edges, viewport, translateExtent, dimensions, emits, panZoom, getNodesInitialized } = useVueFlow()

const el = ref<SVGElement>()

let minimapInstance: XYMinimapInstance | null = null

provide(Slots, slots)

const elementWidth = toRef(() => width ?? attrs.style?.width ?? defaultWidth)

const elementHeight = toRef(() => height ?? attrs.style?.height ?? defaultHeight)

const shapeRendering: ShapeRendering = typeof window === 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision'

const nodeColorFunc = computed<MiniMapNodeFunc>(() => (typeof nodeColor === 'string' ? () => nodeColor : nodeColor))

const nodeStrokeColorFunc = computed<MiniMapNodeFunc>(() =>
  typeof nodeStrokeColor === 'string' ? () => nodeStrokeColor : nodeStrokeColor,
)

const nodeClassNameFunc = computed<MiniMapNodeFunc>(() =>
  typeof nodeClassName === 'string' ? () => nodeClassName : typeof nodeClassName === 'function' ? nodeClassName : () => '',
)

const bb = computed(() => getRectOfNodes(getNodesInitialized.value))

const viewBB = computed(() => ({
  x: -viewport.value.x / viewport.value.zoom,
  y: -viewport.value.y / viewport.value.zoom,
  width: dimensions.value.width / viewport.value.zoom,
  height: dimensions.value.height / viewport.value.zoom,
}))

const boundingRect = computed(() =>
  getNodesInitialized.value && getNodesInitialized.value.length ? getBoundsOfRects(bb.value, viewBB.value) : viewBB.value,
)

const viewScale = computed(() => {
  const scaledWidth = boundingRect.value.width / elementWidth.value
  const scaledHeight = boundingRect.value.height / elementHeight.value

  return Math.max(scaledWidth, scaledHeight)
})

const viewBox = computed(() => {
  const viewWidth = viewScale.value * elementWidth.value
  const viewHeight = viewScale.value * elementHeight.value
  const offset = offsetScale * viewScale.value

  return {
    offset,
    x: boundingRect.value.x - (viewWidth - boundingRect.value.width) / 2 - offset,
    y: boundingRect.value.y - (viewHeight - boundingRect.value.height) / 2 - offset,
    width: viewWidth + offset * 2,
    height: viewHeight + offset * 2,
  }
})

const d = computed(() => {
  if (!viewBox.value.x || !viewBox.value.y) {
    return ''
  }

  return `
    M${viewBox.value.x - viewBox.value.offset},${viewBox.value.y - viewBox.value.offset}
    h${viewBox.value.width + viewBox.value.offset * 2}
    v${viewBox.value.height + viewBox.value.offset * 2}
    h${-viewBox.value.width - viewBox.value.offset * 2}z
    M${viewBB.value.x + maskBorderRadius},${viewBB.value.y}
    h${viewBB.value.width - 2 * maskBorderRadius}
    a${maskBorderRadius},${maskBorderRadius} 0 0 1 ${maskBorderRadius},${maskBorderRadius}
    v${viewBB.value.height - 2 * maskBorderRadius}
    a${maskBorderRadius},${maskBorderRadius} 0 0 1 -${maskBorderRadius},${maskBorderRadius}
    h${-(viewBB.value.width - 2 * maskBorderRadius)}
    a${maskBorderRadius},${maskBorderRadius} 0 0 1 -${maskBorderRadius},-${maskBorderRadius}
    v${-(viewBB.value.height - 2 * maskBorderRadius)}
    a${maskBorderRadius},${maskBorderRadius} 0 0 1 ${maskBorderRadius},-${maskBorderRadius}z`
})

onMounted(() => {
  watch(
    panZoom,
    (panZoomInstance) => {
      if (el.value && panZoomInstance) {
        minimapInstance = XYMinimap({
          domNode: el.value,
          panZoom: panZoomInstance,
          getTransform: () => [viewport.value.x, viewport.value.y, viewport.value.zoom],
          getViewScale: () => viewScale.value,
        })
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    minimapInstance?.destroy()
  })

  watch(
    [
      () => pannable,
      () => zoomable,
      () => inversePan,
      () => zoomStep,
      translateExtent,
      () => dimensions.value.height,
      () => dimensions.value.width,
    ],
    () => {
      minimapInstance?.update({
        translateExtent: translateExtent.value,
        width: dimensions.value.width,
        height: dimensions.value.height,
        inversePan,
        pannable,
        zoomStep,
        zoomable,
      })
    },
    { immediate: true },
  )
})

function onSvgClick(event: MouseEvent) {
  const [x, y] = minimapInstance?.pointer(event) || [0, 0]

  emit('click', { event, position: { x, y } })
}

function onNodeClick(event: MouseEvent, node: GraphNode) {
  const param = { event, node, connectedEdges: getConnectedEdges([node], edges.value) }
  emits.miniMapNodeClick(param)
  emit('nodeClick', param)
}

function onNodeDblClick(event: MouseEvent, node: GraphNode) {
  const param = { event, node, connectedEdges: getConnectedEdges([node], edges.value) }
  emits.miniMapNodeDoubleClick(param)
  emit('nodeDblclick', param)
}

function onNodeMouseEnter(event: MouseEvent, node: GraphNode) {
  const param = { event, node, connectedEdges: getConnectedEdges([node], edges.value) }
  emits.miniMapNodeMouseEnter(param)
  emit('nodeMouseenter', param)
}

function onNodeMouseMove(event: MouseEvent, node: GraphNode) {
  const param = { event, node, connectedEdges: getConnectedEdges([node], edges.value) }
  emits.miniMapNodeMouseMove(param)
  emit('nodeMousemove', param)
}

function onNodeMouseLeave(event: MouseEvent, node: GraphNode) {
  const param = { event, node, connectedEdges: getConnectedEdges([node], edges.value) }
  emits.miniMapNodeMouseLeave(param)
  emit('nodeMouseleave', param)
}
</script>

<script lang="ts">
export default {
  name: 'MiniMap',
  compatConfig: { MODE: 3 },
}
</script>

<template>
  <Panel :position="position" class="vue-flow__minimap" :class="{ pannable, zoomable }">
    <svg
      ref="el"
      :width="elementWidth"
      :height="elementHeight"
      :viewBox="[viewBox.x, viewBox.y, viewBox.width, viewBox.height].join(' ')"
      role="img"
      :aria-labelledby="`vue-flow__minimap-${id}`"
      @click="onSvgClick"
    >
      <title v-if="ariaLabel" :id="`vue-flow__minimap-${id}`">{{ ariaLabel }}</title>

      <MiniMapNode
        v-for="node of getNodesInitialized"
        :id="node.id"
        :key="node.id"
        :position="node.computedPosition"
        :dimensions="node.dimensions"
        :selected="node.selected"
        :dragging="node.dragging"
        :style="node.style"
        :class="nodeClassNameFunc(node)"
        :color="nodeColorFunc(node)"
        :border-radius="nodeBorderRadius"
        :stroke-color="nodeStrokeColorFunc(node)"
        :stroke-width="nodeStrokeWidth"
        :shape-rendering="shapeRendering"
        :type="node.type"
        :hidden="node.hidden"
        @click="onNodeClick($event, node)"
        @dblclick="onNodeDblClick($event, node)"
        @mouseenter="onNodeMouseEnter($event, node)"
        @mousemove="onNodeMouseMove($event, node)"
        @mouseleave="onNodeMouseLeave($event, node)"
      />

      <path
        class="vue-flow__minimap-mask"
        :d="d"
        :fill="maskColor"
        :stroke="maskStrokeColor"
        :stroke-width="maskStrokeWidth"
        fill-rule="evenodd"
      />
    </svg>
  </Panel>
</template>
