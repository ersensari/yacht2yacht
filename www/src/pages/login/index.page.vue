<script setup lang="ts">
defineProps<{ url: string,locale:string }>()
</script>
<template>
  <div>
    <h1>URL: {{ url }}</h1>
    <h2>LANG: {{ locale }}</h2>
  </div>
</template>
