import { Section } from '@react-email/components'
import { TEmailNodeSection } from '../../schema'
import { TRenderNodeProps } from '../types.t'
import { RenderNode } from './render-node'

export function SectionNode(props: TRenderNodeProps<TEmailNodeSection>) {
  const { ControlEditorWrapper, node, config } = props

  return (
    <Section
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: node.maxWidth ?? config.maxWidth,

        paddingTop: node.paddingTop,
        paddingLeft: node.paddingLeft,
        paddingRight: node.paddingRight,
        paddingBottom: node.paddingBottom,
      }}
    >
      <ControlEditorWrapper {...props}>
        {node.children.map((child, i) => (
          <RenderNode key={i} {...props} node={child} paths={[...props.paths, ['children', i]]} />
        ))}
      </ControlEditorWrapper>
    </Section>
  )
}
