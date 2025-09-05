import { Column, Heading, Row } from '@react-email/components'

import { TEmailNodeHeading } from '../../schema'
import { TEditorComponentRenderWithContentProps, TRenderNodeProps } from '../types.t'

export function HeadingNode(props: TRenderNodeProps<TEmailNodeHeading>) {
  const { ControlEditorWrapper, node } = props

  function RenderHeading({ children }: TEditorComponentRenderWithContentProps) {
    return (
      <Row>
        <Column>
          <Heading
            as={node.as}
            style={{ textAlign: node.textAlign }}
            {...(children ? { children } : { dangerouslySetInnerHTML: { __html: node.content } })}
          />
        </Column>
      </Row>
    )
  }

  return (
    <ControlEditorWrapper {...props} RenderComponentWithContent={RenderHeading}>
      <RenderHeading />
    </ControlEditorWrapper>
  )
}
