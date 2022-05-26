<script setup lang="ts">
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
</script>
<template>
  <main :key="url" class="container w-full mx-auto">
    <Header />
    <div
      class="container w-full mx-auto pt-[7rem]"
      :class="{ 'h-0': isNavOpen, 'overflow-hidden': isNavOpen }"
    >
      <div
        class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"
      >
        <slot />
      </div>
    </div>
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div>
  </main>
</template>
