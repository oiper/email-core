import { RenderEmail } from '../render'

export function PageImage() {
  return (
    <div>
      <RenderEmail
        shouldRenderOnlyMain
        config={{ maxWidth: '600px' }}
        body={[{ type: 'IMAGE', src: 'https://avatars.githubusercontent.com/u/87106526?v=4' }]}
      />
    </div>
  )
}
