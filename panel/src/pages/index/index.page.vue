<script setup lang="ts">
import { useHead } from '@vueuse/head'

defineProps(['data'])
useHead({
  title: 'Anasayfa',
  meta: [
    {
      name: 'description',
      content: 'Rent your yacht for free',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.yacht2yacht.com/',
    },
  ],
})

const HelloWorld = defineAsyncComponent({
  loader: () => import('~/components/HelloWorld.vue'),
})
</script>

<template>
  <Suspense>
    <HelloWorld msg="Welcome to y2y" />
  </Suspense>
</template>
