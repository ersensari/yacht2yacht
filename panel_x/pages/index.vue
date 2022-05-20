<template>
  <div>
    <NuxtLayout name="guarded">
      <PageHeader title="Welcome" sub-title="Yacht2Yacht" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "y2y panel home page",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "og:title", content: "My amazing site." }],
});
</script>
