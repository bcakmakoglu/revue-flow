import { computed, defineComponent, getCurrentInstance, h, inject, provide, ref, resolveComponent, toRef } from 'vue'
import { getMarkerId } from '@xyflow/system'
import type { Connection, EdgeComponent, HandleType, MouseTouchEvent } from '../../types'
import { ConnectionMode, Position } from '../../types'
import { useEdgeHooks, useHandle, useVueFlow } from '../../composables'
import { EdgeId, EdgeRef, Slots } from '../../context'
import { ARIA_EDGE_DESC_KEY, ErrorCode, VueFlowError, elementSelectionKeys, getEdgeHandle, getHandlePosition } from '../../utils'
import EdgeAnchor from './EdgeAnchor'

interface Props {
  id: string
}

const EdgeWrapper = defineComponent({
  name: 'Edge',
  compatConfig: { MODE: 3 },
  props: ['id'],
  setup(props: Props) {
    const {
      id: vueFlowId,
      addSelectedEdges,
      connectionMode,
      edgeUpdaterRadius,
      emits,
      nodesSelectionActive,
      noPanClassName,
      getEdgeTypes,
      removeSelectedEdges,
      findEdge,
      findNode,
      isValidConnection,
      multiSelectionActive,
      disableKeyboardA11y,
      elementsSelectable,
      edgesUpdatable,
      edgesFocusable,
      hooks,
    } = useVueFlow()

    const edge = computed(() => findEdge(props.id)!)

    const { emit, on } = useEdgeHooks(edge.value, emits)

    const slots = inject(Slots)

    const instance = getCurrentInstance()

    const mouseOver = ref(false)

    const updating = ref(false)

    const nodeId = ref('')

    const handleId = ref<string | null>(null)

    const edgeUpdaterType = ref<HandleType>('source')

    const edgeEl = ref<SVGElement | null>(null)

    const isSelectable = toRef(() =>
      typeof edge.value.selectable === 'undefined' ? elementsSelectable.value : edge.value.selectable,
    )

    const isUpdatable = toRef(() => (typeof edge.value.updatable === 'undefined' ? edgesUpdatable.value : edge.value.updatable))

    const isFocusable = toRef(() => (typeof edge.value.focusable === 'undefined' ? edgesFocusable.value : edge.value.focusable))

    provide(EdgeId, props.id)
    provide(EdgeRef, edgeEl)

    const edgeClass = computed(() => (edge.value.class instanceof Function ? edge.value.class(edge.value) : edge.value.class))
    const edgeStyle = computed(() => (edge.value.style instanceof Function ? edge.value.style(edge.value) : edge.value.style))

    const edgeCmp = computed(() => {
      const name = edge.value.type || 'default'

      const slot = slots?.[`edge-${name}`]
      if (slot) {
        return slot
      }

      let edgeType = edge.value.template ?? getEdgeTypes.value[name]

      if (typeof edgeType === 'string') {
        if (instance) {
          const components = Object.keys(instance.appContext.components)
          if (components && components.includes(name)) {
            edgeType = resolveComponent(name, false) as EdgeComponent
          }
        }
      }

      if (edgeType && typeof edgeType !== 'string') {
        return edgeType
      }

      emits.error(new VueFlowError(ErrorCode.EDGE_TYPE_MISSING, edgeType))

      return false
    })

    const { handlePointerDown } = useHandle({
      nodeId,
      handleId,
      type: edgeUpdaterType,
      isValidConnection,
      edgeUpdaterType,
      onEdgeUpdate,
      onEdgeUpdateEnd,
    })

    return () => {
      const sourceNode = findNode(edge.value.source)
      const targetNode = findNode(edge.value.target)
      const pathOptions = 'pathOptions' in edge.value ? edge.value.pathOptions : {}

      if (!sourceNode && !targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge.value.id, edge.value.source, edge.value.target))

        return null
      }

      if (!sourceNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge.value.id, edge.value.source))

        return null
      }

      if (!targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge.value.id, edge.value.target))

        return null
      }

      if (!edge.value || edge.value.hidden || sourceNode.hidden || targetNode.hidden) {
        return null
      }

      let sourceNodeHandles
      if (connectionMode.value === ConnectionMode.Strict) {
        sourceNodeHandles = sourceNode.handleBounds.source
      } else {
        sourceNodeHandles = [...(sourceNode.handleBounds.source || []), ...(sourceNode.handleBounds.target || [])]
      }

      const sourceHandle = getEdgeHandle(sourceNodeHandles, edge.value.sourceHandle)

      let targetNodeHandles
      if (connectionMode.value === ConnectionMode.Strict) {
        targetNodeHandles = targetNode.handleBounds.target
      } else {
        targetNodeHandles = [...(targetNode.handleBounds.target || []), ...(targetNode.handleBounds.source || [])]
      }

      const targetHandle = getEdgeHandle(targetNodeHandles, edge.value.targetHandle)

      const sourcePosition = sourceHandle?.position || Position.Bottom

      const targetPosition = targetHandle?.position || Position.Top

      const { x: sourceX, y: sourceY } = getHandlePosition(sourceNode, sourceHandle, sourcePosition)
      const { x: targetX, y: targetY } = getHandlePosition(targetNode, targetHandle, targetPosition)

      // todo: let's avoid writing these here (in v2 we want to remove all of these self-managed refs)
      edge.value.sourceX = sourceX
      edge.value.sourceY = sourceY
      edge.value.targetX = targetX
      edge.value.targetY = targetY

      return h(
        'g',
        {
          'ref': edgeEl,
          'key': props.id,
          'data-id': props.id,
          'class': [
            'vue-flow__edge',
            `vue-flow__edge-${edgeCmp.value === false ? 'default' : edge.value.type || 'default'}`,
            noPanClassName.value,
            edgeClass.value,
            {
              updating: mouseOver.value,
              selected: edge.value.selected,
              animated: edge.value.animated,
              inactive: !isSelectable.value && !hooks.value.edgeClick.hasListeners(),
            },
          ],
          'onClick': onEdgeClick,
          'onContextmenu': onEdgeContextMenu,
          'onDblclick': onDoubleClick,
          'onMouseenter': onEdgeMouseEnter,
          'onMousemove': onEdgeMouseMove,
          'onMouseleave': onEdgeMouseLeave,
          'onKeyDown': isFocusable.value ? onKeyDown : undefined,
          'tabIndex': isFocusable.value ? 0 : undefined,
          'aria-label':
            edge.value.ariaLabel === null
              ? undefined
              : edge.value.ariaLabel || `Edge from ${edge.value.source} to ${edge.value.target}`,
          'aria-describedby': isFocusable.value ? `${ARIA_EDGE_DESC_KEY}-${vueFlowId}` : undefined,
          'role': isFocusable.value ? 'button' : 'img',
        },
        [
          updating.value
            ? null
            : h(edgeCmp.value === false ? getEdgeTypes.value.default : (edgeCmp.value as any), {
                id: props.id,
                sourceNode,
                targetNode,
                source: edge.value.source,
                target: edge.value.target,
                type: edge.value.type,
                updatable: isUpdatable.value,
                selected: edge.value.selected,
                animated: edge.value.animated,
                label: edge.value.label,
                labelStyle: edge.value.labelStyle,
                labelShowBg: edge.value.labelShowBg,
                labelBgStyle: edge.value.labelBgStyle,
                labelBgPadding: edge.value.labelBgPadding,
                labelBgBorderRadius: edge.value.labelBgBorderRadius,
                data: edge.value.data,
                events: { ...edge.value.events, ...on },
                style: edgeStyle.value,
                markerStart: `url('#${getMarkerId(edge.value.markerStart, vueFlowId)}')`,
                markerEnd: `url('#${getMarkerId(edge.value.markerEnd, vueFlowId)}')`,
                sourcePosition,
                targetPosition,
                sourceX,
                sourceY,
                targetX,
                targetY,
                sourceHandleId: edge.value.sourceHandle,
                targetHandleId: edge.value.targetHandle,
                interactionWidth: edge.value.interactionWidth,
                ...pathOptions,
              }),
          [
            isUpdatable.value === 'source' || isUpdatable.value === true
              ? [
                  h(
                    'g',
                    {
                      onMousedown: onEdgeUpdaterSourceMouseDown,
                      onMouseenter: onEdgeUpdaterMouseEnter,
                      onMouseout: onEdgeUpdaterMouseOut,
                    },
                    h(EdgeAnchor, {
                      'position': sourcePosition,
                      'centerX': sourceX,
                      'centerY': sourceY,
                      'radius': edgeUpdaterRadius.value,
                      'type': 'source',
                      'data-type': 'source',
                    }),
                  ),
                ]
              : null,
            isUpdatable.value === 'target' || isUpdatable.value === true
              ? [
                  h(
                    'g',
                    {
                      onMousedown: onEdgeUpdaterTargetMouseDown,
                      onMouseenter: onEdgeUpdaterMouseEnter,
                      onMouseout: onEdgeUpdaterMouseOut,
                    },
                    h(EdgeAnchor, {
                      'position': targetPosition,
                      'centerX': targetX,
                      'centerY': targetY,
                      'radius': edgeUpdaterRadius.value,
                      'type': 'target',
                      'data-type': 'target',
                    }),
                  ),
                ]
              : null,
          ],
        ],
      )
    }

    function onEdgeUpdaterMouseEnter() {
      mouseOver.value = true
    }

    function onEdgeUpdaterMouseOut() {
      mouseOver.value = false
    }

    function onEdgeUpdate(event: MouseTouchEvent, connection: Connection) {
      emit.update({ event, edge: edge.value, connection })
    }

    function onEdgeUpdateEnd(event: MouseTouchEvent) {
      emit.updateEnd({ event, edge: edge.value })
      updating.value = false
    }

    function handleEdgeUpdater(event: MouseEvent, isSourceHandle: boolean) {
      if (event.button !== 0) {
        return
      }

      updating.value = true

      nodeId.value = isSourceHandle ? edge.value.target : edge.value.source
      handleId.value = (isSourceHandle ? edge.value.targetHandle : edge.value.sourceHandle) ?? ''

      edgeUpdaterType.value = isSourceHandle ? 'target' : 'source'

      emit.updateStart({ event, edge: edge.value })

      handlePointerDown(event)
    }

    function onEdgeClick(event: MouseEvent) {
      const data = { event, edge: edge.value }

      if (isSelectable.value) {
        nodesSelectionActive.value = false

        if (edge.value.selected && multiSelectionActive.value) {
          removeSelectedEdges([edge.value])

          edgeEl.value?.blur()
        } else {
          addSelectedEdges([edge.value])
        }
      }

      emit.click(data)
    }

    function onEdgeContextMenu(event: MouseEvent) {
      emit.contextMenu({ event, edge: edge.value })
    }

    function onDoubleClick(event: MouseEvent) {
      emit.doubleClick({ event, edge: edge.value })
    }

    function onEdgeMouseEnter(event: MouseEvent) {
      emit.mouseEnter({ event, edge: edge.value })
    }

    function onEdgeMouseMove(event: MouseEvent) {
      emit.mouseMove({ event, edge: edge.value })
    }

    function onEdgeMouseLeave(event: MouseEvent) {
      emit.mouseLeave({ event, edge: edge.value })
    }

    function onEdgeUpdaterSourceMouseDown(event: MouseEvent) {
      handleEdgeUpdater(event, true)
    }

    function onEdgeUpdaterTargetMouseDown(event: MouseEvent) {
      handleEdgeUpdater(event, false)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!disableKeyboardA11y.value && elementSelectionKeys.includes(event.key) && isSelectable.value) {
        const unselect = event.key === 'Escape'

        if (unselect) {
          edgeEl.value?.blur()

          removeSelectedEdges([findEdge(props.id)!])
        } else {
          addSelectedEdges([findEdge(props.id)!])
        }
      }
    }
  },
})

export default EdgeWrapper
