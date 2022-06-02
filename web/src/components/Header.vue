<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ url: string }>()
</script>
<template>
  <nav class="navbar base-100">
    <div class="flex-1">
      <RouterLink :to="toHref({ path: '/' })">
        <img
          class="mr-3 h-6 sm:h-9"
          src="../assets/images/logo.svg?url"
          alt="Yacht2Yacht"
        />
      </RouterLink>
      <!-- Mobil search button -->
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="lg:hidden inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">{{ t('nav.toggle_navigation') }}</span>
        <mdi-search />
      </button>
      <div class="mx-4 w-1/2 lg:block hidden">
        <location-auto-complete
          name="location"
          :onentersearch="true"
          :onselectsearch="true"
        />
      </div>
    </div>
    <div class="flex-1 items-center sm:mx-4">
      <ul class="menu compact menu-horizontal p-0 flex-none">
        <locale-menu-item :url="props.url" />
        <currency-menu-item />
        <guest-menu :url="props.url" v-if="1 === 1" />
        <user-menu v-else />
      </ul>
    </div>
  </nav>
</template>
