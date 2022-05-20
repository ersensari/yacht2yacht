<template>
  <NuxtLayout name="guarded">
    <PageHeader
      :title="$route.params.slug ? ($route.params.slug as string[]).join(' ') : 'Home'"
      :sub-title="title.title"
    />
    <div>
      <v-alert type="success">I'm a success alert.</v-alert>

      <br />

      <v-alert type="info">I'm an info alert.</v-alert>

      <br />

      <v-alert type="warning">I'm a warning alert.</v-alert>

      <br />

      <v-alert type="error">I'm an error alert.</v-alert>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: title } = await useFetch("/api");
const length: Number = 30;

useHead({
  title: title.value.title,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "og:title", content: "My amazing site." }],
});
</script>

<style lang="scss" scoped>
h1 {
  color: #ffaabb;
  font-size: 4rem;
  font-weight: 600;
}
</style>
