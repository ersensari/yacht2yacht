<script setup lang="ts">
const { t } = useI18n()
const auth = { user: { name: '', avatar: '' } } //useAuth()
</script>
<template>
  <li>
    <a
      class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
      aria-current="page"
      :href="toHref({ path: '/yacht-owner' })"
    >
      <span class="text-red">
        <div ico-mdi-bullhorn />
        {{ t('menus.create_ad') }}
      </span>
    </a>
  </li>
  <li>
    <a
      class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
      aria-current="page"
      :href="toHref({ path: '/message/inbox' })"
    >
      {{ t('menus.messages') }}
    </a>
  </li>
  <button
    id="userMenuLink"
    data-dropdown-toggle="userMenuBtn"
    class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
  >
    <img
      :src="auth.user.avatar !== '' ? auth.user.avatar : '~/images/avatar.png'"
      :alt="auth.user.name"
      class="rounded-circle user-image"
    />
    {{ auth.user.name }}
  </button>

  <div
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-auto dark:bg-gray-700 dark:divide-gray-600"
    id="userMenuBtn"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-400"
      aria-labelledby="dropdownLargeButton"
    >
      <li>
        <a
          class="w-full block pl-4 pr-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          :href="toHref({ path: '/user/profile' })"
        >
          {{ t('auth.profile') }}
        </a>
      </li>
      <li>
        <a
          class="w-full block pl-4 pr-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          :href="toHref({ path: '/user/account' })"
        >
          {{ t('auth.account') }}
        </a>
      </li>
      <li>
        <a
          class="w-full block pl-4 pr-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          :href="toHref({ path: '/logout' })"
        >
          {{ t('auth.logout') }}
        </a>
      </li>
    </ul>
  </div>
</template>
