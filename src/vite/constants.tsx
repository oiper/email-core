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
  { path: 'Button', element: <Renderer data={buttonComponents} /> },
  { path: 'Code', element: <Renderer data={codeComponents} /> },
  { path: 'Heading', element: <Renderer data={headingComponents} /> },
  { path: 'HTML', element: <Renderer data={htmlComponents} /> },
  { path: 'Image', element: <Renderer data={imageComponents} /> },
  { path: 'Markdown', element: <Renderer data={markdownComponents} /> },
  { path: 'Row Column', element: <Renderer data={rowColumnComponents} /> },
  { path: 'Section', element: <Renderer data={sectionComponents} /> },
  { path: 'Spacer', element: <Renderer data={spacerComponents} /> },
  { path: 'Text', element: <Renderer data={textComponents} /> },
]
