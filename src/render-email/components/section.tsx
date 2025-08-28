import { TEmailNodeSection } from '../../email-node'
import { Section } from '@react-email/components'
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
