import React from 'react'
import { TEmailNodeMarkdown } from '../../email-node'
import { Column, Markdown, Row } from '@react-email/components'
import { TRenderNodeProps } from '../types.t'
import { sidePaddingToCombined } from '../utils'

export function MarkdownNode(props: TRenderNodeProps<TEmailNodeMarkdown>) {
  const { ControlEditorWrapper, node } = props

  return (
    <ControlEditorWrapper {...props}>
      <Row>
        <Column
          style={{
            padding: sidePaddingToCombined({
              top: node.containerPaddingTop,
              left: node.containerPaddingLeft,
              right: node.containerPaddingRight,
              bottom: node.containerPaddingBottom,
            }),
          }}
        >
          <Markdown>{node.content}</Markdown>
        </Column>
      </Row>
    </ControlEditorWrapper>
  )
}
