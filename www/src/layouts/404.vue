<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <slot />
    <div>
      <button btn text-sm m="3 t8" onclick="window.location.back(-1)">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
