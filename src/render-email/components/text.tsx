import { Column, Row, Text } from '@react-email/components'
import React from 'react'
import { TEmailNodeText } from '../../email-node'
import { TEditorComponentRenderWithContentProps, TRenderNodeProps } from '../types.t'
import { sidePaddingToCombined } from '../utils'

export function TextNode(props: TRenderNodeProps<TEmailNodeText>) {
  const { ControlEditorWrapper, node } = props

  function RenderText({ children }: TEditorComponentRenderWithContentProps) {
    return (
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
          <Text
            style={{
              color: node.color,
              textAlign: node.textAlign,
              fontSize: node.fontSize,
              fontFamily: node.fontFamily,
              fontWeight: node.fontWeight,
              lineHeight: node.lineHeight,
              fontStyle: node.fontStyle,
              textTransform: node.textTransform,
              letterSpacing: node.letterSpacing,
              wordSpacing: node.wordSpacing,
              whiteSpace: node.whiteSpace,
              textDecoration: [
                node.textOverline ? 'overline' : '',
                node.textUnderline ? 'underline' : '',
                node.textLineThrough ? 'line-through' : '',
              ]
                .filter(Boolean)
                .join(' '),

              width: node.width && `${node.width}%`,
              backgroundColor: node.bgColor,

              margin: '0',
              padding: sidePaddingToCombined({
                top: node.paddingTop,
                left: node.paddingLeft,
                right: node.paddingRight,
                bottom: node.paddingBottom,
              }),
            }}
            {...(children ? { children } : { dangerouslySetInnerHTML: { __html: node.content } })}
          />
        </Column>
      </Row>
    )
  }

  return (
    <ControlEditorWrapper {...props} RenderComponentWithContent={RenderText}>
      <RenderText />
    </ControlEditorWrapper>
  )
}
