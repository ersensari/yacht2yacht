import express from 'express'
import compression from 'compression'
import { createPageRenderer } from 'vite-plugin-ssr'
import type { PageContext } from '~/types'
import * as vite from 'vite'
import { DEFAULT_LOCALE } from '../i18n/locales'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = express()

  app.use(compression())

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: 'ssr' },
    })
    app.use(viteDevServer.middlewares)
  }

  const renderPage = await createPageRenderer({
    viteDevServer,
    isProduction,
    root,
  })

  app.get('*', async (req, res, next) => {
    let url = req.originalUrl

    const pageContextInit = { url, locale: DEFAULT_LOCALE }
    const pageContext = await renderPage(pageContextInit)

    const { httpResponse } = pageContext

    if (((pageContext as unknown) as PageContext).redirectTo) {
      const redirectTo =
        ((pageContext as unknown) as PageContext).redirectTo || '/'

      res.redirect(307, redirectTo.toString())
      return next()
    }

    if (!httpResponse) return next()
    const stream = await httpResponse.getNodeStream()
    const { statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType)
    stream.pipe(res)
  })

  const port = process.env.PORT || 30
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
