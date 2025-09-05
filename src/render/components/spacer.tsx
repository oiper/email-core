import { Column, Row } from '@react-email/components'

import { TEmailNodeSpacer } from '../../schema'
import { TRenderNodeProps } from '../types.t'

export function SpacerNode(props: TRenderNodeProps<TEmailNodeSpacer>) {
  const { ControlEditorWrapper, node } = props

  return (
    <ControlEditorWrapper {...props}>
      <Row>
        <Column style={{ height: node.height }} />
      </Row>
    </ControlEditorWrapper>
  )
}
