import * as codeBlockModule from '@react-email/code-block'
import { CodeBlock, Column, Row } from '@react-email/components'
import { TEmailNodeCode } from '../../schema'
import { TRenderNodeProps } from '../types.t'
import { sidePaddingToCombined, sideRadiusToCombined } from '../utils'

export function CodeNode(props: TRenderNodeProps<TEmailNodeCode>) {
  const { ControlEditorWrapper, node } = props

  return (
    <ControlEditorWrapper {...props}>
      <Row>
        <Column
          align={node.align}
          style={{
            padding: sidePaddingToCombined({
              top: node.containerPaddingTop,
              left: node.containerPaddingLeft,
              right: node.containerPaddingRight,
              bottom: node.containerPaddingBottom,
            }),
          }}
        >
          <CodeBlock
            code={node.content}
            language={node.language}
            fontFamily={node.fontFamily}
            lineNumbers={node.showLineNumber}
            theme={codeBlockModule[node.theme]}
            style={{
              margin: '0',
              width: node.width ?? '',
              maxWidth: node.maxWidth,
              fontSize: node.fontSize,

              borderStyle: node.borderStyle,
              borderColor: node.borderColor,
              borderTopWidth: node.borderTopWidth,
              borderLeftWidth: node.borderLeftWidth,
              borderRightWidth: node.borderRightWidth,
              borderBottomWidth: node.borderBottomWidth,

              borderRadius: sideRadiusToCombined({
                top: node.radiusBottomLeft,
                left: node.radiusTopLeft,
                right: node.radiusTopRight,
                bottom: node.radiusBottomRight,
              }),

              ...(node.bgColor ? { backgroundColor: node.bgColor } : {}),
            }}
          />
        </Column>
      </Row>
    </ControlEditorWrapper>
  )
}
