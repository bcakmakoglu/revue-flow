import type { Component, FunctionalComponent } from 'vue'
import { h } from 'vue'
import Handle from '../Handle/Handle.vue'
import type { Node, NodeProps } from '../../types'
import { Position } from '../../types'

const DefaultNode: FunctionalComponent<NodeProps<Node<{ label: any }, 'default'>>> = function ({
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
  isConnectable = true,
  data,
}) {
  const label = data.label

  return [
    h(Handle as Component, { type: 'target', position: targetPosition, isConnectable }),
    typeof label !== 'string' && label ? h(label) : h('div', { innerHTML: label }),
    h(Handle as Component, { type: 'source', position: sourcePosition, isConnectable }),
  ]
}

DefaultNode.props = ['sourcePosition', 'targetPosition', 'isConnectable', 'data']
DefaultNode.inheritAttrs = false
DefaultNode.compatConfig = { MODE: 3 }

export default DefaultNode
