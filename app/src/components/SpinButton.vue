<template>
  <button v-on="listeners">
    <slot />
    <i class="fa fa-spinner fa-pulse fa-fw" v-if="busy" />
    <span class="sr-only" v-if="busy">Loading...</span>
  </button>
</template>

<script setup lang="ts">
const busy = ref(false)
const listeners = defineProps(['listeners'])
const emit = defineEmits(['onStateChanged'])

watch(busy, (value) => {
  emit('onStateChanged', value)
})
</script>
