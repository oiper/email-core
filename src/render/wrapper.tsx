import { ComponentProps } from 'react'
import { TRenderNodeProps } from './types.t'

type ControllerProps = ComponentProps<TRenderNodeProps['ControlEditorWrapper']>
export function Wrapper({ children, editor, ...props }: ControllerProps) {
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
