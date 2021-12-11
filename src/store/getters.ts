import { FlowGetters, FlowState, GraphEdge, GraphNode, Node } from '~/types'
import { defaultEdgeTypes, defaultNodeTypes, getNodesInside, getSourceTargetNodes, isEdge, isGraphNode } from '~/utils'

export default (state: FlowState): FlowGetters => {
  const getEdgeTypes = computed(() => {
    const edgeTypes: Record<string, any> = {
      ...defaultEdgeTypes,
    }
    state.edgeTypes?.forEach((n) => (edgeTypes[n] = n))
    return edgeTypes
  })

  const getNodeTypes = computed(() => {
    const nodeTypes: Record<string, any> = {
      ...defaultNodeTypes,
    }
    state.nodeTypes?.forEach((n) => (nodeTypes[n] = n))
    return nodeTypes
  })

  const getNodes = computed<GraphNode[]>(() => {
    if (state.isReady && state.dimensions.width && state.dimensions.height) {
      console.log('getter')
      const nodes: GraphNode[] = []
      const parseNode = (n: Node) => {
        nodes.push(<GraphNode>n)
        if (n.children && n.children.length) {
          n.children.forEach((c) => parseNode(c))
        }
      }
      state.elements.filter((n) => isGraphNode(n) && !n.hidden).forEach((node) => parseNode(<GraphNode>node))
      return state.onlyRenderVisibleElements
        ? nodes &&
            getNodesInside(
              nodes,
              {
                x: 0,
                y: 0,
                width: state.dimensions.width,
                height: state.dimensions.height,
              },
              state.transform,
              true,
            )
        : nodes ?? []
    }
    return []
  })

  const getEdges = computed<GraphEdge[]>(() => {
    const edges = state.elements.filter((e) => isEdge(e) && !e.hidden) as GraphEdge[]
    if (state.isReady && state.dimensions.width && state.dimensions.height) {
      console.log('getter2')
      return (
        edges
          .map((edge) => {
            const { sourceNode, targetNode } = getSourceTargetNodes(edge, getNodes.value)
            if (!sourceNode) console.warn(`couldn't create edge for source id: ${edge.source}; edge id: ${edge.id}`)
            if (!targetNode) console.warn(`couldn't create edge for target id: ${edge.target}; edge id: ${edge.id}`)

            return {
              ...edge,
              sourceNode,
              targetNode,
            }
          })
          .filter(({ sourceNode, targetNode }) => !!(sourceNode && targetNode)) ?? []
      )
    }
    return []
  })

  const getSelectedNodes = computed<GraphNode[]>(() => state.selectedElements?.filter(isGraphNode) ?? [])

  return {
    getEdgeTypes,
    getNodeTypes,
    getEdges,
    getNodes,
    getSelectedNodes,
  }
}
