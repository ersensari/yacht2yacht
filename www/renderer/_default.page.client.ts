import { registerSW } from 'virtual:pwa-register'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router'
import { createApp } from './app'
import type { PageContext } from '~/types'

import NProgress from 'nprogress'
import 'flowbite'

let app: any
const { hydrationPromise } = useClientRouter({
  async render(pageContext: PageContextBuiltInClient & PageContext) {
    if (!app) {
      const result = await createApp(pageContext)
      app = result.app
      app.mount('#app')
      registerSW({ immediate: true })
    } else {
      app.changePage(pageContext)
    }
  },
  // Vue needs the first render to be a hydration
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  // console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  NProgress.start()
  // console.log('Page transition start')
  // document.querySelector('.content')!.classList.add('page-transition')
}
function onTransitionEnd() {
  NProgress.done()
  // console.log('Page transition end')
  // document.querySelector('.content')!.classList.remove('page-transition')
}
