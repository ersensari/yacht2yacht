import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContext } from '~/types'
export const onBeforeRender = async (
  pageContext: PageContext & PageContextBuiltIn,
) => {
  const name = pageContext.routeParams.name

  return {
    pageContext: {
      pageProps: {
        locale: pageContext.locale,
        url: pageContext.url,
        name,
      },
    },
  }
}
