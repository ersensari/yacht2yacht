export const onBeforeRender = async () => {
  const data = ['Menu1', 'Menu2', 'Menu3']

  return {
    pageContext: {
      pageProps: {
        url: '/',
        data,
      },
    },
  }
}
