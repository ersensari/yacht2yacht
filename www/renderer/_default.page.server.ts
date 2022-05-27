import Minimize from 'minimize'
import { renderToString } from '@vue/server-renderer'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { renderHeadToString } from '@vueuse/head'
import { createApp } from './app'
import type { PageContext } from '~/types'

export { render }

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'documentProps', 'url']

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { app, head } = createApp(pageContext)

  const appHtml = await renderToString(app)
  const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)
  const contentHtml = `
  <!DOCTYPE html>
  <html lang="en" ${htmlAttrs}>
    <head>
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${headTags}
      <link rel="manifest" href="/manifest.webmanifest">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml">
      <link rel="apple-touch-icon" href="/pwa-192x192.png">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9">
      <meta name="msapplication-TileColor" content="#00aba9">
      <meta name="theme-color" content="#ffffff">
      <meta name="color-scheme" content="light only">
    </head>
    <body ${bodyAttrs}>
      <div id="app">${appHtml}</div>
    </body>
  </html>`

  const documentHtml = dangerouslySkipEscape(new Minimize(
    {
      quotes: true,
      spare: true,
      comments: true,
      empty: true,
    },
  ).parse(contentHtml))

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
