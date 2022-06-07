// _default.page.route.ts

import { extractLocale } from '../i18n/locales'
import type { PageContext } from '~/types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export { onBeforeRoute }

function onBeforeRoute(pageContext: PageContext & PageContextBuiltIn) {
  let { urlPathname } = pageContext
  if (urlPathname.startsWith('/manifest')) return

  const { urlWithoutLocale, locale } = extractLocale(urlPathname)
  urlPathname = urlWithoutLocale
  return {
    pageContext: {
      url: urlPathname,
      locale,
    },
  }
}
