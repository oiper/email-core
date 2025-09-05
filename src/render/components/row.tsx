import { Column, Row } from '@react-email/components'

import { Fragment } from 'react/jsx-runtime'
import { TEmailNodeRow } from '../../schema'
import { TEditorGetColumnProps, TRenderNodeProps } from '../types.t'
import { RenderNode } from './render-node'

export function RowNode(props: TRenderNodeProps<TEmailNodeRow>) {
  const { ControlEditorWrapper, node } = props

  const totalWidth = node.columns.reduce((acc, child) => acc + (child.width || 1), 0)
  const totalGap = (node.gap || 0) * (node.columns.length - 1)
  const availableWidth = 100 - (node.sideGap || 0) * 2 - totalGap

  function renderRowWithProps(getColumnProps: TEditorGetColumnProps) {
    return (
      <Row
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: node.maxWidth,
        }}
      >
        {node.sideGap && <Column style={{ width: `${node.sideGap}%` }} />}

        {node.columns.map((column, i) => {
          const paths = [...props.paths, ['columns', i]]
          const controllerProps = { ...props, node: column, paths }
          const { style, valign, children, ...columnProps } = getColumnProps(controllerProps)

          return (
            <Fragment key={i}>
              <Column
                {...columnProps}
                valign={valign ?? column.vAlign}
                style={{
                  width: `${((column.width || 1) / totalWidth) * availableWidth}%`,
                  ...style,
                }}
              >
                {children}
                <RenderNode key={i} {...controllerProps} />
              </Column>

              {i < node.columns.length - 1 && node.gap && (
                <Column style={{ width: `${node.gap}%` }} />
              )}
            </Fragment>
          )
        })}

        {node.sideGap && <Column style={{ width: `${node.sideGap}%` }} />}
      </Row>
    )
  }

  return (
    <ControlEditorWrapper {...props} renderRowWithProps={renderRowWithProps}>
      {renderRowWithProps(() => ({}))}
    </ControlEditorWrapper>
  )
}
