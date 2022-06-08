import Minimize from 'minimize'
import { renderToNodeStream } from '@vue/server-renderer'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { renderHeadToString } from '@vueuse/head'
import { createApp } from './app'
import type { PageContext } from '~/types'
import { includeLocale, DEFAULT_LOCALE } from '../i18n/locales'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  'pageProps',
  'documentProps',
  'locale',
  'redirectTo',
  'url'
]

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { app, head } = await createApp(pageContext)

  if (pageContext.redirectTo) {
    pageContext.redirectTo = includeLocale(pageContext.locale || DEFAULT_LOCALE, pageContext.redirectTo as any) as any

    const documentHtml = new Minimize({
      quotes: true,
      spare: true,
      comments: true,
      empty: true,
    }).parse(`<p>Redirecting...</p>
                <script data-cfasync="false" type="text/javascript">
                  window.location.href='${pageContext.redirectTo}'
                </script>
              `)
    return dangerouslySkipEscape(documentHtml)
  }

  const stream = renderToNodeStream(app)
  const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

  const contentHtml = escapeInject`
  <!DOCTYPE html>
  <html lang="en" ${htmlAttrs}>
    <head>
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${dangerouslySkipEscape(headTags)}
      <!-- <link rel="manifest" href="/manifest.webmanifest">-->
      <link rel="icon" href="/favicon.svg" type="image/svg+xml">
      <link rel="apple-touch-icon" href="/pwa-192x192.png">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9">
      <meta name="msapplication-TileColor" content="#00aba9">
      <meta name="theme-color" content="#ffffff">
      <meta name="color-scheme" content="light only">
      <base href="/" />
    </head>
    <body ${dangerouslySkipEscape(bodyAttrs)}>
      <div id="app">${stream}</div>
    </body>
  </html>`

  return contentHtml
}