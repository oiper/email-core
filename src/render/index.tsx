import { Body, Head, Html } from '@react-email/components'
import React, { ComponentProps } from 'react'
import { RenderNode } from './components/render-node'
import { TRenderNodeProps, TRenderProps } from './types.t'

export function RenderEmail({ body, shouldRenderOnlyMain, ...props }: TRenderProps) {
  const main = body.map((node, i) => {
    return (
      <RenderNode key={i} {...props} node={node} paths={[[i]]} ControlEditorWrapper={Wrapper} />
    )
  })

  if (shouldRenderOnlyMain) return main

  return (
    <Html>
      <Head />
      <Body>{main}</Body>
    </Html>
  )
}

export * from './types.t'

type ControllerProps = ComponentProps<TRenderNodeProps['ControlEditorWrapper']>
function Wrapper({ children, editor, ...props }: ControllerProps) {
  if (!editor) return children

  return (
    <editor.Editor
      mode={props.mode}
      info={editor.info}
      node={props.node}
      paths={props.paths}
      config={props.config}
      renderRowWithProps={props.renderRowWithProps}
      RenderComponentWithContent={props.RenderComponentWithContent}
    >
      {children}
    </editor.Editor>
  )
}
