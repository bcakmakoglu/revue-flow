import { BackgroundVariant, RevueFlowStore } from '../../types'
import { createGridDotsPath, createGridLinesPath } from './utils'
import { computed, defineComponent, HTMLAttributes, inject, PropType } from 'vue'

export interface BackgroundProps extends HTMLAttributes {
  variant?: BackgroundVariant
  gap?: number
  color?: string
  size?: number
}

const defaultColors = {
  [BackgroundVariant.Dots]: '#81818a',
  [BackgroundVariant.Lines]: '#eee'
}

const Background = defineComponent({
  name: 'Background',
  props: {
    variant: {
      type: String as PropType<BackgroundProps['variant']>,
      required: false,
      default: BackgroundVariant.Dots
    },
    gap: {
      type: Number as PropType<BackgroundProps['gap']>,
      required: false,
      default: 10
    },
    color: {
      type: String as PropType<BackgroundProps['color']>,
      required: false,
      default: undefined
    },
    size: {
      type: Number as PropType<BackgroundProps['size']>,
      required: false,
      default: 0.4
    }
  },
  setup(props) {
    const store = inject<RevueFlowStore>('store')!
    const transform = computed(() => store.transform)
    // when there are multiple flows on a page we need to make sure that every background gets its own pattern.
    const patternId = `pattern-${Math.floor(Math.random() * 100000)}`

    const bgClasses = ['revue-flow__background']
    const scaledGap = computed(() => props.gap && props.gap * transform.value[2])
    const xOffset = computed(() => scaledGap.value && transform.value[0] % scaledGap.value)
    const yOffset = computed(() => scaledGap.value && transform.value[1] % scaledGap.value)

    const isLines = computed(() => props.variant === BackgroundVariant.Lines)
    const bgColor = computed(() => (props.color ? props.color : defaultColors[props.variant || BackgroundVariant.Dots]))
    const path = computed(() =>
      isLines.value
        ? scaledGap.value && props.size && createGridLinesPath(scaledGap.value, props.size, bgColor.value)
        : createGridDotsPath(props.size || 0.4 * transform.value[2], bgColor.value)
    )

    return () => (
      <svg
        class={bgClasses}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <pattern
          id={patternId}
          x={xOffset.value}
          y={yOffset.value}
          width={scaledGap.value}
          height={scaledGap.value}
          patternUnits="userSpaceOnUse"
        >
          {path.value}
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    )
  }
})

export default Background
