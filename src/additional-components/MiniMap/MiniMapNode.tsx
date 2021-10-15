import { computed, defineComponent, PropType } from 'vue'

interface MiniMapNodeProps {
  x: number
  y: number
  width: number
  height: number
  borderRadius: number
  color: string
  shapeRendering: string
  strokeColor: string
  strokeWidth: number
}

const MiniMapNode = defineComponent({
  name: 'MiniMapNode',
  props: {
    x: {
      type: Number as PropType<MiniMapNodeProps['x']>,
      required: false,
      default: undefined
    },
    y: {
      type: Number as PropType<MiniMapNodeProps['y']>,
      required: false,
      default: undefined
    },
    width: {
      type: Number as PropType<MiniMapNodeProps['width']>,
      required: false,
      default: undefined
    },
    height: {
      type: Number as PropType<MiniMapNodeProps['height']>,
      required: false,
      default: undefined
    },
    borderRadius: {
      type: Number as PropType<MiniMapNodeProps['borderRadius']>,
      required: false,
      default: undefined
    },
    color: {
      type: String as PropType<MiniMapNodeProps['color']>,
      required: false,
      default: undefined
    },
    shapeRendering: {
      type: String as PropType<MiniMapNodeProps['shapeRendering']>,
      required: false,
      default: undefined
    },
    strokeColor: {
      type: String as PropType<MiniMapNodeProps['strokeColor']>,
      required: false,
      default: undefined
    },
    strokeWidth: {
      type: Number as PropType<MiniMapNodeProps['strokeWidth']>,
      required: false,
      default: undefined
    }
  },
  setup(props, { attrs }: { attrs: Record<string, any> }) {
    const styles = attrs.style || {}
    const fill = computed(() => (props.color || styles.value.background || styles.value.backgroundColor) as string)

    return () => (
      <rect
        class="revue-flow__minimap-node"
        x={props.x}
        y={props.y}
        rx={props.borderRadius}
        ry={props.borderRadius}
        width={props.width}
        height={props.height}
        fill={fill.value}
        stroke={props.strokeColor}
        stroke-width={props.strokeWidth}
        shape-rendering={props.shapeRendering}
      />
    )
  }
})

export default MiniMapNode
