// _default.page.route.ts

import type { PageContext } from '~/types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { includeLocale, extractLocale, DEFAULT_LOCALE } from '../i18n/locales';

export function onBeforeRoute(pageContext: PageContext & PageContextBuiltIn) {
  let { locale, urlPathname: url, } = pageContext

  if (url.startsWith('/manifest')) return

  locale = locale === undefined ? DEFAULT_LOCALE : locale

  url = includeLocale(locale, url)

  const { urlWithoutLocale } = extractLocale(url)

  return {
    pageContext: {
      url: urlWithoutLocale,
      locale
    },
  }
}


// export const filesystemRoutingRoot = '/src/pages'
