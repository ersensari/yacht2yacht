import { PageContextBuiltIn } from 'vite-plugin-ssr'

export const onBeforeRender = async ({ routeParams }: PageContextBuiltIn) => {
  return {
    pageContext: {
      pageProps: {
        url: `/${routeParams.locale}/login`,
      },
    },
  }
}
