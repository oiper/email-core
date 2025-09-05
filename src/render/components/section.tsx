import { Column, Row } from '@react-email/components'
import { Fragment } from 'react/jsx-runtime'
import { TEmailNodeSection } from '../../schema'
import { TRenderNodeProps } from '../types.t'
import { RenderNode } from './render-node'

export function SectionNode(props: TRenderNodeProps<TEmailNodeSection>) {
  const { ControlEditorWrapper, node, config } = props

  return (
    <table
      border={0}
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      align={node.align ?? 'center'}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: node.maxWidth ?? config.maxWidth,

        paddingTop: node.paddingTop,
        paddingLeft: node.paddingLeft,
        paddingRight: node.paddingRight,
        paddingBottom: node.paddingBottom,
      }}
    >
      <tbody>
        <tr>
          <td>
            <ControlEditorWrapper {...props}>
              {node.children.map((child, i) => (
                <Fragment key={i}>
                  <RenderNode {...props} node={child} paths={[...props.paths, ['children', i]]} />

                  {i < node.children.length - 1 && node.gap && (
                    <Row>
                      <Column style={{ height: node.gap }} />
                    </Row>
                  )}
                </Fragment>
              ))}
            </ControlEditorWrapper>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
