import { setActivePinia, createPinia, defineStore, StoreDefinition } from 'pinia'
import isEqual from 'fast-deep-equal'
import { Edge, FlowState, Node, NodeDiffUpdate, RevueFlowActions, XYPosition } from '~/types'
import { clampPosition, getDimensions } from '~/utils'
import { getConnectedEdges, getNodesInside, getRectOfNodes, isEdge, isNode, parseEdge, parseNode } from '~/utils/graph'
import { getHandleBounds } from '~/components/Nodes/utils'

type NextElements = {
  nextNodes: Node[]
  nextEdges: Edge[]
}
const pinia = createPinia()

export default function useFlowStore(preloadedState: FlowState): StoreDefinition<string, FlowState, any, RevueFlowActions> {
  setActivePinia(pinia)

  return defineStore({
    id: `revue-flow-${Math.floor(Math.random() * 100)}`,
    state: () => ({
      ...preloadedState,
    }),
    getters: {},
    actions: {
      setElements(elements) {
        const nextElements: NextElements = {
          nextNodes: [],
          nextEdges: [],
        }
        const { nextNodes, nextEdges } = elements.reduce((res, propElement): NextElements => {
          if (isNode(propElement)) {
            const storeNode = this.nodes.find((node) => node.id === propElement.id)

            if (storeNode) {
              const updatedNode: Node = {
                ...storeNode,
                ...propElement,
              }

              if (storeNode.position.x !== propElement.position.x || storeNode.position.y !== propElement.position.y) {
                updatedNode.__rf.position = propElement.position
              }

              if (typeof propElement.type !== 'undefined' && propElement.type !== storeNode.type) {
                // we reset the elements dimensions here in order to force a re-calculation of the bounds.
                // When the type of a node changes it is possible that the number or positions of handles changes too.
                updatedNode.__rf.width = null
              }

              res.nextNodes.push(updatedNode)
            } else {
              res.nextNodes.push(parseNode(propElement, this.nodeExtent))
            }
          } else if (isEdge(propElement)) {
            const storeEdge = this.edges.find((se) => se.id === propElement.id)

            if (storeEdge) {
              res.nextEdges.push({
                ...storeEdge,
                ...propElement,
              })
            } else {
              res.nextEdges.push(parseEdge(propElement))
            }
          }

          return res
        }, nextElements)

        this.nodes = nextNodes
        this.edges = nextEdges
      },
      updateNodeDimensions(updates) {
        this.nodes = this.nodes.map((node) => {
          const update = updates.find((u) => u.id === node.id)
          if (update) {
            const dimensions = getDimensions(update.nodeElement)
            const doUpdate =
              dimensions.width &&
              dimensions.height &&
              (node.__rf.width !== dimensions.width || node.__rf.height !== dimensions.height || update.forceUpdate)

            if (doUpdate) {
              const handleBounds = getHandleBounds(update.nodeElement, this.transform[2])

              return {
                ...node,
                __rf: {
                  ...node.__rf,
                  ...dimensions,
                  handleBounds,
                },
              }
            }
          }

          return node
        })
      },
      updateNodePos(payload) {
        const { id, pos } = payload
        let position: XYPosition = pos

        if (this.snapToGrid) {
          const [gridSizeX, gridSizeY] = this.snapGrid
          position = {
            x: gridSizeX * Math.round(pos.x / gridSizeX),
            y: gridSizeY * Math.round(pos.y / gridSizeY),
          }
        }

        this.nodes = this.nodes.map((node) => {
          if (node.id === id) {
            return {
              ...node,
              __rf: {
                ...node.__rf,
                position,
              },
            }
          }

          return node
        })
      },
      updateNodePosDiff(payload: NodeDiffUpdate) {
        const { id, diff, isDragging } = payload

        this.nodes = this.nodes.map((node) => {
          if (id === node.id || this.selectedElements?.find((sNode) => sNode.id === node.id)) {
            const updatedNode = {
              ...node,
              __rf: {
                ...node.__rf,
                isDragging,
              },
            }

            if (diff) {
              updatedNode.__rf.position = {
                x: node.__rf.position.x + diff.x,
                y: node.__rf.position.y + diff.y,
              }
            }

            return updatedNode
          }

          return node
        })
      },
      setUserSelection(mousePos) {
        this.selectionActive = true
        this.userSelectionRect = {
          width: 0,
          height: 0,
          startX: mousePos.x,
          startY: mousePos.y,
          x: mousePos.x,
          y: mousePos.y,
          draw: true,
        }
      },
      updateUserSelection(mousePos) {
        const startX = this.userSelectionRect.startX || 0
        const startY = this.userSelectionRect.startY || 0

        const nextUserSelectRect: FlowState['userSelectionRect'] = {
          ...this.userSelectionRect,
          x: mousePos.x < startX ? mousePos.x : this.userSelectionRect.x,
          y: mousePos.y < startY ? mousePos.y : this.userSelectionRect.y,
          width: Math.abs(mousePos.x - startX),
          height: Math.abs(mousePos.y - startY),
        }

        const selectedNodes = getNodesInside(this.nodes, nextUserSelectRect, this.transform)
        const selectedEdges = getConnectedEdges(selectedNodes, this.edges)

        const nextSelectedElements = [...selectedNodes, ...selectedEdges]
        this.userSelectionRect = nextUserSelectRect
        this.selectedElements = nextSelectedElements
      },
      unsetUserSelection() {
        const selectedNodes = this.selectedElements?.filter((node) => isNode(node) && node.__rf) as Node[]

        this.selectionActive = false
        this.userSelectionRect.draw = false

        if (!selectedNodes || selectedNodes.length === 0) {
          this.selectedElements = undefined
          this.nodesSelectionActive = false
        } else {
          this.selectedNodesBbox = getRectOfNodes(selectedNodes)
          this.nodesSelectionActive = true
        }
      },
      addSelectedElements(elements) {
        const selectedElementsArr = Array.isArray(elements) ? elements : [elements]
        const selectedElementsUpdated = !isEqual(selectedElementsArr, this.selectedElements)
        this.selectedElements = selectedElementsUpdated ? selectedElementsArr : this.selectedElements
      },
      initD3Zoom(payload) {
        const { d3Zoom, d3Selection, d3ZoomHandler } = payload

        this.d3Zoom = d3Zoom
        this.d3Selection = d3Selection
        this.d3ZoomHandler = d3ZoomHandler
      },
      setMinZoom(minZoom) {
        this.d3Zoom?.scaleExtent([minZoom, this.maxZoom])

        this.minZoom = minZoom
      },
      setMaxZoom(maxZoom) {
        this.d3Zoom?.scaleExtent([this.minZoom, maxZoom])

        this.maxZoom = maxZoom
      },
      setTranslateExtent(translateExtent) {
        this.d3Zoom?.translateExtent(translateExtent)

        this.translateExtent = translateExtent
      },
      setNodeExtent(nodeExtent) {
        this.nodeExtent = nodeExtent
        this.nodes = this.nodes.map((node) => {
          return {
            ...node,
            __rf: {
              ...node.__rf,
              position: clampPosition(node.__rf.position, nodeExtent),
            },
          }
        })
      },
      resetSelectedElements() {
        this.selectedElements = undefined
      },
      unsetNodesSelection() {
        this.nodesSelectionActive = false
      },
      updateSize(size) {
        this.dimensions = size
      },
      setConnectionNodeId(payload) {
        this.connectionNodeId = payload.connectionNodeId
        this.connectionHandleId = payload.connectionHandleId
        this.connectionHandleType = payload.connectionHandleType
      },
      setInteractive(isInteractive) {
        this.nodesDraggable = isInteractive
        this.nodesConnectable = isInteractive
        this.elementsSelectable = isInteractive
      },
    },
  })
}
