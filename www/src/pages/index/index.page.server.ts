export const onBeforeRender = async (pageContext: any) => {
  const data = { name: 'ersen sari', describtion: 'test' }
  return {
    pageContext: {
      pageProps: {
        data
      },
    },
  }
}
