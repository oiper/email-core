import { textProperties } from '../../schema/common'

export function spreadTextStyleProperties(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: Partial<Record<keyof typeof textProperties, any>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fallbacks: Partial<Record<keyof typeof textProperties, any>> = {}
): Partial<React.CSSProperties> {
  return {
    color: config.color ?? fallbacks.color,

    fontSize: config.fontSize ?? fallbacks.fontSize,
    fontFamily: config.fontFamily ?? fallbacks.fontFamily,
    fontWeight: config.fontWeight ?? fallbacks.fontWeight,
    fontStyle: config.fontStyle ?? fallbacks.fontStyle,

    lineHeight: config.lineHeight ?? fallbacks.lineHeight,
    letterSpacing: config.letterSpacing ?? fallbacks.letterSpacing,
    wordSpacing: config.wordSpacing ?? fallbacks.wordSpacing,

    direction: config.direction ?? fallbacks.direction,
    whiteSpace: config.whiteSpace ?? fallbacks.whiteSpace,

    textAlign: config.textAlign ?? fallbacks.textAlign,
    textTransform: config.textTransform ?? fallbacks.textTransform,

    textDecoration: [
      config.textOverline && 'overline',
      config.textUnderline && 'underline',
      config.textLineThrough && 'line-through',
    ]
      .filter(Boolean)
      .join(' '),
  }
}
