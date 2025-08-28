import { z } from 'zod'
import { Prettify } from '../types'
import * as core from './core'

type EmailRowNodeCore = z.infer<typeof core.emailRowSchema>
type EmailColumnNodeCore = z.infer<typeof core.emailColumnSchema>
type EmailSectionNodeCore = z.infer<typeof core.emailSectionSchema>

export type TEmailNodeRow = Prettify<EmailRowNodeCore & { columns: TEmailNodeColumn[] }>
export type TEmailNodeColumn = Prettify<EmailColumnNodeCore & { children: TEmailNodeUnion[] }>
export type TEmailNodeSection = Prettify<EmailSectionNodeCore & { children: TEmailNodeUnion[] }>

export type TEmailNodeHTML = z.infer<typeof core.emailHTMLSchema>
export type TEmailNodeCode = z.infer<typeof core.emailCodeSchema>
export type TEmailNodeMarkdown = z.infer<typeof core.emailMarkdownSchema>

export type TEmailNodeText = z.infer<typeof core.emailTextSchema>
export type TEmailNodeButton = z.infer<typeof core.emailButtonSchema>
export type TEmailNodeHeading = z.infer<typeof core.emailHeadingSchema>

export type TEmailNodeImage = z.infer<typeof core.emailImageSchema>
export type TEmailNodeSpacer = z.infer<typeof core.emailSpacerSchema>

/**
 * Tuple of all email node types.
 * Don't know why do we need this, but it's used in the editor properties.
 */
export type TEmailNodeTuple = [
  // Core Components
  TEmailNodeText,
  TEmailNodeImage,
  TEmailNodeButton,
  TEmailNodeHeading,

  // Structures
  TEmailNodeRow,
  TEmailNodeColumn,
  TEmailNodeSection,

  // Codes
  TEmailNodeHTML,
  TEmailNodeCode,
  TEmailNodeMarkdown,

  // Helpers
  TEmailNodeSpacer,
]

export type TEmailNodeUnion = TEmailNodeTuple[number]

export type TEmailNodeTypeMap = {
  [K in TEmailNodeUnion['type']]: Extract<TEmailNodeUnion, { type: K }>
}
