<script setup lang="ts">
const currencies: { [key: string]: string } = {
  TRY: 'i-mdi-currency-try',
  USD: 'i-mdi-currency-usd',
  EUR: 'i-mdi-currency-eur',
}
const currencyCookie = useLocalStorage('currency', 'USD')

const currency = computed({
  get: () => {
    return currencies[currencyCookie.value]
  },
  set: (v: string) => {
    currencyCookie.value = v
    return v
  },
})
</script>
<template>
  <li>
    <button
      id="currencyMenuLink"
      data-dropdown-toggle="currencyMenuBtn"
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    >
      <div :class="currency" />&nbsp;
    </button>

    <div
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-auto dark:bg-gray-700 dark:divide-gray-600"
      id="currencyMenuBtn"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li v-for="curr in Object.keys(currencies)" :key="curr">
          <button
            @click="
              () => {
                currency = curr
              }
            "
            class="w-full block pl-4 pr-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <div font-bold :class="currencies[curr]" />
            {{ curr }}
          </button>
        </li>
      </ul>
    </div>
  </li>
</template>
