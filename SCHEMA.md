# 📘 Email Components API Reference

## EmailButton

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `color`                  | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | `number`                                           |
| `fontFamily`             | `string`                                           |
| `fontWeight`             | `'bold' \| 'normal'`                               |
| `fontStyle`              | `'italic' \| 'normal'`                             |
| `direction`              | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | `boolean`                                          |
| `textUnderline`          | `boolean`                                          |
| `textLineThrough`        | `boolean`                                          |
| `lineHeight`             | `number`                                           |
| `letterSpacing`          | `number`                                           |
| `wordSpacing`            | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'BUTTON'`                                         |
| **`content`** (\*)       | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## EmailCode

_Object containing the following properties:_

| Property                 | Type                                                                                                                                                                                                                                                                                                                                                   |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linkHref`               | `string`                                                                                                                                                                                                                                                                                                                                               |
| `hideOn`                 | `'mobile' \| 'desktop'`                                                                                                                                                                                                                                                                                                                                |
| `meta`                   | `Record<string, unknown>`                                                                                                                                                                                                                                                                                                                              |
| `borderLeftWidth`        | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderRightWidth`       | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderTopWidth`         | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderBottomWidth`      | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_)                                                                                                                                                                                                                                                                                                     |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                                                                                                                                                                                                                                                                                                                      |
| `radiusLeft`             | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusRight`            | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusTop`              | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusBottom`           | `number`                                                                                                                                                                                                                                                                                                                                               |
| `maxWidth`               | `number`                                                                                                                                                                                                                                                                                                                                               |
| `width`                  | `number` (_≥0, ≤100_)                                                                                                                                                                                                                                                                                                                                  |
| `align`                  | `'left' \| 'center' \| 'right'`                                                                                                                                                                                                                                                                                                                        |
| `containerPaddingTop`    | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingLeft`   | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingRight`  | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingBottom` | `number`                                                                                                                                                                                                                                                                                                                                               |
| **`type`** (\*)          | `'CODE'`                                                                                                                                                                                                                                                                                                                                               |
| **`content`** (\*)       | `string`                                                                                                                                                                                                                                                                                                                                               |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_)                                                                                                                                                                                                                                                                                                     |
| `fontSize`               | `number`                                                                                                                                                                                                                                                                                                                                               |
| `fontFamily`             | `string`                                                                                                                                                                                                                                                                                                                                               |
| `showLineNumber`         | `boolean`                                                                                                                                                                                                                                                                                                                                              |
| **`language`** (\*)      | `'plain' \| 'plaintext' \| 'text' \| 'txt' \| 'extend' \| 'insertBefore' \| 'DFS' \| 'markup' \| 'html' \| 'mathml' \| 'svg' \| 'xml' \| 'ssml' \| 'atom' \| 'rss' \| 'css' \| 'clike' \| 'javascript' \| 'js' \| 'regex' \| ...`                                                                                                                      |
| **`theme`** (\*)         | `'a11yDark' \| 'atomDark' \| 'baseAteliersulphurpoolLight' \| 'cb' \| 'coldarkCold' \| 'coldarkDark' \| 'coyWithoutShadows' \| 'darcula' \| 'dracula' \| 'duotoneDark' \| 'duotoneEarth' \| 'duotoneForest' \| 'duotoneLight' \| 'duotoneSea' \| 'duotoneSpace' \| 'ghcolors' \| 'gruvboxDark' \| 'gruvboxLight' \| 'holiTheme' \| 'hopscotch' \| ...` |

_(\*) Required._

## EmailColumn

_Object containing the following properties:_

| Property            | Type                                               |
| :------------------ | :------------------------------------------------- |
| `linkHref`          | `string`                                           |
| `hideOn`            | `'mobile' \| 'desktop'`                            |
| `meta`              | `Record<string, unknown>`                          |
| `width`             | `number` (_≥0, ≤100_)                              |
| `align`             | `'left' \| 'center' \| 'right'`                    |
| `paddingTop`        | `number`                                           |
| `paddingLeft`       | `number`                                           |
| `paddingRight`      | `number`                                           |
| `paddingBottom`     | `number`                                           |
| `bgImage`           | `string`                                           |
| `bgColor`           | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderLeftWidth`   | `number`                                           |
| `borderRightWidth`  | `number`                                           |
| `borderTopWidth`    | `number`                                           |
| `borderBottomWidth` | `number`                                           |
| `borderColor`       | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`       | `'solid' \| 'dashed' \| 'dotted'`                  |
| **`type`** (\*)     | `'COLUMN'`                                         |
| `vAlign`            | `'top' \| 'middle' \| 'bottom'`                    |

_(\*) Required._

## EmailHTML

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `maxWidth`               | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'HTML'`                                           |
| **`content`** (\*)       | `string`                                           |

_(\*) Required._

## EmailHeading

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `color`                  | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | `number`                                           |
| `fontFamily`             | `string`                                           |
| `fontWeight`             | `'bold' \| 'normal'`                               |
| `fontStyle`              | `'italic' \| 'normal'`                             |
| `direction`              | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | `boolean`                                          |
| `textUnderline`          | `boolean`                                          |
| `textLineThrough`        | `boolean`                                          |
| `lineHeight`             | `number`                                           |
| `letterSpacing`          | `number`                                           |
| `wordSpacing`            | `number`                                           |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'HEADING'`                                        |
| **`as`** (\*)            | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`     |
| **`content`** (\*)       | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## EmailImage

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'IMAGE'`                                          |
| **`src`** (\*)           | `string`                                           |
| `alt`                    | `string`                                           |
| `href`                   | `string`                                           |

_(\*) Required._

## EmailMarkdown

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `maxWidth`               | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'MARKDOWN'`                                       |
| **`content`** (\*)       | `string`                                           |

_(\*) Required._

## EmailRow

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `maxWidth`               | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'ROW'`                                            |
| `gap`                    | `number` (_≥0, ≤100_)                              |
| `sideGap`                | `number` (_≥0, ≤100_)                              |

_(\*) Required._

## EmailSection

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `maxWidth`               | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'SECTION'`                                        |

_(\*) Required._

## EmailSpacer

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'SPACER'`                                         |
| **`height`** (\*)        | `number`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## EmailText

_Object containing the following properties:_

| Property                 | Type                                               |
| :----------------------- | :------------------------------------------------- |
| `linkHref`               | `string`                                           |
| `hideOn`                 | `'mobile' \| 'desktop'`                            |
| `meta`                   | `Record<string, unknown>`                          |
| `color`                  | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | `number`                                           |
| `fontFamily`             | `string`                                           |
| `fontWeight`             | `'bold' \| 'normal'`                               |
| `fontStyle`              | `'italic' \| 'normal'`                             |
| `direction`              | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | `boolean`                                          |
| `textUnderline`          | `boolean`                                          |
| `textLineThrough`        | `boolean`                                          |
| `lineHeight`             | `number`                                           |
| `letterSpacing`          | `number`                                           |
| `wordSpacing`            | `number`                                           |
| `width`                  | `number` (_≥0, ≤100_)                              |
| `align`                  | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | `number`                                           |
| `borderRightWidth`       | `number`                                           |
| `borderTopWidth`         | `number`                                           |
| `borderBottomWidth`      | `number`                                           |
| `borderColor`            | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusLeft`             | `number`                                           |
| `radiusRight`            | `number`                                           |
| `radiusTop`              | `number`                                           |
| `radiusBottom`           | `number`                                           |
| `paddingTop`             | `number`                                           |
| `paddingLeft`            | `number`                                           |
| `paddingRight`           | `number`                                           |
| `paddingBottom`          | `number`                                           |
| `containerPaddingTop`    | `number`                                           |
| `containerPaddingLeft`   | `number`                                           |
| `containerPaddingRight`  | `number`                                           |
| `containerPaddingBottom` | `number`                                           |
| **`type`** (\*)          | `'TEXT'`                                           |
| **`content`** (\*)       | `string`                                           |
| `bgColor`                | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._
