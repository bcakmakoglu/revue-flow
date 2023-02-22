import { resolve } from 'path'
import { withConfig } from '@vue-flow/vite-config'
import vueTypes from 'vite-plugin-vue-type-imports'

export default withConfig({
  build: {
    lib: {
      formats: ['es', 'cjs', 'iife'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'vue-flow-node-resizer',
      name: 'vueFlowNodeResizer',
    },
  },
  plugins: [vueTypes() as any],
})
