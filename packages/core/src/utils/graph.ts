import { markRaw } from 'vue'
import type { Viewport } from '@xyflow/system'
import { boxToRect, clamp, getBoundsOfBoxes, getOverlappingArea, rectToBox, snapPosition } from '@xyflow/system'
import type {
  Actions,
  Box,
  Connection,
  DefaultEdgeOptions,
  Edge,
  Element,
  ElementData,
  Elements,
  FlowElements,
  GraphEdge,
  GraphNode,
  MaybeElement,
  Node,
  Rect,
  SnapGrid,
  XYPosition,
  XYZPosition,
} from '../types'
import { isDef } from '.'

export function nodeToRect(node: GraphNode): Rect {
  return {
    ...(node.computedPosition || { x: 0, y: 0 }),
    width: node.dimensions.width || 0,
    height: node.dimensions.height || 0,
  }
}

export function isEdge<Data = ElementData>(element: MaybeElement): element is Edge<Data> {
  return element && typeof element === 'object' && 'id' in element && 'source' in element && 'target' in element
}

export function isGraphEdge<Data = ElementData>(element: MaybeElement): element is GraphEdge<Data> {
  return isEdge(element) && 'sourceNode' in element && 'targetNode' in element
}

export function isNode<Data = ElementData>(element: MaybeElement): element is Node<Data> {
  return element && typeof element === 'object' && 'id' in element && 'position' in element && !isEdge(element)
}

export function isGraphNode<Data = ElementData>(element: MaybeElement): element is GraphNode<Data> {
  return isNode(element) && 'computedPosition' in element
}

export function parseNode(node: Node, existingNode?: GraphNode, parentNode?: string): GraphNode {
  const initialState = {
    id: node.id.toString(),
    type: node.type ?? 'default',
    dimensions: markRaw({
      width: 0,
      height: 0,
    }),
    computedPosition: markRaw({
      z: 0,
      ...node.position,
    }),
    // todo: shouldn't be defined initially, as we want to use handleBounds to check if a node was actually initialized or not
    handleBounds: {
      source: [],
      target: [],
    },
    draggable: undefined,
    selectable: undefined,
    connectable: undefined,
    focusable: undefined,
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: {
      x: 0,
      y: 0,
    },
    data: isDef(node.data) ? node.data : {},
    events: markRaw(isDef(node.events) ? node.events : {}),
  } as GraphNode

  return Object.assign(existingNode ?? initialState, node, { id: node.id.toString(), parentNode }) as GraphNode
}

export function parseEdge(edge: Edge, existingEdge?: GraphEdge, defaultEdgeOptions?: DefaultEdgeOptions): GraphEdge {
  const initialState = {
    id: edge.id.toString(),
    type: edge.type ?? existingEdge?.type ?? 'default',
    source: edge.source.toString(),
    target: edge.target.toString(),
    sourceHandle: edge.sourceHandle?.toString(),
    targetHandle: edge.targetHandle?.toString(),
    updatable: edge.updatable ?? defaultEdgeOptions?.updatable,
    selectable: edge.selectable ?? defaultEdgeOptions?.selectable,
    focusable: edge.focusable ?? defaultEdgeOptions?.focusable,
    data: isDef(edge.data) ? edge.data : {},
    events: markRaw(isDef(edge.events) ? edge.events : {}),
    label: edge.label ?? '',
    interactionWidth: edge.interactionWidth ?? defaultEdgeOptions?.interactionWidth,
    ...(defaultEdgeOptions ?? {}),
  } as GraphEdge

  return Object.assign(existingEdge ?? initialState, edge, { id: edge.id.toString() }) as GraphEdge
}

function getConnectedElements<T extends Node = Node>(
  nodeOrId: Node | { id: string } | string,
  nodes: T[],
  edges: Edge[],
  dir: 'source' | 'target',
): T[] {
  const id = typeof nodeOrId === 'string' ? nodeOrId : nodeOrId.id

  const connectedIds = new Set()

  const origin = dir === 'source' ? 'target' : 'source'

  for (const edge of edges) {
    if (edge[origin] === id) {
      connectedIds.add(edge[dir])
    }
  }

  return nodes.filter((n) => connectedIds.has(n.id))
}

export function getOutgoers<N extends Node>(nodeOrId: Node | { id: string } | string, nodes: N[], edges: Edge[]): N[]
export function getOutgoers<T extends Elements>(
  nodeOrId: Node | { id: string } | string,
  elements: T,
): T extends FlowElements ? GraphNode[] : Node[]
export function getOutgoers(...args: any[]) {
  if (args.length === 3) {
    const [nodeOrId, nodes, edges] = args
    return getConnectedElements(nodeOrId, nodes, edges, 'target')
  }

  const [nodeOrId, elements] = args
  const nodeId = typeof nodeOrId === 'string' ? nodeOrId : nodeOrId.id

  const outgoers = elements.filter((el: Element) => isEdge(el) && el.source === nodeId)

  return outgoers.map((edge: Edge) => elements.find((el: Element) => isNode(el) && el.id === edge.target))
}

export function getIncomers<N extends Node>(nodeOrId: Node | { id: string } | string, nodes: N[], edges: Edge[]): N[]
export function getIncomers<T extends Elements>(
  nodeOrId: Node | { id: string } | string,
  elements: T,
): T extends FlowElements ? GraphNode[] : Node[]
export function getIncomers(...args: any[]) {
  if (args.length === 3) {
    const [nodeOrId, nodes, edges] = args
    return getConnectedElements(nodeOrId, nodes, edges, 'source')
  }

  const [nodeOrId, elements] = args
  const nodeId = typeof nodeOrId === 'string' ? nodeOrId : nodeOrId.id

  const incomers = elements.filter((el: Element) => isEdge(el) && el.target === nodeId)

  return incomers.map((edge: Edge) => elements.find((el: Element) => isNode(el) && el.id === edge.source))
}

export function getEdgeId({ source, sourceHandle, target, targetHandle }: Connection) {
  return `vueflow__edge-${source}${sourceHandle ?? ''}-${target}${targetHandle ?? ''}`
}

export function connectionExists(edge: Edge | Connection, elements: Elements) {
  return elements.some(
    (el) =>
      isEdge(el) &&
      el.source === edge.source &&
      el.target === edge.target &&
      (el.sourceHandle === edge.sourceHandle || (!el.sourceHandle && !edge.sourceHandle)) &&
      (el.targetHandle === edge.targetHandle || (!el.targetHandle && !edge.targetHandle)),
  )
}

export function pointToRendererPoint(
  { x, y }: XYPosition,
  { x: tx, y: ty, zoom: tScale }: Viewport,
  snapToGrid: boolean = false,
  snapGrid: SnapGrid = [1, 1],
): XYPosition {
  const position: XYPosition = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale,
  }

  return snapToGrid ? snapPosition(position, snapGrid) : position
}

export function getRectOfNodes(nodes: GraphNode[]) {
  let box: Box = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY,
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    box = getBoundsOfBoxes(
      box,
      rectToBox({
        ...node.computedPosition,
        ...node.dimensions,
      } as Rect),
    )
  }

  return boxToRect(box)
}

export function getNodesInside(
  nodes: GraphNode[],
  rect: Rect,
  viewport: Viewport = { x: 0, y: 0, zoom: 1 },
  partially = false,
  // set excludeNonSelectableNodes if you want to pay attention to the nodes "selectable" attribute
  excludeNonSelectableNodes = false,
) {
  const paneRect = {
    ...pointToRendererPoint(rect, viewport),
    width: rect.width / viewport.zoom,
    height: rect.height / viewport.zoom,
  }

  const visibleNodes: GraphNode[] = []

  for (const node of nodes) {
    const { dimensions, selectable = true, hidden = false } = node
    const width = dimensions.width ?? node.width ?? null
    const height = dimensions.height ?? node.height ?? null

    if ((excludeNonSelectableNodes && !selectable) || hidden) {
      continue
    }

    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node))
    const notInitialized = width === null || height === null

    const partiallyVisible = partially && overlappingArea > 0
    const area = (width ?? 0) * (height ?? 0)
    const isVisible = notInitialized || partiallyVisible || overlappingArea >= area

    if (isVisible || node.dragging) {
      visibleNodes.push(node)
    }
  }

  return visibleNodes
}

export function getConnectedEdges<E extends Edge>(nodesOrId: Node[] | string, edges: E[]) {
  const nodeIds = new Set()

  if (typeof nodesOrId === 'string') {
    nodeIds.add(nodesOrId)
  } else if (nodesOrId.length >= 1) {
    for (const n of nodesOrId) {
      nodeIds.add(n.id)
    }
  }

  return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target))
}

export function getConnectedNodes<N extends Node | { id: string } | string>(nodes: N[], edges: Edge[]) {
  const nodeIds = new Set()

  for (const node of nodes) {
    nodeIds.add(typeof node === 'string' ? node : node.id)
  }

  const connectedNodeIds = edges.reduce((acc, edge) => {
    if (nodeIds.has(edge.source)) {
      acc.add(edge.target)
    }

    if (nodeIds.has(edge.target)) {
      acc.add(edge.source)
    }

    return acc
  }, new Set())

  return nodes.filter((node) => connectedNodeIds.has(typeof node === 'string' ? node : node.id))
}

export function getTransformForBounds(
  bounds: Rect,
  width: number,
  height: number,
  minZoom: number,
  maxZoom: number,
  padding = 0.1,
  offset: {
    x?: number
    y?: number
  } = { x: 0, y: 0 },
): Viewport {
  const xZoom = width / (bounds.width * (1 + padding))
  const yZoom = height / (bounds.height * (1 + padding))
  const zoom = Math.min(xZoom, yZoom)
  const clampedZoom = clamp(zoom, minZoom, maxZoom)
  const boundsCenterX = bounds.x + bounds.width / 2
  const boundsCenterY = bounds.y + bounds.height / 2
  const x = width / 2 - boundsCenterX * clampedZoom + (offset.x ?? 0)
  const y = height / 2 - boundsCenterY * clampedZoom + (offset.y ?? 0)

  return { x, y, zoom: clampedZoom }
}

export function getXYZPos(parentPos: XYZPosition, computedPosition: XYZPosition): XYZPosition {
  return {
    x: computedPosition.x + parentPos.x,
    y: computedPosition.y + parentPos.y,
    z: (parentPos.z > computedPosition.z ? parentPos.z : computedPosition.z) + 1,
  }
}

export function isParentSelected(node: GraphNode, findNode: Actions['findNode']): boolean {
  if (!node.parentNode) {
    return false
  }

  const parent = findNode(node.parentNode)
  if (!parent) {
    return false
  }

  if (parent.selected) {
    return true
  }

  return isParentSelected(parent, findNode)
}
