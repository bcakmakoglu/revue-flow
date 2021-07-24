import Handle from '../../components/Handle';
import { NodeProps, Position } from '../../types';
import { defineComponent, PropType } from 'vue';

const OutputNode = defineComponent({
  name: 'OutputNode',
  components: { Handle },
  inheritAttrs: false,
  props: {
    data: {
      type: Object as PropType<NodeProps['data']>,
      required: false,
      default: undefined as any
    },
    isConnectable: {
      type: Boolean as PropType<NodeProps['isConnectable']>,
      required: false,
      default: false
    },
    targetPosition: {
      type: String as PropType<NodeProps['targetPosition']>,
      required: false,
      default: Position.Bottom
    }
  },
  setup(props) {
    return () => (
      <>
        {props.data?.label}
        <Handle type="source" position={props.targetPosition} isConnectable={props.isConnectable} />
      </>
    );
  }
});

export default OutputNode;
