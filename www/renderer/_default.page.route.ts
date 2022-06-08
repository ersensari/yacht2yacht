// _default.page.route.ts

import { extractLocale } from '../i18n/locales'
import type { PageContext } from '~/types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export function onBeforeRoute(pageContext: PageContext & PageContextBuiltIn) {
  let { urlPathname: url } = pageContext

  if (url.startsWith('/manifest')) return

  const { urlWithoutLocale, locale } = extractLocale(url)
  url = urlWithoutLocale

  return {
    pageContext: {
      url,
      locale,
    },
  }
}
