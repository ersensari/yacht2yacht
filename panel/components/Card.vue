<template>
  <div class="card" :class="size">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  /**
   * small | medium | large
   */
  size: {
    type: String,
    default: 'small'
  }
})
</script>
<style lang="scss" scoped>
.card {
  margin: auto;
  padding: 2em;
  border-radius: 1em;
  border: 1px solid transparentize(#fff, 0.5);
  text-shadow: 0 0 1em transparentize(#000, 0.5);
  background: transparentize(#fff, 0.8);
  backdrop-filter: blur(20px);
  transform: perspective(500px);
  transform-style: preserve-3d;

  &.small {
    width: 200px;
  }

  &.medium {
    width: 400px;
  }

  &.large {
    width: 600px;
  }
}
</style>
