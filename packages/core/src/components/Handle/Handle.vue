<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, toRef } from 'vue'
import { getDimensions, isMouseEvent } from '@xyflow/system'
import type { HandleProps } from '../../types'
import { Position } from '../../types'
import { useHandle, useNode, useVueFlow } from '../../composables'
import { isDef } from '../../utils'

const {
  position = Position.Top,
  connectable = undefined,
  connectableStart = true,
  connectableEnd = true,
  id: handleId = null,
  ...props
} = defineProps<HandleProps>()

const type = toRef(() => props.type ?? 'source')

const isValidConnection = toRef(() => props.isValidConnection ?? null)

const {
  id: flowId,
  connectionStartHandle,
  connectionClickStartHandle,
  connectionEndHandle,
  viewportRef,
  nodesConnectable,
  noDragClassName,
  noPanClassName,
} = useVueFlow()

const { id: nodeId, node, nodeEl, connectedEdges } = useNode()

const handle = ref<HTMLDivElement>()

const isConnectableStart = toRef(() => (typeof connectableStart !== 'undefined' ? connectableStart : true))

const isConnectableEnd = toRef(() => (typeof connectableEnd !== 'undefined' ? connectableEnd : true))

const isConnecting = toRef(
  () =>
    (connectionStartHandle.value?.nodeId === nodeId &&
      connectionStartHandle.value?.id === handleId &&
      connectionStartHandle.value?.type === type.value) ||
    (connectionEndHandle.value?.nodeId === nodeId &&
      connectionEndHandle.value?.id === handleId &&
      connectionEndHandle.value?.type === type.value),
)

const isClickConnecting = toRef(
  () =>
    connectionClickStartHandle.value?.nodeId === nodeId &&
    connectionClickStartHandle.value?.id === handleId &&
    connectionClickStartHandle.value?.type === type.value,
)

const { handlePointerDown, handleClick } = useHandle({
  nodeId,
  handleId,
  isValidConnection,
  type,
})

const isConnectable = computed(() => {
  if (typeof connectable === 'string' && connectable === 'single') {
    return !connectedEdges.value.some((edge) => {
      const id = edge[`${type.value}Handle`]

      if (edge[type.value] !== nodeId) {
        return false
      }

      return id ? id === handleId : true
    })
  }

  if (typeof connectable === 'number') {
    return (
      connectedEdges.value.filter((edge) => {
        const id = edge[`${type.value}Handle`]

        if (edge[type.value] !== nodeId) {
          return false
        }

        return id ? id === handleId : true
      }).length < connectable
    )
  }

  if (typeof connectable === 'function') {
    return connectable(node, connectedEdges.value)
  }

  return isDef(connectable) ? connectable : nodesConnectable.value
})

// todo: remove this and have users handle this themselves using `updateNodeInternals`
// set up handle bounds if they don't exist yet and the node has been initialized (i.e. the handle was added after the node has already been mounted)
onMounted(() => {
  // if the node isn't initialized yet, we can't set up the handle bounds
  // the handle bounds will be automatically set up when the node is initialized (`updateNodeDimensions`)
  if (!node.dimensions.width || !node.dimensions.height) {
    return
  }

  const existingBounds = node.handleBounds[type.value]?.find((b) => b.id === handleId)

  if (!nodeEl.value || !handle.value || !viewportRef.value || !handleId || existingBounds) {
    return
  }

  const nodeBounds = nodeEl.value.getBoundingClientRect()

  const handleBounds = handle.value.getBoundingClientRect()

  const style = window.getComputedStyle(viewportRef.value)
  const { m22: zoom } = new window.DOMMatrixReadOnly(style.transform)

  const nextBounds = {
    id: handleId,
    position,
    x: (handleBounds.left - nodeBounds.left) / zoom,
    y: (handleBounds.top - nodeBounds.top) / zoom,
    type: type.value,
    nodeId,
    ...getDimensions(handle.value),
  }

  node.handleBounds[type.value] = [...(node.handleBounds[type.value] ?? []), nextBounds]
})

onUnmounted(() => {
  // clean up node internals
  const handleBounds = node.handleBounds[type.value]
  if (handleBounds) {
    node.handleBounds[type.value] = handleBounds.filter((b) => b.id !== handleId)
  }
})

function onPointerDown(event: MouseEvent | TouchEvent) {
  const isMouseTriggered = isMouseEvent(event)

  if (isConnectable.value && isConnectableStart.value && ((isMouseTriggered && event.button === 0) || !isMouseTriggered)) {
    handlePointerDown(event)
  }
}

function onClick(event: MouseEvent) {
  if (!nodeId || (!connectionClickStartHandle.value && !isConnectableStart.value)) {
    return
  }

  if (isConnectable.value) {
    handleClick(event)
  }
}

defineExpose({
  handleClick,
  handlePointerDown,
  onClick,
  onPointerDown,
})
</script>

<script lang="ts">
export default {
  name: 'Handle',
  compatConfig: { MODE: 3 },
}
</script>

<template>
  <div
    ref="handle"
    :data-id="`${flowId}-${nodeId}-${handleId}-${type}`"
    :data-handleid="handleId"
    :data-nodeid="nodeId"
    :data-handlepos="position"
    class="vue-flow__handle"
    :class="[
      `vue-flow__handle-${position}`,
      `vue-flow__handle-${handleId}`,
      noDragClassName,
      noPanClassName,
      type,
      {
        connectable: isConnectable,
        connecting: isClickConnecting,
        connectablestart: isConnectableStart,
        connectableend: isConnectableEnd,
        connectionindicator: isConnectable && ((isConnectableStart && !isConnecting) || (isConnectableEnd && isConnecting)),
      },
    ]"
    @mousedown="onPointerDown"
    @touchstart.passive="onPointerDown"
    @click="onClick"
  >
    <slot :id="id" />
  </div>
</template>
