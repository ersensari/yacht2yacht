import Minimize from 'minimize'
import { renderToString } from '@vue/server-renderer'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { renderHeadToString } from '@vueuse/head'
import { createApp } from './app'
import type { PageContext } from '~/types'

// import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from '../i18n/locales'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  'pageProps',
  'documentProps',
  'locale',
  'redirectTo',
]

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { app, head } = await createApp(pageContext)

  if (pageContext.redirectTo) {
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

  const appHtml = await renderToString(app)
  //const stream = renderToNodeStream(app)
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
      <base href="/" />
    </head>
    <body ${bodyAttrs}>
      <div id="app">${appHtml}</div>
    </body>
  </html>`

  const documentHtml = new Minimize({
    quotes: true,
    spare: true,
    comments: true,
    empty: true,
  }).parse(contentHtml)

  return dangerouslySkipEscape(documentHtml)
}

// export const prerender = (globalContext: { prerenderPageContexts: any[] }) => {
//   console.log('prerender')

//   const prerenderPageContexts: any[] = []
//   globalContext.prerenderPageContexts.forEach((pageContext) => {
//     prerenderPageContexts.push({
//       ...pageContext,
//       locale: DEFAULT_LOCALE,
//     })

//     SUPPORTED_LANGUAGES.filter(
//       (locale: any) => locale !== DEFAULT_LOCALE,
//     ).forEach((locale: any) => {
//       prerenderPageContexts.push({
//         ...pageContext,
//         url: `/${locale}${pageContext.url}`,
//         locale,
//       })
//     })
//   })
//   return {
//     globalContext: {
//       prerenderPageContexts,
//     },
//   }
// }
