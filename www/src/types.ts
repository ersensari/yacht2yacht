import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Component = any

export interface PageProps {
  [x: string]: any
}
// The `pageContext` that are available in both on the server-side and browser-side
export interface PageContext {
  Page: Component
  pageProps: PageProps
  pageExports: {
    documentProps?: Record<string, unknown>
  }
  documentProps?: Record<string, unknown>
  url: string
  locale: string
  redirectTo?: Record<string, unknown>
}
export interface BuildContext {
  paths: string[]
  routes: any
}

export type BuildModule = (ctx: BuildContext) => Promise<string[]>
