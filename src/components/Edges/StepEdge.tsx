import { defineComponent } from 'vue';

import { EdgeSmoothStepProps } from '../../types';
import SmoothStepEdge from './SmoothStepEdge';

const StepEdge = defineComponent({
  inheritAttrs: false,
  components: { SmoothStepEdge },
  props: EdgeSmoothStepProps,
  setup(props) {
    return () => <SmoothStepEdge {...props} borderRadius={0} />;
  }
});

export default StepEdge;
