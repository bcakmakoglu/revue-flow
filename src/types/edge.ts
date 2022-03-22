import { CSSProperties } from 'vue'
import { Position, Element } from './flow'
import { GraphNode } from './node'

/** Edge markers */
export enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

/** Edge marker definition */
export interface EdgeMarker {
  /** Unique marker id */
  id?: string
  /** Marker type */
  type: MarkerType
  /** Marker color */
  color?: string
  /** Marker width */
  width?: number
  /** Marker height */
  height?: number
  /** Marker units */
  markerUnits?: string
  /** Marker orientation */
  orient?: string
  /** Marker stroke width */
  strokeWidth?: number
}

export interface MarkerProps {
  id: string
  type: MarkerType
  color?: string
  width?: number
  height?: number
  markerUnits?: string
  orient?: string
  strokeWidth?: number
}

export type EdgeMarkerType = string | MarkerType | EdgeMarker

export interface Edge<T = any> extends Element<T> {
  /** Source node id */
  source: string
  /** Target node id */
  target: string
  /** Source handle id */
  sourceHandle?: string
  /** Target handle id */
  targetHandle?: string
  /** Source position */
  sourcePosition?: Position
  /** Target position */
  targetPosition?: Position
  /** Label styles (CSSProperties) */
  labelStyle?: CSSProperties
  /** Show label bg */
  labelShowBg?: boolean
  /** Label Bg styles (CSSProperties) */
  labelBgStyle?: CSSProperties
  /** Label Bg padding */
  labelBgPadding?: [number, number]
  /** Label Bg border radius */
  labelBgBorderRadius?: number
  /** Animated edge */
  animated?: boolean
  /** EdgeMarker */
  markerStart?: EdgeMarkerType
  /** EdgeMarker */
  markerEnd?: EdgeMarkerType
  /** Disable/enable updating edge */
  updatable?: boolean
  /** Disable/enable selecting edge */
  selectable?: boolean
}

export interface EdgePositions {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}

export type GraphEdge<T = any, N = T> = Edge<T> & {
  sourceNode: GraphNode<N>
  targetNode: GraphNode<N>
  selected?: boolean
  z?: number
} & EdgePositions

export interface EdgeProps<Data = any> {
  id: string
  label?:
    | string
    | {
        props?: any
        component: any
      }
  type?: string
  data?: Data
  class?: string
  style?: CSSProperties
  hidden?: boolean
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  selected?: boolean
  sourcePosition: Position
  targetPosition: Position
  sourceHandleId?: string
  targetHandleId?: string
  source: string
  target: string
  sourceHandle?: string
  targetHandle?: string
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  animated?: boolean
  updatable?: boolean
  markerStart?: string
  markerEnd?: string
}

export interface SmoothStepEdgeProps<Data = any> extends EdgeProps<Data> {
  id: string
  label?:
    | string
    | {
        props?: any
        component: any
      }
  type?: string
  data?: Data
  class?: string
  style?: CSSProperties
  hidden?: boolean
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  selected?: boolean
  sourcePosition: Position
  targetPosition: Position
  sourceHandleId?: string
  targetHandleId?: string
  source: string
  target: string
  sourceHandle?: string
  targetHandle?: string
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  animated?: boolean
  updatable?: boolean
  markerStart?: string
  markerEnd?: string
  borderRadius?: number
}

export interface GetCenterParams {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  sourcePosition?: Position
  targetPosition?: Position
}

export interface GetBezierPathParams {
  sourceX: number
  sourceY: number
  sourcePosition?: Position
  targetX: number
  targetY: number
  targetPosition?: Position
  curvature?: number
  centerX?: number
  centerY?: number
}

export interface GetSmoothStepPathParams {
  sourceX: number
  sourceY: number
  sourcePosition?: Position
  targetX: number
  targetY: number
  targetPosition?: Position
  borderRadius?: number
  centerX?: number
  centerY?: number
}
