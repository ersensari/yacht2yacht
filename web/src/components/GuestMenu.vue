<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ url: string }>()
</script>
<template>
  <li>
    <RouterLink
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      aria-current="page"
      :to="
        toHref({
          path: '/login',
          query: { redirect: props.url },
        })
      "
    >
      <div i-mdi-account />
      {{ t('auth.login') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      aria-current="page"
      :to="toHref({ path: '/register' })"
    >
      <div i-mdi-account-plus />
      {{ t('auth.register') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      :to="toHref({ path: '/owner/intro' })"
    >
      <div i-mdi-bullhorn text-red />
      <span class="text-red">{{ t('menus.create_ad') }} </span>
    </RouterLink>
  </li>
</template>
