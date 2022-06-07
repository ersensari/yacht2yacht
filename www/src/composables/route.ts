export function toHref(route: { path: string; query?: any; params?: any }) {
  const { locale } = useI18n()

  if (route.path) return `/${locale.value}`
  let href = route.path

  const pathArr = route.path.split('/')
  href = `/${locale.value}${pathArr.join('/')}`

  if (route.params && typeof route.params === 'string') {
    href += `${route.params}`
  }

  if (route.params && typeof route.params === 'object') {
    Object.values(route.params).forEach((value) => {
      href += `${value}`
    })
  }

  if (route.query && typeof route.query === 'string') {
    href += `?${route.query}`
  }

  if (route.query && typeof route.query === 'object') {
    Object.entries(route.query).forEach((value) => {
      href +=
        href.indexOf('?') > -1
          ? `&${value[0]}=${value[1]}`
          : `?${value[0]}=${value[1]}`
    })
  }

  return encodeURI(href)
}
