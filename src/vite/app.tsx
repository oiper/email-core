import { RenderEmail } from '../render'

export function App({}) {
  return (
    <div>
      <RenderEmail body={[{ type: 'ROW', columns: [] }]} config={{ maxWidth: '600px' }} />
    </div>
  )
}
