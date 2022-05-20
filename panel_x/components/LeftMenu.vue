<template>
  <v-navigation-drawer
    v-model="$leftDrawerOpen"
    dark
    permanent
    class="bg-secondary"
  >
    <v-list class="bg-secondary">
      <v-list-item v-for="(link, i) in links" :key="i" color="primary">
        <nuxt-link v-bind="link">{{ link.text }}</nuxt-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
interface Link {
  text: string;
  href: string;
  to?: string;
}
const { $leftDrawerOpen } = useNuxtApp();

const links = <Link[]>[
  { text: "About Us", to: "about-us" },
  { text: "Contact", to: "contact" },
  { text: "Page", to: "page" },
];
</script>
