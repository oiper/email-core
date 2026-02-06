import { Body, Head, Html } from '@react-email/components'

import { RenderNode } from './components/render-node'
import { TRenderProps } from './types.t'
import { Wrapper } from './wrapper'

export function RenderEmail({
  body,
  mode,
  shouldRenderOnlyMain,
  ...props
}: TRenderProps) {
  const main = body.map((node, i) => {
    return (
      <RenderNode
        key={i}
        {...props}
        node={node}
        paths={[[i]]}
        mode={mode ?? 'minimal'}
        ControlEditorWrapper={Wrapper}
      />
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
