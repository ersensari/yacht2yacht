// _default.page.route.ts

import { extractLocale } from "../i18n/locales"
import { PageContextBuiltInClient } from "vite-plugin-ssr/client/router"
import { PageContext } from "~/types"

export { onBeforeRoute }

function onBeforeRoute(pageContext: PageContextBuiltInClient & PageContext) {
  let { url } = pageContext

  const { urlWithoutLocale, locale } = extractLocale(url)
  url = urlWithoutLocale
  return {
    pageContext: {
      url, locale,
    }
  }
}
