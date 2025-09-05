import { z } from 'zod'
import { ALLOWED_TEXT_HTML_TAGS, FORBIDDEN_HTML_TAGS } from '../constants'
import { hasForbiddenTags, hasUnknownTags } from '../lib/parse5'

export const hexColorSchema = z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)

export const zTextString = z.string().refine(
  (value: string) => {
    return !hasUnknownTags(value, ALLOWED_TEXT_HTML_TAGS)
  },
  { message: 'Text content contains unknown tags' }
)

export const zHtmlString = z.string().refine(
  (value: string) => {
    return !hasForbiddenTags(value, FORBIDDEN_HTML_TAGS)
  },
  { message: 'HTML content contains forbidden tags' }
)

export const zPercentageValue = z
  .number()
  .min(0, 'Percentage value should not be less than 0')
  .max(100, 'Percentage value should not be more than 100')

export const horizontalAlignment = z.enum(['left', 'center', 'right'])
export const verticalAlignment = z.enum(['top', 'middle', 'bottom'])

export const borderStyleProperties = {
  borderLeftWidth: z.number().optional().describe('Border left width of the component'),
  borderRightWidth: z.number().optional().describe('Border right width of the component'),
  borderTopWidth: z.number().optional().describe('Border top width of the component'),
  borderBottomWidth: z.number().optional().describe('Border bottom width of the component'),

  borderColor: hexColorSchema.optional().describe('Border color of the component'),
  borderStyle: z
    .enum(['solid', 'dashed', 'dotted'])
    .optional()
    .describe('Border style of the component'),
}

export const borderRadiusProperties = {
  radiusTopLeft: z.number().optional().describe('Border radius left of the component'),
  radiusTopRight: z.number().optional().describe('Border radius right of the component'),
  radiusBottomLeft: z.number().optional().describe('Border radius top of the component'),
  radiusBottomRight: z.number().optional().describe('Border radius bottom of the component'),
}

export const borderProperties = {
  ...borderStyleProperties,
  ...borderRadiusProperties,
}

export const paddingProperties = {
  paddingTop: z.number().optional().describe('Padding top of the component'),
  paddingLeft: z.number().optional().describe('Padding left of the component'),
  paddingRight: z.number().optional().describe('Padding right of the component'),
  paddingBottom: z.number().optional().describe('Padding bottom of the component'),
}

export const containerPaddingProperties = {
  containerPaddingTop: z
    .number()
    .optional()
    .describe('Container padding top of the component. Works like margin.'),
  containerPaddingLeft: z
    .number()
    .optional()
    .describe('Container padding left of the component. Works like margin.'),
  containerPaddingRight: z
    .number()
    .optional()
    .describe('Container padding right of the component. Works like margin.'),
  containerPaddingBottom: z
    .number()
    .optional()
    .describe('Container padding bottom of the component. Works like margin.'),
}

export const textProperties = {
  color: hexColorSchema.optional().describe('Text color of the component'),

  fontSize: z.number().optional().describe('Text size of the component'),
  fontFamily: z.string().optional().describe('Text font family of the component'),
  fontWeight: z.enum(['bold', 'normal']).optional().describe('Text weight of the component'),
  fontStyle: z.enum(['italic', 'normal']).optional().describe('Text style of the component'),

  direction: z.enum(['ltr', 'rtl']).optional().describe('Text direction of the component'),
  whiteSpace: z
    .enum(['normal', 'nowrap', 'pre'])
    .optional()
    .describe('Text white space of the component'),

  textAlign: z
    .enum(['left', 'center', 'right', 'justify'])
    .optional()
    .describe('Text align of the component'),
  textTransform: z
    .enum(['uppercase', 'lowercase', 'capitalize'])
    .optional()
    .describe('Text transform of the component'),

  /**
   * Overline, underline, line-through
   */
  textOverline: z.boolean().optional().describe('Text overline of the component'),
  textUnderline: z.boolean().optional().describe('Text underline of the component'),
  textLineThrough: z.boolean().optional().describe('Text line through of the component'),

  lineHeight: z.number().optional().describe('Text line height of the component'),
  letterSpacing: z.number().optional().describe('Text letter spacing of the component'),
  wordSpacing: z.number().optional().describe('Text word spacing of the component'),
}

export const widthProperties = {
  width: zPercentageValue.optional().describe('Width of the component'),
  align: horizontalAlignment.optional().describe('Horizontal alignment of the component'),
}

export const maxWidthProperties = {
  maxWidth: z.number().optional().describe('Max width of the component'),
  ...widthProperties,
}

export const backgroundProperties = {
  bgImage: z
    .string()
    .optional()
    .describe('Background image of the component should be a valid URL'),

  bgColor: hexColorSchema
    .optional()
    .describe('Background color of the component should be a valid hex color'),
}

export const sectionProperties = {
  ...maxWidthProperties,
  ...backgroundProperties,
}
