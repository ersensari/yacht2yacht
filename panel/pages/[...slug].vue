<template>
  <div class="container">
    <hgroup>
      <h1 v-if="$route.params.slug">
        {{ ($route.params.slug as string[]).join(' ') }} Page
      </h1>
      <h2>
        {{ title.title }}
      </h2>
    </hgroup>
    <article>
      <header>{{ title.title }}</header>
      <ul>
        <li v-for="i in length" :key="i" :value="i" @click="$router.push({ path: '/about' })">
          {{ i }}. Item
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup lang="ts">
const { data: title } = await useFetch('/api')
const length: Number = 30

useHead({
  title: title.value.title,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'og:title', content: 'My amazing site.' }
  ]
})

definePageMeta({
  layout: "guarded",
})

</script>

<style lang="scss" scoped>
h1 {
  color: #ffaabb;
  font-size: 4rem;
  font-weight: 600;
}
</style>
