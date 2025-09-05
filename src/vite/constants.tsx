import { buttonComponents } from './data/button'
import { imageComponents } from './data/image'
import { Renderer } from './renderer'

export const componentPages = [
  { path: '/image', element: <Renderer data={imageComponents} /> },
  { path: '/button', element: <Renderer data={buttonComponents} /> },
]
