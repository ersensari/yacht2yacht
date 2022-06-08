import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue'
import { createHead } from '@vueuse/head'
import { setPageContext } from './usePageContext'
import type { Component, PageContext } from '~/types'
import PageLayout from '~/layouts/default.vue'
import { createPinia } from 'pinia'
import devalue from '@nuxt/devalue'
import { installI18n } from '../i18n'

import '@unocss/reset/tailwind.css'
import '~/assets/styles/fonts.scss'
import 'uno.css'

export { createApp }

async function createApp(pageContext: PageContext) {
  const { Page } = pageContext
  let rootComponent: Component
  const PageWithLayout = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {}),
    }),
    created() {
      rootComponent = this
    },
    render() {
      return h(
        PageLayout as Component,
        {
          layout: this.pageProps.layout,
          ...this.pageProps,
        },
        {
          default: () => {
            return h(this.Page, this.pageProps)
          },
        },
      )
    },
  })

  const isClient = typeof window !== 'undefined'
  const app = createSSRApp(PageWithLayout)
  const head = createHead()
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  devalue(pinia.state.value)

  await installI18n(app, pageContext.locale)

  // Install all modules under `modules/`
  Object.values(import.meta.globEager('../src/modules/*.ts')).forEach((i) =>
    i.install?.({ app, isClient }),
  )

  // Make `pageContext` available from any Vue component
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
    },
  })

  // When doing Client Routing, we mutate pageContext
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext)

  // Make `pageContext` accessible from any Vue component
  setPageContext(app, pageContextReactive)

  return { app, head }
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum,
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}
