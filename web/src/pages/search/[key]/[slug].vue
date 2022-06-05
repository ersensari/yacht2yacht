<script setup lang="ts">
defineProps<{ slug: String; key: String; message: String }>()
const user = useUserStore()
</script>
<template>
  <div>
    <div class="card">
      stored name : {{ user.savedName }}
    </div>
    {{ $props.slug }} -
    {{ $props.message }}
  </div>
</template>
