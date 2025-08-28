import { TEmailNodeButton } from '../../email-node'
import { Button, Column, Row } from '@react-email/components'
import { spreadTextStyleProperties } from '../helpers/spread-props'
import { TEditorComponentRenderWithContentProps, TRenderNodeProps } from '../types.t'
import { sidePaddingToCombined, sideRadiusToCombined } from '../utils'

export function ButtonNode(props: TRenderNodeProps<TEmailNodeButton>) {
  const { ControlEditorWrapper, node, mode, paths } = props

  function RenderButton({ children }: TEditorComponentRenderWithContentProps) {
    return (
      <Row>
        <Column align={node.width ? (node.align ?? 'center') : undefined}>
          <Row align={undefined} width={node.width ? `${node.width}%` : '100%'}>
            <Column
              align={node.width ? undefined : (node.align ?? 'center')}
              style={{
                padding: sidePaddingToCombined({
                  top: node.containerPaddingTop,
                  left: node.containerPaddingLeft,
                  right: node.containerPaddingRight,
                  bottom: node.containerPaddingBottom,
                }),
              }}
            >
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: `<!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                          href="https://example.com" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%"
                          stroke="f" fillcolor=${node.bgColor}>
                          <w:anchorlock />
                          <center style="color:${node.color};font-family:sans-serif;font-size:16px;font-weight:bold;">${node.content}</center>
                        </v:roundrect>
                      <![endif]-->`,
                }}
              /> */}

              <Button
                target="_blank"
                href={node.linkHref}
                style={{
                  ...spreadTextStyleProperties(node, { textAlign: 'center' }),

                  backgroundColor: node.bgColor,

                  borderStyle: node.borderStyle,
                  borderColor: node.borderColor,
                  borderTopWidth: node.borderTopWidth,
                  borderLeftWidth: node.borderLeftWidth,
                  borderRightWidth: node.borderRightWidth,
                  borderBottomWidth: node.borderBottomWidth,

                  padding: sidePaddingToCombined({
                    top: node.paddingTop,
                    left: node.paddingLeft,
                    right: node.paddingRight,
                    bottom: node.paddingBottom,
                  }),
                  borderRadius: sideRadiusToCombined({
                    top: node.radiusTop,
                    left: node.radiusLeft,
                    right: node.radiusRight,
                    bottom: node.radiusBottom,
                  }),

                  display: node.width ? 'block' : 'inline-block',
                }}
                id={mode === 'detailed' ? paths.join('-') : undefined}
              >
                <span
                  {...(children
                    ? { children }
                    : { dangerouslySetInnerHTML: { __html: node.content } })}
                />
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>
    )
  }

  return (
    <ControlEditorWrapper {...props} RenderComponentWithContent={RenderButton}>
      <RenderButton />
    </ControlEditorWrapper>
  )
}
