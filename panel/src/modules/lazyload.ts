import VueLazyLoad from 'vue3-lazyload'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  // https:// github.com/murongg/vue3-lazyload
  app.use(VueLazyLoad, {})
}
