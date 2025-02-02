import type { D3DragEvent, DragBehavior, SubjectPosition } from 'd3-drag'
import { drag } from 'd3-drag'
import { select } from 'd3-selection'
import type { MaybeRefOrGetter, Ref } from 'vue'
import { ref, toValue, watch } from 'vue'
import { calcAutoPan, getEventPosition, snapPosition } from '@xyflow/system'
import type { MouseTouchEvent, NodeDragEvent, NodeDragItem, XYPosition } from '../types'
import { calcNextPosition, getDragItems, getEventHandlerParams, handleNodeClick, hasSelector, isUseDragEvent } from '../utils'
import { useGetPointerPosition, useVueFlow } from '.'

export type UseDragEvent = D3DragEvent<HTMLDivElement, null, SubjectPosition>

interface UseDragParams {
  onStart: (event: NodeDragEvent) => void
  onDrag: (event: NodeDragEvent) => void
  onStop: (event: NodeDragEvent) => void
  onClick?: (event: MouseTouchEvent) => void
  el: Ref<Element | null>
  disabled?: MaybeRefOrGetter<boolean>
  selectable?: MaybeRefOrGetter<boolean>
  dragHandle?: MaybeRefOrGetter<string | undefined>
  id?: string
}

/**
 * Composable that provides drag behavior for nodes
 *
 * @internal
 * @param params
 */
export function useDrag(params: UseDragParams) {
  const {
    vueFlowRef,
    snapToGrid,
    snapGrid,
    noDragClassName,
    nodes,
    nodeExtent,
    nodeDragThreshold,
    viewport,
    autoPanOnNodeDrag,
    autoPanSpeed,
    nodesDraggable,
    panBy,
    findNode,
    multiSelectionActive,
    nodesSelectionActive,
    selectNodesOnDrag,
    removeSelectedElements,
    addSelectedNodes,
    updateNodePositions,
    emits,
  } = useVueFlow()

  const { onStart, onDrag, onStop, onClick, el, disabled, id, selectable, dragHandle } = params

  const dragging = ref(false)

  let dragItems: NodeDragItem[] = []

  let dragHandler: DragBehavior<Element, unknown, unknown>

  let containerBounds: DOMRect | null = null

  let lastPos: Partial<XYPosition> = { x: undefined, y: undefined }
  let mousePosition: XYPosition = { x: 0, y: 0 }
  let dragEvent: MouseEvent | null = null
  let dragStarted = false

  let autoPanId = 0
  let autoPanStarted = false

  const getPointerPosition = useGetPointerPosition()

  const updateNodes = ({ x, y }: XYPosition) => {
    lastPos = { x, y }

    let hasChange = false

    dragItems = dragItems.map((n) => {
      const nextPosition = { x: x - n.distance.x, y: y - n.distance.y }

      const { computedPosition } = calcNextPosition(
        n,
        snapToGrid.value ? snapPosition(nextPosition, snapGrid.value) : nextPosition,
        emits.error,
        nodeExtent.value,
        n.parentNode ? findNode(n.parentNode) : undefined,
      )

      // we want to make sure that we only fire a change event when there is a change
      hasChange = hasChange || n.position.x !== computedPosition.x || n.position.y !== computedPosition.y

      n.position = computedPosition

      return n
    })

    if (!hasChange) {
      return
    }

    updateNodePositions(dragItems, true, true)

    dragging.value = true

    if (dragEvent) {
      const [currentNode, nodes] = getEventHandlerParams({
        id,
        dragItems,
        findNode,
      })

      onDrag({ event: dragEvent, node: currentNode, nodes })
    }
  }

  const autoPan = async () => {
    if (!containerBounds) {
      return
    }

    const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed.value)

    if (xMovement !== 0 || yMovement !== 0) {
      const nextPos = {
        x: (lastPos.x ?? 0) - xMovement / viewport.value.zoom,
        y: (lastPos.y ?? 0) - yMovement / viewport.value.zoom,
      }

      if (await panBy({ x: xMovement, y: yMovement })) {
        updateNodes(nextPos)
      }
    }

    autoPanId = requestAnimationFrame(autoPan)
  }

  const startDrag = (event: UseDragEvent, nodeEl: Element) => {
    dragStarted = true

    const node = findNode(id)
    if (!selectNodesOnDrag.value && !multiSelectionActive.value && node) {
      if (!node.selected) {
        // we need to reset selected nodes when selectNodesOnDrag=false
        removeSelectedElements()
      }
    }

    if (node && toValue(selectable) && selectNodesOnDrag.value) {
      handleNodeClick(
        node,
        multiSelectionActive.value,
        addSelectedNodes,
        removeSelectedElements,
        nodesSelectionActive,
        false,
        nodeEl as HTMLDivElement,
      )
    }

    const pointerPos = getPointerPosition(event.sourceEvent)
    lastPos = pointerPos
    dragItems = getDragItems(nodes.value, nodesDraggable.value, pointerPos, findNode, id)

    if (dragItems.length) {
      const [currentNode, nodes] = getEventHandlerParams({
        id,
        dragItems,
        findNode,
      })

      onStart({ event: event.sourceEvent, node: currentNode, nodes })
    }
  }

  const eventStart = (event: UseDragEvent, nodeEl: Element) => {
    if (event.sourceEvent.type === 'touchmove' && event.sourceEvent.touches.length > 1) {
      return
    }

    if (nodeDragThreshold.value === 0) {
      startDrag(event, nodeEl)
    }

    lastPos = getPointerPosition(event.sourceEvent)

    containerBounds = vueFlowRef.value?.getBoundingClientRect() || null
    mousePosition = getEventPosition(event.sourceEvent, containerBounds!)
  }

  const eventDrag = (event: UseDragEvent, nodeEl: Element) => {
    const pointerPos = getPointerPosition(event.sourceEvent)

    if (!autoPanStarted && dragStarted && autoPanOnNodeDrag.value) {
      autoPanStarted = true
      autoPan()
    }

    if (!dragStarted) {
      const x = pointerPos.xSnapped - (lastPos.x ?? 0)
      const y = pointerPos.ySnapped - (lastPos.y ?? 0)
      const distance = Math.sqrt(x * x + y * y)

      if (distance > nodeDragThreshold.value) {
        startDrag(event, nodeEl)
      }
    }

    // skip events without movement
    if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems.length && dragStarted) {
      dragEvent = event.sourceEvent as MouseEvent
      mousePosition = getEventPosition(event.sourceEvent, containerBounds!)

      updateNodes(pointerPos)
    }
  }

  const eventEnd = (event: UseDragEvent) => {
    if (!isUseDragEvent(event) && !dragStarted && !dragging.value && !multiSelectionActive.value) {
      const evt = event as MouseTouchEvent

      const pointerPos = getPointerPosition(evt)

      const x = pointerPos.xSnapped - (lastPos.x ?? 0)
      const y = pointerPos.ySnapped - (lastPos.y ?? 0)
      const distance = Math.sqrt(x * x + y * y)

      // dispatch a click event if the node was attempted to be dragged but the threshold was not exceeded
      if (distance !== 0 && distance <= nodeDragThreshold.value) {
        onClick?.(evt)
      }

      return
    }

    dragging.value = false
    autoPanStarted = false
    dragStarted = false
    lastPos = { x: undefined, y: undefined }

    cancelAnimationFrame(autoPanId)

    if (dragItems.length) {
      updateNodePositions(dragItems, false, false)

      const [currentNode, nodes] = getEventHandlerParams({
        id,
        dragItems,
        findNode,
      })

      onStop({ event: event.sourceEvent, node: currentNode, nodes })
    }
  }

  watch([() => toValue(disabled), el], ([isDisabled, nodeEl], _, onCleanup) => {
    if (nodeEl) {
      const selection = select(nodeEl)

      if (!isDisabled) {
        dragHandler = drag()
          .on('start', (event: UseDragEvent) => eventStart(event, nodeEl))
          .on('drag', (event: UseDragEvent) => eventDrag(event, nodeEl))
          .on('end', (event: UseDragEvent) => eventEnd(event))
          .filter((event: D3DragEvent<HTMLDivElement, null, SubjectPosition>['sourceEvent']) => {
            const target = event.target as HTMLDivElement
            const unrefDragHandle = toValue(dragHandle)

            return (
              !event.button &&
              (!noDragClassName.value ||
                (!hasSelector(target, `.${noDragClassName.value}`, nodeEl) &&
                  (!unrefDragHandle || hasSelector(target, unrefDragHandle, nodeEl))))
            )
          })

        selection.call(dragHandler)
      }

      onCleanup(() => {
        selection.on('.drag', null)

        if (dragHandler) {
          dragHandler.on('start', null)
          dragHandler.on('drag', null)
          dragHandler.on('end', null)
        }
      })
    }
  })

  return dragging
}
