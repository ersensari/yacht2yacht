<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
    <v-card class="mx-auto" max-width="300">
      <v-list>
        <v-list-subheader>REPORTS</v-list-subheader>
        <v-list-item v-for="i in length" :key="i" :value="i" active-color="primary" variant="plain"
          @click="$router.push({ path: '/about' })">
          <v-list-item-avatar start>
            <v-icon icon="mdi-home"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title>
            {{ i }}. Item
          </v-list-item-title>
        </v-list-item>
      </v-list>

    </v-card>
  </div>
</template>

<script setup lang="ts">
const title: String = 'Home page works'
const length: Number = 30


useHead({
  title: title,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'og:title', content: 'My amazing site.' }
  ]
})


</script>

<style lang="scss" scoped>
h1 {
  color: #ffaabb;
  font-size: 4rem;
  font-weight: 600;
}
</style>
