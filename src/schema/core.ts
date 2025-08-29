import * as codeBlockModule from '@react-email/code-block'
import { PrismLanguage } from '@react-email/components'
import prismjs from 'prismjs'
import { z } from 'zod'
import { emailNodeTypeMap } from '../constants'
import { Prettify } from '../types'
import * as helpers from './common'
import { TEmailNodeUnion } from './types.t'

type PrismThemes = keyof Omit<Prettify<typeof codeBlockModule>, 'CodeBlock'>

const baseSchema = z.object({
  linkHref: z.string().optional().describe('Link href of the component'),
  hideOn: z.enum(['mobile', 'desktop']).optional().describe('Hide on mobile or desktop'),
  meta: z.record(z.string(), z.unknown()).optional().describe('Meta data of the component'),
})

export const emailRowSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Row),
  gap: helpers.zPercentageValue.optional().describe('Gap between columns of the row'),
  sideGap: helpers.zPercentageValue.optional().describe('Padding around the row'),
})

export const emailColumnSchema = baseSchema.extend({
  ...helpers.widthProperties,
  ...helpers.paddingProperties,
  ...helpers.backgroundProperties,
  ...helpers.borderStyleProperties,

  type: z.literal(emailNodeTypeMap.Column),
  vAlign: helpers.verticalAlignment.optional().describe('Vertical alignment of the column'),
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
  content: helpers.zHtmlString.describe('HTML content of the component'),
})

export const emailMarkdownSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.sectionProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Markdown),
  content: z.string().describe('Markdown content of the component'),
})

export const emailCodeSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.maxWidthProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Code),
  content: z.string().describe('Code content of the component'),

  bgColor: helpers.hexColorSchema.optional().describe('Background color of the component'),
  fontSize: z.number().optional().describe('Font size of the component'),
  fontFamily: z.string().optional().describe('Font family of the component'),
  showLineNumber: z.boolean().optional().describe('Show line number of the component'),

  language: z
    .enum<PrismLanguage[]>(Object.keys(prismjs.languages) as [PrismLanguage, ...PrismLanguage[]])
    .describe('Language of the component. Should be a valid Prism language'),

  theme: z
    .enum<
      PrismThemes[]
    >(Object.keys(codeBlockModule).filter((key) => key !== 'CodeBlock') as [PrismThemes, ...PrismThemes[]])
    .describe('Theme of the component. Should be a valid Prism theme'),
})

export const emailTextSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Text),
  content: helpers.zTextString.describe('Text content of the component'),
  bgColor: helpers.hexColorSchema.optional().describe('Background color of the component'),
})

export const emailButtonSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Button),
  content: helpers.zTextString.describe('Text content of the component'),
  bgColor: helpers.hexColorSchema.optional().describe('Background color of the component'),
})

export const emailHeadingSchema = baseSchema.extend({
  ...helpers.textProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Heading),
  as: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  content: z.string().describe('Heading content of the component'),
  bgColor: helpers.hexColorSchema.optional().describe('Background color of the component'),
})

export const emailImageSchema = baseSchema.extend({
  ...helpers.widthProperties,
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Image),
  src: z.string().describe('Image source of the component'),
  alt: z.string().optional().describe('Image alt of the component'),
  href: z.string().optional().describe('Image href of the component'),
})

export const emailSpacerSchema = baseSchema.extend({
  ...helpers.borderProperties,
  ...helpers.paddingProperties,
  ...helpers.containerPaddingProperties,

  type: z.literal(emailNodeTypeMap.Spacer),
  height: z.number().describe('Height of the spacer'),
  bgColor: helpers.hexColorSchema.optional().describe('Background color of the spacer'),
})

export const zodEmailNodeSchema: z.ZodType<TEmailNodeUnion> = z.lazy(() => {
  return z.discriminatedUnion('type', [
    emailHTMLSchema,
    emailCodeSchema,
    emailMarkdownSchema,

    emailTextSchema,
    emailButtonSchema,
    emailHeadingSchema,

    emailImageSchema,
    emailSpacerSchema,

    emailSectionSchema.extend({
      children: z
        .array(zodEmailNodeSchema)
        .describe(
          `Children of the section. Can be any of ${Object.values(emailNodeTypeMap).join(', ')}`
        ),
    }),

    emailRowSchema.extend({
      columns: z
        .array(
          emailColumnSchema.extend({
            children: z
              .array(zodEmailNodeSchema)
              .describe(
                `Children of the column. Can be any of ${Object.values(emailNodeTypeMap).join(', ')}`
              ),
          })
        )
        .describe(`Columns of the row. Must be an array of ${emailNodeTypeMap.Column}`),
    }),
  ])
})
