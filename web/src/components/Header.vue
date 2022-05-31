<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ url: string }>()
</script>
<template>
  <nav class="navbar base-100">
    <div class="flex-1 items-center">
      <RouterLink class="btn btn-ghost normal-case text-xl" :to="toHref({ path: '/' })">
        <img class="mr-3 h-6 sm:h-9" src="../assets/images/logo.svg?url" alt="Yacht2Yacht" />
      </RouterLink>
      <!-- Mobil menu button -->
      <button data-collapse-toggle="mobile-menu" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">{{ t('nav.toggle_navigation') }}</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="flex-none gap-2">
        <div class="form-control">
          <location-auto-complete name="location" :onentersearch="true" :onselectsearch="true" />
        </div>
      </div>
      <ul class="menu menu-horizontal p-0">
        <locale-menu-item :url="props.url" />
        <currency-menu-item />
        <guest-menu :url="props.url" v-if="1 === 1" />
        <user-menu v-else />
      </ul>
    </div>
  </nav>
</template>
