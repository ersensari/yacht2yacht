/// <reference types="vite-svg-loader" />
declare interface Window {
  // extend the window
  richSnippetReviewsWidgets: any
  carouselInlineWidget: any
  Beacon: any,
  __pinia: any
}

// with vite-plugin-md, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'minimize';
declare module 'flowbite';