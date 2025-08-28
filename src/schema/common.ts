import { z } from 'zod'
import { hasForbiddenTags, hasUnknownTags } from '../lib/parse5'
import { ALLOWED_TEXT_HTML_TAGS, FORBIDDEN_HTML_TAGS } from './config'

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
  borderLeftWidth: z.number().optional(),
  borderRightWidth: z.number().optional(),
  borderTopWidth: z.number().optional(),
  borderBottomWidth: z.number().optional(),

  borderColor: hexColorSchema.optional(),
  borderStyle: z.enum(['solid', 'dashed', 'dotted']).optional(),
}

export const borderRadiusProperties = {
  radiusLeft: z.number().optional(),
  radiusRight: z.number().optional(),
  radiusTop: z.number().optional(),
  radiusBottom: z.number().optional(),
}

export const borderProperties = {
  ...borderStyleProperties,
  ...borderRadiusProperties,
}

export const paddingProperties = {
  paddingTop: z.number().optional(),
  paddingLeft: z.number().optional(),
  paddingRight: z.number().optional(),
  paddingBottom: z.number().optional(),
}

export const containerPaddingProperties = {
  containerPaddingTop: z.number().optional(),
  containerPaddingLeft: z.number().optional(),
  containerPaddingRight: z.number().optional(),
  containerPaddingBottom: z.number().optional(),
}

export const textProperties = {
  color: hexColorSchema.optional(),

  fontSize: z.number().optional(),
  fontFamily: z.string().optional(),
  fontWeight: z.enum(['bold', 'normal']).optional(),
  fontStyle: z.enum(['italic', 'normal']).optional(),

  direction: z.enum(['ltr', 'rtl']).optional(),
  whiteSpace: z.enum(['normal', 'nowrap', 'pre']).optional(),

  textAlign: z.enum(['left', 'center', 'right', 'justify']).optional(),
  textTransform: z.enum(['uppercase', 'lowercase', 'capitalize']).optional(),

  /**
   * Overline, underline, line-through
   */
  textOverline: z.boolean().optional(),
  textUnderline: z.boolean().optional(),
  textLineThrough: z.boolean().optional(),

  lineHeight: z.number().optional(),
  letterSpacing: z.number().optional(),
  wordSpacing: z.number().optional(),
}

export const widthProperties = {
  width: zPercentageValue.optional(),
  align: horizontalAlignment.optional(),
}

export const maxWidthProperties = {
  maxWidth: z.number().optional(),
  ...widthProperties,
}

export const backgroundProperties = {
  bgImage: z.string().optional(),
  bgColor: hexColorSchema.optional(),
}

export const sectionProperties = {
  ...maxWidthProperties,
  ...backgroundProperties,
}
