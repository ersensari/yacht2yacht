<template>
  <div>
    {{ slug }}
    {{ path }}
    <div class="card">
      <div class="card-content" v-for="item in user.otherNames">
        stored name : {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUserStore()

defineProps<{ slug: String; path: String }>()
</script>
