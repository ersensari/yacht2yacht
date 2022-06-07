import express from 'express'
import compression from 'compression'
import { createPageRenderer } from 'vite-plugin-ssr'
import type { PageContext } from '~/types'

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
    const vite = require('vite')
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

    const pageContextInit = { url }
    const pageContext = await renderPage(pageContextInit)

    const { httpResponse } = pageContext

    if (((pageContext as unknown) as PageContext).redirectTo) {
      const redirectTo =
        ((pageContext as unknown) as PageContext).redirectTo || '/'

      res.redirect(307, redirectTo.toString())
      return next()
    }

    if (!httpResponse) return next()

    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 30
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
