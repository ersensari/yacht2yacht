import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Component = any
export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: any
  pageProps?: PageProps
  documentProps?: {
    title?: string
    description?: string
  }
  url: string,
  locale: string
}
export interface BuildContext {
  paths: string[]
  routes: any
}

export type BuildModule = (ctx: BuildContext) => Promise<string[]>
