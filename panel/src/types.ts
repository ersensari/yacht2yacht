import type { ViteSSGContext } from 'vite-ssg'

export interface PageProps { }

export type Component = any
export interface PageContext {
  Page: Component
  pageProps: Record<string, unknown>
  pageExports: {
    documentProps?: Record<string, unknown>
  }
  documentProps?: Record<string, unknown>
}

export type UserModule = (ctx: ViteSSGContext) => void

export interface BuildContext {
  paths: string[]
  routes: any
}

export type BuildModule = (ctx: BuildContext) => Promise<string[]>

export interface Author {
  id: string
  name: string
  biography: string
  picture: {
    url: string
  }
}

export interface AccordionItem {
  id: string
  heading?: string
  question?: string
  content?: {
    html?: string
  }
  answer?: {
    html?: string
  }
}

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  categories: string[]
  coverImage: {
    url: string
  }
  content: {
    html: string
    text: string
  }
  author: {
    name: string
    picture: {
      url: string
    }
  }
}

export interface Block {
  id: string
  heading: string
  subheading?: string
  plainText?: string
  linkUrl?: string
  image?: {
    url?: string
  }
  content?: {
    html?: string
    text?: string
  }
}
