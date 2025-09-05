import { RenderEmail } from '../render'
import { TEmailNodeUnion } from '../schema'

export type ComponentRenderer = {
  name: string
  node: TEmailNodeUnion
}

export function Renderer({ data }: { data: ComponentRenderer[] }) {
  return (
    <RenderEmail
      shouldRenderOnlyMain
      config={{ maxWidth: '600px' }}
      body={data.map<TEmailNodeUnion>((item) => ({
        type: 'SECTION',
        paddingBottom: 32,

        children: [
          {
            type: 'TEXT',
            content: item.name,
            containerPaddingTop: 16,
            containerPaddingBottom: 16,
            lineHeight: 2,

            borderColor: 'lightgray',
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1,
          },

          item.node,
        ],
      }))}
    />
  )
}
