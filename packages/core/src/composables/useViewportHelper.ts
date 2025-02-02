import { computed } from 'vue'
import { rendererPointToPoint } from '@xyflow/system'
import type { GraphNode, Project, State, ViewportFunctions } from '../types'
import { getRectOfNodes, getTransformForBounds, pointToRendererPoint, warn } from '../utils'

export interface ViewportHelper extends ViewportFunctions {
  viewportInitialized: boolean
  screenToFlowCoordinate: Project
  flowToScreenCoordinate: Project
}

const DEFAULT_PADDING = 0.1

function noop() {
  warn('Viewport not initialized yet.')

  return Promise.resolve(false)
}

const initialViewportHelper: ViewportHelper = {
  zoomIn: noop,
  zoomOut: noop,
  zoomTo: noop,
  fitView: noop,
  setCenter: noop,
  fitBounds: noop,
  project: (position) => position,
  screenToFlowCoordinate: (position) => position,
  flowToScreenCoordinate: (position) => position,
  setViewport: noop,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: false,
}

/**
 * Composable that provides viewport helper functions.
 *
 * @internal
 * @param state
 */
export function useViewportHelper(state: State) {
  return computed<ViewportHelper>(() => {
    const panZoom = state.panZoom
    const isInitialized = state.panZoom && state.dimensions.width && state.dimensions.height

    if (!isInitialized) {
      return initialViewportHelper
    }

    return {
      viewportInitialized: true,
      // todo: allow passing scale as option
      zoomIn: (options) => {
        return panZoom ? panZoom.scaleBy(1.2, options) : Promise.resolve(false)
      },
      zoomOut: (options) => {
        return panZoom ? panZoom.scaleBy(1 / 1.2, options) : Promise.resolve(false)
      },
      zoomTo: (zoomLevel, options) => {
        return panZoom ? panZoom.scaleTo(zoomLevel, options) : Promise.resolve(false)
      },
      setViewport: async (viewport, options) => {
        if (!panZoom) {
          return Promise.resolve(false)
        }

        await panZoom.setViewport(
          {
            x: viewport.x ?? state.viewport.x,
            y: viewport.y ?? state.viewport.y,
            zoom: viewport.zoom ?? state.viewport.zoom,
          },
          options,
        )

        return Promise.resolve(true)
      },
      getViewport: () => ({
        x: state.viewport.x,
        y: state.viewport.y,
        zoom: state.viewport.zoom,
      }),
      fitView: async (
        options = {
          padding: DEFAULT_PADDING,
          includeHiddenNodes: false,
          duration: 0,
        },
      ) => {
        const nodesToFit: GraphNode[] = []
        for (const node of state.nodes) {
          const isVisible = node.dimensions.width && node.dimensions.height && (options?.includeHiddenNodes || !node.hidden)

          if (isVisible) {
            if (!options.nodes?.length || (options.nodes?.length && options.nodes.includes(node.id))) {
              nodesToFit.push(node)
            }
          }
        }

        if (!nodesToFit.length || !panZoom) {
          return Promise.resolve(false)
        }

        const bounds = getRectOfNodes(nodesToFit)

        const { x, y, zoom } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          options.minZoom ?? state.minZoom,
          options.maxZoom ?? state.maxZoom,
          options.padding ?? DEFAULT_PADDING,
          options.offset,
        )

        await panZoom.setViewport({ x, y, zoom }, options)

        return Promise.resolve(true)
      },
      setCenter: async (x, y, options) => {
        if (!panZoom) {
          return Promise.resolve(false)
        }

        const nextZoom = typeof options?.zoom !== 'undefined' ? options.zoom : state.maxZoom
        const centerX = state.dimensions.width / 2 - x * nextZoom
        const centerY = state.dimensions.height / 2 - y * nextZoom

        await panZoom.setViewport({ x: centerX, y: centerY, zoom: nextZoom }, options)

        return Promise.resolve(true)
      },
      fitBounds: async (bounds, options = { padding: DEFAULT_PADDING }) => {
        if (!panZoom) {
          return Promise.resolve(false)
        }

        const { x, y, zoom } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          state.minZoom,
          state.maxZoom,
          options.padding,
        )

        await panZoom.setViewport({ x, y, zoom }, options)

        return Promise.resolve(true)
      },
      project: (position) => pointToRendererPoint(position, state.viewport, state.snapToGrid, state.snapGrid),
      screenToFlowCoordinate: (position) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect()

          const correctedPosition = {
            x: position.x - domX,
            y: position.y - domY,
          }

          return pointToRendererPoint(correctedPosition, state.viewport, state.snapToGrid, state.snapGrid)
        }

        return { x: 0, y: 0 }
      },
      flowToScreenCoordinate: (position) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect()

          const correctedPosition = {
            x: position.x + domX,
            y: position.y + domY,
          }

          return rendererPointToPoint(correctedPosition, [state.viewport.x, state.viewport.y, state.viewport.zoom])
        }

        return { x: 0, y: 0 }
      },
    }
  })
}
