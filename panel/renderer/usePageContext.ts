// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from 'vue'
import type { App } from 'vue'
import type { PageContext } from '~/types'

export { usePageContext }
export { setPageContext }

// eslint-disable-next-line symbol-description
const key = Symbol()

function usePageContext() {
  const pageContext = inject(key)
  return pageContext
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}
