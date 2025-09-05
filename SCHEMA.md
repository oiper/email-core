# 📘 Email Components API Reference

## Button

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `color`                  | Text color of the component                                   | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | Text size of the component                                    | `number`                                           |
| `fontFamily`             | Text font family of the component                             | `string`                                           |
| `fontWeight`             | Text weight of the component                                  | `'bold' \| 'normal'`                               |
| `fontStyle`              | Text style of the component                                   | `'italic' \| 'normal'`                             |
| `direction`              | Text direction of the component                               | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | Text white space of the component                             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | Text align of the component                                   | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | Text transform of the component                               | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | Text overline of the component                                | `boolean`                                          |
| `textUnderline`          | Text underline of the component                               | `boolean`                                          |
| `textLineThrough`        | Text line through of the component                            | `boolean`                                          |
| `lineHeight`             | Text line height of the component                             | `number`                                           |
| `letterSpacing`          | Text letter spacing of the component                          | `number`                                           |
| `wordSpacing`            | Text word spacing of the component                            | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `paddingTop`             | Padding top of the component                                  | `number`                                           |
| `paddingLeft`            | Padding left of the component                                 | `number`                                           |
| `paddingRight`           | Padding right of the component                                | `number`                                           |
| `paddingBottom`          | Padding bottom of the component                               | `number`                                           |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'BUTTON'`                                         |
| **`content`** (\*)       | Text content of the component                                 | `string`                                           |
| `bgColor`                | Background color of the component                             | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## Code

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                                                                                                                                                                                                                                                                                                                                   |
| :----------------------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                                                                                                                                                                                                                                                                                                                               |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                                                                                                                                                                                                                                                                                                                                |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                                                                                                                                                                                                                                                                                                                              |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderRightWidth`       | Border right width of the component                           | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderTopWidth`         | Border top width of the component                             | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                                                                                                                                                                                                                                                                                                                               |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_)                                                                                                                                                                                                                                                                                                     |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                                                                                                                                                                                                                                                                                                                      |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                                                                                                                                                                                                                                                                                                                               |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                                                                                                                                                                                                                                                                                                                               |
| `maxWidth`               | Max width of the component                                    | `number`                                                                                                                                                                                                                                                                                                                                               |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                                                                                                                                                                                                                                                                                                                                  |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                                                                                                                                                                                                                                                                                                                        |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                                                                                                                                                                                                                                                                                                                               |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                                                                                                                                                                                                                                                                                                                               |
| **`type`** (\*)          |                                                               | `'CODE'`                                                                                                                                                                                                                                                                                                                                               |
| **`content`** (\*)       | Code content of the component                                 | `string`                                                                                                                                                                                                                                                                                                                                               |
| `bgColor`                | Background color of the component                             | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_)                                                                                                                                                                                                                                                                                                     |
| `fontSize`               | Font size of the component                                    | `number`                                                                                                                                                                                                                                                                                                                                               |
| `fontFamily`             | Font family of the component                                  | `string`                                                                                                                                                                                                                                                                                                                                               |
| `showLineNumber`         | Show line number of the component                             | `boolean`                                                                                                                                                                                                                                                                                                                                              |
| **`language`** (\*)      | Language of the component. Should be a valid Prism language   | `'plain' \| 'plaintext' \| 'text' \| 'txt' \| 'extend' \| 'insertBefore' \| 'DFS' \| 'markup' \| 'html' \| 'mathml' \| 'svg' \| 'xml' \| 'ssml' \| 'atom' \| 'rss' \| 'css' \| 'clike' \| 'javascript' \| 'js' \| 'regex' \| ...`                                                                                                                      |
| **`theme`** (\*)         | Theme of the component. Should be a valid Prism theme         | `'a11yDark' \| 'atomDark' \| 'baseAteliersulphurpoolLight' \| 'cb' \| 'coldarkCold' \| 'coldarkDark' \| 'coyWithoutShadows' \| 'darcula' \| 'dracula' \| 'duotoneDark' \| 'duotoneEarth' \| 'duotoneForest' \| 'duotoneLight' \| 'duotoneSea' \| 'duotoneSpace' \| 'ghcolors' \| 'gruvboxDark' \| 'gruvboxLight' \| 'holiTheme' \| 'hopscotch' \| ...` |

_(\*) Required._

## Column

_Object containing the following properties:_

| Property            | Description                                                   | Type                                               |
| :------------------ | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`          | Link href of the component                                    | `string`                                           |
| `hideOn`            | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`              | Meta data of the component                                    | `Record<string, unknown>`                          |
| `width`             | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`             | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `paddingTop`        | Padding top of the component                                  | `number`                                           |
| `paddingLeft`       | Padding left of the component                                 | `number`                                           |
| `paddingRight`      | Padding right of the component                                | `number`                                           |
| `paddingBottom`     | Padding bottom of the component                               | `number`                                           |
| `bgImage`           | Background image of the component should be a valid URL       | `string`                                           |
| `bgColor`           | Background color of the component should be a valid hex color | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderLeftWidth`   | Border left width of the component                            | `number`                                           |
| `borderRightWidth`  | Border right width of the component                           | `number`                                           |
| `borderTopWidth`    | Border top width of the component                             | `number`                                           |
| `borderBottomWidth` | Border bottom width of the component                          | `number`                                           |
| `borderColor`       | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`       | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| **`type`** (\*)     |                                                               | `'COLUMN'`                                         |
| `vAlign`            | Vertical alignment of the column                              | `'top' \| 'middle' \| 'bottom'`                    |

_(\*) Required._

## HTML

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `maxWidth`               | Max width of the component                                    | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | Background image of the component should be a valid URL       | `string`                                           |
| `bgColor`                | Background color of the component should be a valid hex color | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'HTML'`                                           |
| **`content`** (\*)       | HTML content of the component                                 | `string`                                           |

_(\*) Required._

## Heading

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `color`                  | Text color of the component                                   | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | Text size of the component                                    | `number`                                           |
| `fontFamily`             | Text font family of the component                             | `string`                                           |
| `fontWeight`             | Text weight of the component                                  | `'bold' \| 'normal'`                               |
| `fontStyle`              | Text style of the component                                   | `'italic' \| 'normal'`                             |
| `direction`              | Text direction of the component                               | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | Text white space of the component                             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | Text align of the component                                   | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | Text transform of the component                               | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | Text overline of the component                                | `boolean`                                          |
| `textUnderline`          | Text underline of the component                               | `boolean`                                          |
| `textLineThrough`        | Text line through of the component                            | `boolean`                                          |
| `lineHeight`             | Text line height of the component                             | `number`                                           |
| `letterSpacing`          | Text letter spacing of the component                          | `number`                                           |
| `wordSpacing`            | Text word spacing of the component                            | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `paddingTop`             | Padding top of the component                                  | `number`                                           |
| `paddingLeft`            | Padding left of the component                                 | `number`                                           |
| `paddingRight`           | Padding right of the component                                | `number`                                           |
| `paddingBottom`          | Padding bottom of the component                               | `number`                                           |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'HEADING'`                                        |
| **`as`** (\*)            |                                                               | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`     |
| **`content`** (\*)       | Heading content of the component                              | `string`                                           |
| `bgColor`                | Background color of the component                             | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## Image

_Object containing the following properties:_

| Property            | Description                           | Type                                               |
| :------------------ | :------------------------------------ | :------------------------------------------------- |
| `linkHref`          | Link href of the component            | `string`                                           |
| `hideOn`            | Hide on mobile or desktop             | `'mobile' \| 'desktop'`                            |
| `meta`              | Meta data of the component            | `Record<string, unknown>`                          |
| `width`             | Width of the component                | `number` (_≥0, ≤100_)                              |
| `align`             | Horizontal alignment of the component | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`   | Border left width of the component    | `number`                                           |
| `borderRightWidth`  | Border right width of the component   | `number`                                           |
| `borderTopWidth`    | Border top width of the component     | `number`                                           |
| `borderBottomWidth` | Border bottom width of the component  | `number`                                           |
| `borderColor`       | Border color of the component         | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`       | Border style of the component         | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`     | Border radius left of the component   | `number`                                           |
| `radiusTopRight`    | Border radius right of the component  | `number`                                           |
| `radiusBottomLeft`  | Border radius top of the component    | `number`                                           |
| `radiusBottomRight` | Border radius bottom of the component | `number`                                           |
| `paddingTop`        | Padding top of the component          | `number`                                           |
| `paddingLeft`       | Padding left of the component         | `number`                                           |
| `paddingRight`      | Padding right of the component        | `number`                                           |
| `paddingBottom`     | Padding bottom of the component       | `number`                                           |
| **`type`** (\*)     |                                       | `'IMAGE'`                                          |
| **`src`** (\*)      | Image source of the component         | `string`                                           |
| `alt`               | Image alt of the component            | `string`                                           |
| `href`              | Image href of the component           | `string`                                           |

_(\*) Required._

## Markdown

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `maxWidth`               | Max width of the component                                    | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | Background image of the component should be a valid URL       | `string`                                           |
| `bgColor`                | Background color of the component should be a valid hex color | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'MARKDOWN'`                                       |
| **`content`** (\*)       | Markdown content of the component                             | `string`                                           |

_(\*) Required._

## Row

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `maxWidth`               | Max width of the component                                    | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `bgImage`                | Background image of the component should be a valid URL       | `string`                                           |
| `bgColor`                | Background color of the component should be a valid hex color | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `paddingTop`             | Padding top of the component                                  | `number`                                           |
| `paddingLeft`            | Padding left of the component                                 | `number`                                           |
| `paddingRight`           | Padding right of the component                                | `number`                                           |
| `paddingBottom`          | Padding bottom of the component                               | `number`                                           |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'ROW'`                                            |
| `gap`                    | Gap between columns of the row                                | `number` (_≥0, ≤100_)                              |
| `sideGap`                | Padding around the row                                        | `number` (_≥0, ≤100_)                              |
| `hideSideGapOnMobile`    | Hide side gap on mobile                                       | `boolean`                                          |

_(\*) Required._

## Section

_Object containing the following properties:_

| Property              | Description                                                   | Type                                               |
| :-------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`            | Link href of the component                                    | `string`                                           |
| `hideOn`              | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                | Meta data of the component                                    | `Record<string, unknown>`                          |
| `borderLeftWidth`     | Border left width of the component                            | `number`                                           |
| `borderRightWidth`    | Border right width of the component                           | `number`                                           |
| `borderTopWidth`      | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`   | Border bottom width of the component                          | `number`                                           |
| `borderColor`         | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`         | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`       | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`      | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`    | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`   | Border radius bottom of the component                         | `number`                                           |
| `maxWidth`            | Max width of the component                                    | `number`                                           |
| `width`               | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`               | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `bgImage`             | Background image of the component should be a valid URL       | `string`                                           |
| `bgColor`             | Background color of the component should be a valid hex color | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `paddingTop`          | Padding top of the component                                  | `number`                                           |
| `paddingLeft`         | Padding left of the component                                 | `number`                                           |
| `paddingRight`        | Padding right of the component                                | `number`                                           |
| `paddingBottom`       | Padding bottom of the component                               | `number`                                           |
| **`type`** (\*)       |                                                               | `'SECTION'`                                        |
| `gap`                 | Gap between the children                                      | `number`                                           |
| `sideGap`             | Padding around the section                                    | `number` (_≥0, ≤100_)                              |
| `hideSideGapOnMobile` | Hide side gap on mobile                                       | `boolean`                                          |

_(\*) Required._

## Spacer

_Object containing the following properties:_

| Property            | Description                           | Type                                               |
| :------------------ | :------------------------------------ | :------------------------------------------------- |
| `linkHref`          | Link href of the component            | `string`                                           |
| `hideOn`            | Hide on mobile or desktop             | `'mobile' \| 'desktop'`                            |
| `meta`              | Meta data of the component            | `Record<string, unknown>`                          |
| `borderLeftWidth`   | Border left width of the component    | `number`                                           |
| `borderRightWidth`  | Border right width of the component   | `number`                                           |
| `borderTopWidth`    | Border top width of the component     | `number`                                           |
| `borderBottomWidth` | Border bottom width of the component  | `number`                                           |
| `borderColor`       | Border color of the component         | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`       | Border style of the component         | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`     | Border radius left of the component   | `number`                                           |
| `radiusTopRight`    | Border radius right of the component  | `number`                                           |
| `radiusBottomLeft`  | Border radius top of the component    | `number`                                           |
| `radiusBottomRight` | Border radius bottom of the component | `number`                                           |
| **`type`** (\*)     |                                       | `'SPACER'`                                         |
| **`height`** (\*)   | Height of the spacer                  | `number`                                           |
| `bgColor`           | Background color of the spacer        | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._

## Text

_Object containing the following properties:_

| Property                 | Description                                                   | Type                                               |
| :----------------------- | :------------------------------------------------------------ | :------------------------------------------------- |
| `linkHref`               | Link href of the component                                    | `string`                                           |
| `hideOn`                 | Hide on mobile or desktop                                     | `'mobile' \| 'desktop'`                            |
| `meta`                   | Meta data of the component                                    | `Record<string, unknown>`                          |
| `color`                  | Text color of the component                                   | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `fontSize`               | Text size of the component                                    | `number`                                           |
| `fontFamily`             | Text font family of the component                             | `string`                                           |
| `fontWeight`             | Text weight of the component                                  | `'bold' \| 'normal'`                               |
| `fontStyle`              | Text style of the component                                   | `'italic' \| 'normal'`                             |
| `direction`              | Text direction of the component                               | `'ltr' \| 'rtl'`                                   |
| `whiteSpace`             | Text white space of the component                             | `'normal' \| 'nowrap' \| 'pre'`                    |
| `textAlign`              | Text align of the component                                   | `'left' \| 'center' \| 'right' \| 'justify'`       |
| `textTransform`          | Text transform of the component                               | `'uppercase' \| 'lowercase' \| 'capitalize'`       |
| `textOverline`           | Text overline of the component                                | `boolean`                                          |
| `textUnderline`          | Text underline of the component                               | `boolean`                                          |
| `textLineThrough`        | Text line through of the component                            | `boolean`                                          |
| `lineHeight`             | Text line height of the component                             | `number`                                           |
| `letterSpacing`          | Text letter spacing of the component                          | `number`                                           |
| `wordSpacing`            | Text word spacing of the component                            | `number`                                           |
| `width`                  | Width of the component                                        | `number` (_≥0, ≤100_)                              |
| `align`                  | Horizontal alignment of the component                         | `'left' \| 'center' \| 'right'`                    |
| `borderLeftWidth`        | Border left width of the component                            | `number`                                           |
| `borderRightWidth`       | Border right width of the component                           | `number`                                           |
| `borderTopWidth`         | Border top width of the component                             | `number`                                           |
| `borderBottomWidth`      | Border bottom width of the component                          | `number`                                           |
| `borderColor`            | Border color of the component                                 | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |
| `borderStyle`            | Border style of the component                                 | `'solid' \| 'dashed' \| 'dotted'`                  |
| `radiusTopLeft`          | Border radius left of the component                           | `number`                                           |
| `radiusTopRight`         | Border radius right of the component                          | `number`                                           |
| `radiusBottomLeft`       | Border radius top of the component                            | `number`                                           |
| `radiusBottomRight`      | Border radius bottom of the component                         | `number`                                           |
| `paddingTop`             | Padding top of the component                                  | `number`                                           |
| `paddingLeft`            | Padding left of the component                                 | `number`                                           |
| `paddingRight`           | Padding right of the component                                | `number`                                           |
| `paddingBottom`          | Padding bottom of the component                               | `number`                                           |
| `containerPaddingTop`    | Container padding top of the component. Works like margin.    | `number`                                           |
| `containerPaddingLeft`   | Container padding left of the component. Works like margin.   | `number`                                           |
| `containerPaddingRight`  | Container padding right of the component. Works like margin.  | `number`                                           |
| `containerPaddingBottom` | Container padding bottom of the component. Works like margin. | `number`                                           |
| **`type`** (\*)          |                                                               | `'TEXT'`                                           |
| **`content`** (\*)       | Text content of the component                                 | `string`                                           |
| `bgColor`                | Background color of the component                             | `string` (_regex: `/^#(?:[0-9a-fA-F]{3}){1,2}$/`_) |

_(\*) Required._
