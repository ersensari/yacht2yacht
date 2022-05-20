import queryString from 'query-string'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  if (typeof window === 'undefined') return

  const query = queryString.parse(location.search.toLowerCase())

  if (query.utm_source && query.utm_medium === 'aff')
    localStorage.setItem('rid', query.utm_source as string)

  if (query.rid)
    localStorage.setItem('rid', query.rid as string)
}
