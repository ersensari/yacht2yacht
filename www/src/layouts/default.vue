<script setup lang="ts">
const props = defineProps<{ url: string; locale: string }>()

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
      content: props.locale,
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
const isNavOpen = ref(false)
const onNavToggle = (value: boolean) => (isNavOpen.value = value)
watch(() => props.url, () => isNavOpen.value = false)
</script>
<template>
  <main :key="url" class="container w-full mx-auto">
    <Header :url="url" :locale="locale" @nav-toggle="onNavToggle" />
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
  </main>
</template>
