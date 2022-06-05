import { PageContext } from '~/types';
import { PageContextBuiltIn } from "vite-plugin-ssr"

export const onBeforeRender = async (pageContext: PageContextBuiltIn & PageContext) => {
  const name = pageContext.routeParams.name

  return {
    pageContext: {
      pageProps: {
        url: pageContext.url,
        name,
      },
    },
  }
}