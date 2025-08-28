import { Column, Row } from '@react-email/components'
import React from 'react'
import { TEmailNodeRow } from '../../email-node'
import { TEditorGetColumnProps, TRenderNodeProps } from '../types.t'
import { RenderNode } from './render-node'

export function RowNode(props: TRenderNodeProps<TEmailNodeRow>) {
  const { ControlEditorWrapper, node } = props
  const totalWidth = node.columns.reduce((acc, child) => acc + (child.width || 1), 0)

  function renderRowWithProps(getColumnProps: TEditorGetColumnProps) {
    return (
      <Row
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: node.maxWidth,
        }}
      >
        {node.columns.map((column, i) => {
          const paths = [...props.paths, ['columns', i]]
          const controllerProps = { ...props, node: column, paths }
          const { style, valign, children, ...columnProps } = getColumnProps(controllerProps)

          return (
            <Column
              key={i}
              {...columnProps}
              valign={valign ?? column.vAlign}
              style={{
                width: `${((column.width || 1) / totalWidth) * 100}%`,
                ...style,
              }}
            >
              {children}
              <RenderNode key={i} {...controllerProps} />
            </Column>
          )
        })}
      </Row>
    )
  }

  return (
    <ControlEditorWrapper {...props} renderRowWithProps={renderRowWithProps}>
      {renderRowWithProps(() => ({}))}
    </ControlEditorWrapper>
  )
}
