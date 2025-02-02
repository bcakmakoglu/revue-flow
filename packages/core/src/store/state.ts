import { isMacOs } from '@xyflow/system'
import type { FlowOptions, State } from '../types'
import { ConnectionLineType, ConnectionMode, PanOnScrollMode, SelectionMode } from '../types'

import { createHooks } from './hooks'

export function useState(): State {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    connectionLookup: new Map(),
    nodeTypes: {},
    edgeTypes: {},

    initialized: false,

    dimensions: {
      width: 0,
      height: 0,
    },
    viewport: { x: 0, y: 0, zoom: 1 },

    panZoom: null,

    minZoom: 0.5,
    maxZoom: 2,

    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],

    selectionMode: SelectionMode.Full,
    paneDragging: false,
    preventScrolling: true,
    zoomOnScroll: true,
    zoomOnPinch: true,
    zoomOnDoubleClick: true,
    panOnScroll: false,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: PanOnScrollMode.Free,
    paneClickDistance: 0,
    panOnDrag: true,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: false,
    defaultViewport: { x: 0, y: 0, zoom: 1 },

    nodesSelectionActive: false,
    userSelectionActive: false,

    userSelectionRect: null,

    defaultMarkerColor: '#b1b1b7',
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: ConnectionLineType.Bezier,
      style: {},
    },
    connectionMode: ConnectionMode.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: Number.NaN, y: Number.NaN },
    connectionRadius: 20,
    connectOnClick: true,
    connectionStatus: null,
    isValidConnection: null,

    snapGrid: [15, 15],
    snapToGrid: false,

    edgesUpdatable: false,
    edgesFocusable: true,
    nodesFocusable: true,
    nodesConnectable: true,
    nodesDraggable: true,
    nodeDragThreshold: 1,
    elementsSelectable: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    selectionKeyCode: 'Shift',
    multiSelectionKeyCode: isMacOs() ? 'Meta' : 'Control',
    zoomActivationKeyCode: isMacOs() ? 'Meta' : 'Control',
    deleteKeyCode: 'Backspace',
    panActivationKeyCode: 'Space',

    hooks: createHooks(),

    applyDefault: true,
    autoConnect: false,

    fitViewOnInit: false,
    fitViewOnInitDone: false,

    noDragClassName: 'nodrag',
    noWheelClassName: 'nowheel',
    noPanClassName: 'nopan',
    defaultEdgeOptions: undefined,
    elevateEdgesOnSelect: false,
    elevateNodesOnSelect: true,

    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,
    autoPanSpeed: 15,

    disableKeyboardA11y: false,
    ariaLiveMessage: '',
  }
}

// these options will be set using the appropriate methods
export const storeOptionsToSkip: (keyof Partial<FlowOptions & Omit<State, 'nodes' | 'edges' | 'modelValue'>>)[] = [
  'id',
  'vueFlowRef',
  'viewportRef',
  'initialized',
  'modelValue',
  'nodes',
  'edges',
  'maxZoom',
  'minZoom',
  'translateExtent',
  'hooks',
  'defaultEdgeOptions',
]
