export const emailNodeTypeMap = Object.freeze({
  Row: 'ROW',
  Column: 'COLUMN',
  Section: 'SECTION',

  HTML: 'HTML',
  Code: 'CODE',
  Markdown: 'MARKDOWN',

  Text: 'TEXT',
  Button: 'BUTTON',
  Heading: 'HEADING',

  Image: 'IMAGE',
  Spacer: 'SPACER',
} as const)

export const FORBIDDEN_HTML_TAGS = [
  'html',
  'head',
  'body',
  'script',
  'style',
  'iframe',
]
export const ALLOWED_TEXT_HTML_TAGS = ['span', 'strong', 'em', 'u', 'a', 'br']
