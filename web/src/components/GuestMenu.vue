<template>
  <li>
    <RouterLink
      class="link"
      :to="{
        path: '/login',
        query: { redirect: $route.path },
      }"
    >
      <mdi-account />
      {{ $t('auth.login') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink class="link" to="/register">
      <mdi-account-plus />
      {{ $t('auth.register') }}
    </RouterLink>
  </li>
  <li>
    <RouterLink class="link" to="/owner/intro">
      <mdi-bullhorn class="text-red" />
      <span class="text-red">{{ $t('menus.create_ad') }} </span>
    </RouterLink>
  </li>
</template>
