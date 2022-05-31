<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ url: string }>()
</script>
<template>
  <li>
    <RouterLink :to="
      toHref({
        path: '/login',
        query: { redirect: props.url },
      })
    ">
      <mdi-account />
      {{ t('auth.login') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink :to="toHref({ path: '/register' })">
      <mdi-account-plus />
      {{ t('auth.register') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink :to="toHref({ path: '/owner/intro' })">
      <mdi-bullhorn class="text-red" />
      <span class="text-red">{{ t('menus.create_ad') }} </span>
    </RouterLink>
  </li>
</template>
