import last from 'lodash/last'
import isempty from 'lodash/isempty'
export function toHref(route: { path: string, query?: any, params?: any }) {

  if (isempty(route)) return '/'
  let href = route.path

  if (last(href) === '/') {
    href = href.slice(0, -1)
  }

  if (!isempty(route.params) && typeof route.params === 'string') {
    href += `/${route.params}`
  }

  if (!isempty(route.params) && typeof route.params === 'object') {
    Object.values(route.params).forEach((value) => {
      href += `/${value}`
    })
  }

  if (!isempty(route.query) && typeof route.query === 'string') {
    href += `?${route.query}`
  }

  if (!isempty(route.query) && typeof route.query === 'object') {
    Object.values(route.query).forEach((value, key) => {
      href += href.indexOf('?') > -1 ? `&${key}=${value}` : `?${key}=${value}`
    })
  }

  return href
}