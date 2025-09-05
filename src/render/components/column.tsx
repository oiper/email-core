import { TEmailNodeColumn } from '../../schema'
import { TRenderNodeProps } from '../types.t'
import { RenderNode } from './render-node'

export function ColumnNode(props: TRenderNodeProps<TEmailNodeColumn>) {
  const { ControlEditorWrapper, node } = props

  return (
    <ControlEditorWrapper {...props}>
      {node.children.map((child, i) => {
        return (
          <RenderNode key={i} {...props} node={child} paths={[...props.paths, ['children', i]]} />
        )
      })}
    </ControlEditorWrapper>
  )
}
