import useState from './state'
import useActions from './actions'
import useGetters from './getters'
import { FlowHooksOn, FlowOptions, Store, State } from '~/types'

export default (preloadedState?: FlowOptions): Store => {
  const state: State = useState(preloadedState)
  const reactiveState = reactive(state)
  const getters = useGetters(reactiveState)
  const actions = useActions(reactiveState, getters)
  const hooksOn: FlowHooksOn = <any>{}
  Object.entries(reactiveState.hooks).forEach(([n, h]) => {
    const name = `on${n.charAt(0).toUpperCase() + n.slice(1)}`
    hooksOn[<keyof FlowHooksOn>name] = h.on as any
  })
  actions.setState(reactiveState)
  if (preloadedState) {
    if (preloadedState.modelValue) actions.setElements(preloadedState.modelValue)
    if (preloadedState.nodes) actions.setNodes(preloadedState.nodes)
    if (preloadedState.edges) actions.setEdges(preloadedState.edges)
  }

  const store = {
    state: reactiveState,
    actions,
    getters,
    hooksOn,
    ...toRefs(reactiveState),
    ...getters,
    ...actions,
  } as unknown as Store

  onScopeDispose(() => {
    store.$reset()
  })

  return store
}
