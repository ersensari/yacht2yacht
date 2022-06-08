<script setup lang="ts">
defineProps<{ url: string }>()
</script>
<template>
  <li>
    <Link
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      aria-current="page" :href="`/login?redirect=${url}`">
    <div i-mdi-account />
    {{ $t('auth.login') }}
    </Link>
  </li>
  <li>
    <Link
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      aria-current="page" href="/register">
    <div i-mdi-account-plus />
    {{ $t('auth.register') }}
    </Link>
  </li>
  <li>
    <Link
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      href="/owner/intro">
    <div i-mdi-bullhorn text-red />
    <span class="text-red">{{ $t('menus.create_ad') }}</span>
    </Link>
  </li>
</template>
