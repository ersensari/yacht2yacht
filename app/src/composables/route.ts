// import last from 'lodash/last'
// import isempty from 'lodash/isempty'
// export function toHref(route: { path: string; query?: any; params?: any }) {
//   const { locale } = useI18n()

//   if (isempty(route)) return `/${locale.value}`
//   let href = route.path

//   if (last(href) === '/') {
//     href = href.slice(0, -1)
//   }

//   const pathArr = route.path.split('/')
//   href = `/${locale.value}${pathArr.join('/')}`

//   if (!isempty(route.params) && typeof route.params === 'string') {
//     href += `${route.params}`
//   }

//   if (!isempty(route.params) && typeof route.params === 'object') {
//     Object.values(route.params).forEach((value) => {
//       href += `${value}`
//     })
//   }

//   if (!isempty(route.query) && typeof route.query === 'string') {
//     href += `?${route.query}`
//   }

//   if (!isempty(route.query) && typeof route.query === 'object') {
//     Object.entries(route.query).forEach((value) => {
//       href +=
//         href.indexOf('?') > -1
//           ? `&${value[0]}=${value[1]}`
//           : `?${value[0]}=${value[1]}`
//     })
//   }

//   return encodeURI(href)
// }
