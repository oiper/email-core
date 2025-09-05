import {
  TEmailNodeButton,
  TEmailNodeCode,
  TEmailNodeColumn,
  TEmailNodeHTML,
  TEmailNodeHeading,
  TEmailNodeImage,
  TEmailNodeMarkdown,
  TEmailNodeRow,
  TEmailNodeSection,
  TEmailNodeSpacer,
  TEmailNodeText,
} from '../../schema'

import { ButtonNode } from './button'
import { CodeNode } from './code'
import { ColumnNode } from './column'
import { HeadingNode } from './heading'
import { HtmlNode } from './html'
import { ImageNode } from './image'
import { MarkdownNode } from './markdown'
import { RowNode } from './row'
import { SectionNode } from './section'
import { SpacerNode } from './spacer'
import { TextNode } from './text'

import { Container } from '@react-email/components'
import { ReactNode } from 'react'
import { emailNodeTypeMap } from '../../constants'
import { TRenderNodeProps } from '../types.t'

type HandlerFn<T> = (props: TRenderNodeProps<T>) => ReactNode
const componentsMap: Record<
  (typeof emailNodeTypeMap)[keyof typeof emailNodeTypeMap],
  | HandlerFn<TEmailNodeRow>
  | HandlerFn<TEmailNodeColumn>
  | HandlerFn<TEmailNodeButton>
  | HandlerFn<TEmailNodeText>
  | HandlerFn<TEmailNodeHTML>
  | HandlerFn<TEmailNodeCode>
  | HandlerFn<TEmailNodeImage>
  | HandlerFn<TEmailNodeSpacer>
  | HandlerFn<TEmailNodeHeading>
  | HandlerFn<TEmailNodeSection>
  | HandlerFn<TEmailNodeMarkdown>
> = {
  ROW: RowNode,
  COLUMN: ColumnNode,
  TEXT: TextNode,
  HTML: HtmlNode,
  CODE: CodeNode,
  IMAGE: ImageNode,
  BUTTON: ButtonNode,
  SPACER: SpacerNode,
  HEADING: HeadingNode,
  SECTION: SectionNode,
  MARKDOWN: MarkdownNode,
}

export function RenderNode(props: TRenderNodeProps) {
  const { node, paths, config } = props

  const Component = componentsMap[node.type]
  if (!Component) return <></>

  // @ts-expect-error - we know this is a valid component
  const body = <Component {...props} />

  if (paths.length === 1 && node.type !== 'SECTION') {
    return (
      <Container
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: config.maxWidth,
        }}
      >
        {body}
      </Container>
    )
  }

  return body
}
