<template>
  <v-card :title="title" :subtitle="subTitle"></v-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
