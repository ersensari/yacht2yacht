import { PageContextBuiltIn } from "vite-plugin-ssr"

export const onBeforeRender = async (pageContext: PageContextBuiltIn) => {
  const locale = pageContext.routeParams.locale

  return {
    pageContext: {
      pageProps: {
        url: `/${locale}/`,
        locale,
      },
    },
  }
}

export const prerender = () => {
  return '/'
}
