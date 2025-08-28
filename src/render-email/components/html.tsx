import React from 'react'
import { TEmailNodeHTML } from '../../email-node'
import { Column, Row } from '@react-email/components'
import { TRenderNodeProps } from '../types.t'

export function HtmlNode(props: TRenderNodeProps<TEmailNodeHTML>) {
  const { ControlEditorWrapper, node } = props

  return (
    <ControlEditorWrapper {...props}>
      <Row>
        <Column dangerouslySetInnerHTML={{ __html: node.content }} />
      </Row>
    </ControlEditorWrapper>
  )
}
