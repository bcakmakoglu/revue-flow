import type { NodeBase, NodeProps as NodePropsBase } from '@xyflow/system'
import type { Styles } from './flow'
import type { HandleConnectable, HandleElement } from './handle'

export type ElementData = Record<string, unknown>

/** Defined as [[x-from, y-from], [x-to, y-to]] */
export type CoordinateExtent = [extentFrom: [fromX: number, fromY: number], extentTo: [toX: number, toY: number]]

export interface CoordinateExtentRange {
  range: 'parent' | CoordinateExtent
  /** Values are top, right, bottom, left, you can use these the same as CSS padding */
  padding:
    | number
    | [padding: number]
    | [paddingY: number, paddingX: number]
    | [paddingTop: number, paddingX: number, paddingBottom: number]
    | [paddingTop: number, paddingRight: number, paddingBottom: number, paddingLeft: number]
}

export interface NodeHandleBounds {
  source?: HandleElement[]
  target?: HandleElement[]
}

/**
 * The node data structure that gets used for the nodes prop.
 * @public
 */
export interface Node<NodeData extends ElementData = ElementData, NodeType extends string = string>
  extends Omit<NodeBase<NodeData, NodeType>, 'connectable' | 'extent' | 'origin'> {
  /** Disable/enable connecting node */
  connectable?: HandleConnectable
  /** define node extent, i.e. area in which node can be moved */
  extent?: CoordinateExtent | CoordinateExtentRange | 'parent'
  /** Additional class names, can be a string or a callback returning a string (receives current flow element) */
  class?: string | string[] | Record<string, any>
  /** Additional styles, can be an object or a callback returning an object (receives current flow element) */
  style?: Styles
}

/** these props are passed to node components */
export interface NodeProps<NodeType extends NodeBase = NodeBase> extends Omit<NodePropsBase<NodeType>, 'isConnectable'> {
  /** can node handles be connected, you need to forward this to your handles for this prop to have any effect */
  isConnectable: HandleConnectable
}
