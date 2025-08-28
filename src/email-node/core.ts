import { Prettify } from '../types'
import * as codeBlockModule from '@react-email/code-block'
import { PrismLanguage } from '@react-email/components'
import { languages } from 'prismjs'
import { z } from 'zod'
import * as helpers from './node-helpers'

type PrismThemes = keyof Omit<Prettify<typeof codeBlockModule>, 'CodeBlock'>

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

const baseSchema = z.object({
  linkHref: z.string().optional(),
  hideOn: z.enum(['mobile', 'desktop']).optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
})

export const emailRowSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Row),
  gap: helpers.zPercentageValue.optional(),
  sideGap: helpers.zPercentageValue.optional(),
})

export const emailColumnSchema = baseSchema.extend({
  ...helpers.widthProperties,
  ...helpers.paddingProperties,
  ...helpers.backgroundProperties,
  ...helpers.borderStyleProperties,

  type: z.literal(emailNodeTypeMap.Column),
  vAlign: helpers.verticalAlignment.optional(),
})

export const emailSectionSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Section),
})

export const emailHTMLSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.HTML),
  content: helpers.zHtmlString,
})

export const emailMarkdownSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Markdown),
  content: z.string(),
})

export const emailCodeSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.maxWidthProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Code),
  content: z.string(),

  bgColor: helpers.hexColorSchema.optional(),
  fontSize: z.number().optional(),
  fontFamily: z.string().optional(),
  showLineNumber: z.boolean().optional(),
  language: z.enum<PrismLanguage[]>(
    Object.keys(languages) as [PrismLanguage, ...PrismLanguage[]]
  ),
  theme: z.enum<PrismThemes[]>(
    Object.keys(codeBlockModule).filter((key) => key !== 'CodeBlock') as [
      PrismThemes,
      ...PrismThemes[],
    ]
  ),
})

export const emailTextSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Text),
  content: helpers.zTextString,
  bgColor: helpers.hexColorSchema.optional(),
})

export const emailButtonSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Button),
  content: helpers.zTextString,
  bgColor: helpers.hexColorSchema.optional(),
})

export const emailHeadingSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Heading),
  as: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  content: z.string(),
  bgColor: helpers.hexColorSchema.optional(),
})

export const emailImageSchema = baseSchema.extend({
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Image),
  src: z.string(),
  alt: z.string().optional(),
  href: z.string().optional(),
})

export const emailSpacerSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Spacer),
  height: z.number(),
  bgColor: helpers.hexColorSchema.optional(),
})
