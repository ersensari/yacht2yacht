export default defineNuxtPlugin(() => {
  return {
    provide: {
      leftDrawerOpen: ref(true)
    }
  }
})
