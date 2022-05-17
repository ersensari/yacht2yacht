import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true,
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "assets/scss/app.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
