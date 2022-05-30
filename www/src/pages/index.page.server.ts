export const onBeforeRender = async () => {
  const locale = useLocalStorage('locale', 'en')
  return {
    pageContext: {
      pageProps: {
        url: `/${locale.value}/`,
      },
    },
  }
}
