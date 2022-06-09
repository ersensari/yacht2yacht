// _default.page.route.ts

import type { PageContext } from '~/types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { extractLocale } from '../i18n/locales';

export function onBeforeRoute(pageContext: PageContext & PageContextBuiltIn) {
  let { url, } = pageContext

  const { urlWithoutLocale, locale } = extractLocale(url)
  url = urlWithoutLocale

  return {
    pageContext: {
      url,
      locale
    },
  }
}


// export const filesystemRoutingRoot = '/src/pages'
