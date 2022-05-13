import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true
  },

  css: [
    'assets/scss/app.scss'
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['hgroup'].includes(tag)
    }
  }
});
