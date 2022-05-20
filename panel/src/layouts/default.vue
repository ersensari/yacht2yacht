<script lang="ts" setup>
useHead({
  title: 'Best yacht rental site - Yacht2Yacht',
  meta: [
    {
      name: 'description',
      content: 'Best yacht rental site - Yacht2Yacht',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'locale',
      property: 'og:type',
      content: 'en_US',
    },
    {
      name: 'type',
      property: 'og:type',
      content: 'website',
    },
  ],
  bodyAttrs: {
    class: 'bg-gray-100 font-sans leading-normal tracking-normal',
  },
})
defineProps(['url'])
const isNavOpen = ref(false)
// const onNavToggle = (value: boolean) => isNavOpen.value = value
// watch(() => props.url, () => isNavOpen.value = false)
</script>

<template>
  <main :key="url">
    <Header />
    <div
      class="container w-full mx-auto pt-20"
      :class="{ 'h-0': isNavOpen, 'overflow-hidden': isNavOpen }"
    >
      <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <slot />
      </div>
    </div>
    <Footer />
  </main>
</template>
