import { TEmailNodeImage } from '../../email-node'
import { Column, Img, Row } from '@react-email/components'
import { TRenderNodeProps } from '../types.t'

export function ImageNode(props: TRenderNodeProps<TEmailNodeImage>) {
  const { ControlEditorWrapper, node, mode, paths } = props

  return (
    <ControlEditorWrapper {...props}>
      <Row>
        <Column align={node.align ?? 'center'}>
          <Img
            id={mode === 'detailed' ? paths.join('-') : undefined}
            src={node.src}
            alt={node.alt}
            style={{
              height: 'auto',
              maxWidth: '100%',
              width: `${node.width ?? 100}%`,
            }}
          />
        </Column>
      </Row>
    </ControlEditorWrapper>
  )
}
