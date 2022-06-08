// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from 'vue'
import type { App } from 'vue'
import { PageContext } from '~/types'
import { PageContextBuiltIn } from 'vite-plugin-ssr'

export { usePageContext }
export { setPageContext }

// eslint-disable-next-line symbol-description
const key = Symbol('page-context')

function usePageContext(): PageContext & PageContextBuiltIn {
  const pageContext = inject<PageContext & PageContextBuiltIn & any>(key)
  return pageContext
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}
