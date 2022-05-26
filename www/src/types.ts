import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Component = any
export interface PageContext {
  Page: Component
  pageProps: Record<string, unknown>
  pageExports: {
    documentProps?: Record<string, unknown>
  }
  documentProps?: Record<string, unknown>
}

export interface BuildContext {
  paths: string[]
  routes: any
}

export type BuildModule = (ctx: BuildContext) => Promise<string[]>
