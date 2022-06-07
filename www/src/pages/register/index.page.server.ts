import type { PageContext } from '~/types'
export const onBeforeRender = async (pageContext: PageContext) => {
  return {
    pageContext: {
      pageProps: {
        url: pageContext.url,
        locale: pageContext.locale,
      },
    },
  }
}
