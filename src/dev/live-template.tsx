import { Button, render } from '@react-email/components'
import Express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { RenderEmail, TEditorComponentProps } from '../render-email'

const app = Express()

function Editor(props: TEditorComponentProps) {
  const { mode, node, children, RenderComponentWithContent, paths } = props

  function Rte({ children }: { children: React.ReactNode }) {
    return (
      <span itemType={'<---RTE--->'} style={{ display: 'block' }}>
        {children}
      </span>
    )
  }

  const emailContent =
    node.type === 'TEXT' && RenderComponentWithContent ? (
      <RenderComponentWithContent>
        <Rte>{node.content}</Rte>
      </RenderComponentWithContent>
    ) : node.type === 'BUTTON' && RenderComponentWithContent ? (
      <RenderComponentWithContent>
        <Rte>{node.content}</Rte>
      </RenderComponentWithContent>
    ) : node.type === 'HEADING' && RenderComponentWithContent ? (
      <RenderComponentWithContent>
        <Rte>{node.content}</Rte>
      </RenderComponentWithContent>
    ) : (
      children
    )

  return <div itemType={`<---${node.type}@${mode}#${paths.join('.')}--->`}>{emailContent}</div>
}

app.get('/', async (_, res) => {
  const email = (
    <RenderEmail
      mode={'detailed'}
      config={{ maxWidth: '768px' }}
      body={[
        {
          type: 'CODE',
          language: 'javascript',
          content: 'console.log("Hello World")',
          showLineNumber: true,
          theme: 'oneDark',
        },
        {
          type: 'MARKDOWN',
          content: '# Hello World From Markdown',
        },
        {
          type: 'HTML',
          content: '<h1>Hello World</h1>',
        },
        {
          type: 'TEXT',
          content: 'Hello World #Text',
          textAlign: 'center',
          containerPaddingTop: 10,
          containerPaddingBottom: 10,
          paddingLeft: 100,
          paddingRight: 100,
        },
        {
          type: 'SPACER',
          height: 50,
        },
        {
          type: 'SECTION',
          children: [{ type: 'SPACER', height: 100 }],
        },
        {
          type: 'HEADING',
          as: 'h1',
          textAlign: 'center',
          content: 'Hello World',
        },
        {
          type: 'BUTTON',
          textAlign: 'center',
          content: 'Click Me',
          linkHref: 'https://example.com',
        },
        {
          type: 'IMAGE',
          src: 'https://github.com/NazmusSayad.png',
          width: 30,
        },
        {
          type: 'ROW',
          columns: [
            {
              type: 'COLUMN',
              width: 50,
              vAlign: 'bottom',
              children: [
                {
                  type: 'TEXT',
                  content: 'Hello World',
                  width: 50,
                },
              ],
            },
            {
              type: 'COLUMN',
              width: 50,
              children: [
                {
                  type: 'SECTION',
                  children: [
                    {
                      type: 'IMAGE',
                      src: 'https://github.com/NazmusSayad.png',
                      width: 100,
                    },
                  ],
                },
              ],
            },
            {
              type: 'COLUMN',
              width: 50,
              children: [],
            },
          ],
        },
      ]}
      editor={{ Editor, info: { doSomething() {} } }}
    />
  )

  const html = await render(email)
  res.send(html)
})

app.get('/static', async (_, res) => {
  res.send(
    renderToStaticMarkup(
      <Button>
        <div>HELLO</div>
      </Button>
    )
  )
  res.send(renderToStaticMarkup(<Button dangerouslySetInnerHTML={{ __html: 'HELLO' }} />))
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
})
