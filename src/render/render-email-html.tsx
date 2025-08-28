import { Options, render } from '@react-email/components'
import React from 'react'
import { renderToStaticMarkup, renderToString, ServerOptions } from 'react-dom/server'
import { RenderEmail, TRenderProps } from '../render'

/**
 * Render the email to a static HTML string.
 *
 * This method is used for server-side rendering.
 *
 * NOTE: This is using the @react-email/components render function.
 */
export function renderEmailHtml(input: TRenderProps, options?: Options) {
  return render(<RenderEmail {...input} />, options)
}

/**
 * Render the email to a static HTML string.
 *
 * This method is used for server-side rendering.
 *
 * NOTE: This is using the react-dom/server `renderToStaticMarkup` function.
 */
export function renderEmailServerHtml(input: TRenderProps, options?: ServerOptions) {
  return renderToStaticMarkup(<RenderEmail {...input} />, options)
}

/**
 * Render the email to a static HTML string.
 *
 * This method is used for client-side rendering.
 *
 * You can use hooks and other client-side logic in this method.
 *
 * NOTE: This is using the react-dom/server `renderToString` function.
 */
export function renderEmailClientHtml(input: TRenderProps, options?: ServerOptions) {
  return renderToString(<RenderEmail {...input} />, options)
}
