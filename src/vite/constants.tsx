import { buttonComponents } from './data/button'
import { codeComponents } from './data/code'
import { headingComponents } from './data/heading'
import { htmlComponents } from './data/html'
import { imageComponents } from './data/image'
import { markdownComponents } from './data/markdown'
import { rowColumnComponents } from './data/row-column'
import { sectionComponents } from './data/section'
import { spacerComponents } from './data/spacer'
import { textComponents } from './data/text'
import { Renderer } from './renderer'

export const componentPages = [
  { path: 'button', element: <Renderer data={buttonComponents} /> },
  { path: 'code', element: <Renderer data={codeComponents} /> },
  { path: 'heading', element: <Renderer data={headingComponents} /> },
  { path: 'html', element: <Renderer data={htmlComponents} /> },
  { path: 'image', element: <Renderer data={imageComponents} /> },
  { path: 'markdown', element: <Renderer data={markdownComponents} /> },
  { path: 'row-column', element: <Renderer data={rowColumnComponents} /> },
  { path: 'section', element: <Renderer data={sectionComponents} /> },
  { path: 'spacer', element: <Renderer data={spacerComponents} /> },
  { path: 'text', element: <Renderer data={textComponents} /> },
]
