import { Column, Heading, Row } from '@react-email/components'
import { TEmailNodeHeading } from '../../schema'
import { TEditorComponentRenderWithContentProps, TRenderNodeProps } from '../types.t'
import { sidePaddingToCombined } from '../utils'

export function HeadingNode(props: TRenderNodeProps<TEmailNodeHeading>) {
  const { ControlEditorWrapper, node } = props

  function RenderHeading({ children }: TEditorComponentRenderWithContentProps) {
    return (
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
          <Heading
            as={node.as}
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

              borderStyle: node.borderStyle,
              borderColor: node.borderColor,
              borderTopWidth: node.borderTopWidth,
              borderBottomWidth: node.borderBottomWidth,
              borderLeftWidth: node.borderLeftWidth,
              borderRightWidth: node.borderRightWidth,

              borderTopLeftRadius: node.radiusTopLeft,
              borderTopRightRadius: node.radiusTopRight,
              borderBottomLeftRadius: node.radiusBottomLeft,
              borderBottomRightRadius: node.radiusBottomRight,
            }}
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
