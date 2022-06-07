import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContext } from '~/types'
export const onBeforeRender = async (
  pageContext: PageContext & PageContextBuiltIn,
) => {
  const name = pageContext.routeParams.name

  return {
    pageContext: {
      pageProps: {
        url: pageContext.url,
        locale: pageContext.locale,
        name,
      },
    },
  }
}
