import { Column } from '@react-email/components'
import { ReactNode } from 'react'
import { TEmailNodeColumn, TEmailNodeUnion } from '../email-node'
import { Prettify, TypedOmit } from '../types'

/**
 * Render an email with the given body and configuration.
 */
export type TRenderProps = {
  mode: TRenderMode
  editor?: TRenderEditorProps
  shouldRenderOnlyMain?: boolean

  body: TEmailNodeUnion[]
  config: TEmailRenderProjectConfig
}

/**
 * Render a single email node. inside the email body.
 */
export type TRenderNodeProps<T = TEmailNodeUnion> = {
  mode: TRenderMode
  editor?: TRenderEditorProps
  ControlEditorWrapper: React.FC<TEditorControllerProps>

  node: T
  paths: TRenderNodePaths
  config: TEmailRenderProjectConfig
}

/**
 * Editor controller props. This is a wrapper around the editor component.
 * This controls how the editor component is rendered.
 */
export type TEditorControllerProps<T = TEmailNodeUnion> = Prettify<
  CommonComponentProps & TypedOmit<TRenderNodeProps<T>, 'ControlEditorWrapper'>
>

/**
 * Editor component props. This is the actual props that the editor component receives.
 */
export type TEditorComponentProps = Prettify<
  CommonComponentProps & {
    mode: TRenderMode
    info: EditorInfo

    node: TEmailNodeUnion
    paths: TRenderNodePaths
    config: TEmailRenderProjectConfig
  }
>

type CommonComponentProps = {
  children: React.ReactNode
  renderRowWithProps?: TEditorRowGetColumnPropsWrapper
  RenderComponentWithContent?: React.FC<TEditorComponentRenderWithContentProps>
}

export type TRenderMode = 'minimal' | 'detailed'
export type TRenderNodePaths = (string | number)[][]

export type TRenderEditorProps = {
  Editor: React.FC<TEditorComponentProps>
  info: EditorInfo
}

type EditorInfo = {
  doSomething: () => void
}

export type TEmailRenderProjectConfig = {
  maxWidth: string
}

export type TEditorComponentRenderWithContentProps = Prettify<{ children?: React.ReactNode }>

export type TEditorRowGetColumnPropsWrapper = (getColumnProps: TEditorGetColumnProps) => ReactNode
export type TEditorGetColumnProps = (
  props: Omit<TEditorControllerProps<TEmailNodeColumn>, 'children'>
) => Prettify<React.ComponentProps<typeof Column>>
