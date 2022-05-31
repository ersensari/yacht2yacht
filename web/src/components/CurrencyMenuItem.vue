<script setup lang="ts">
const currencies: { [key: string]: string } = {
  TRY: 'mdi-currency-try',
  USD: 'mdi-currency-usd',
  EUR: 'mdi-currency-eur',
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
  <li tabindex="0">
    <a>
      <Component :is="currency" />&nbsp;
    </a>
    <ul class="p-2 bg-base-100">
      <li v-for="curr in Object.keys(currencies)" :key="curr">
        <a @click="
          () => {
            currency = curr
          }
        " class="w-full block pl-4 pr-6 py-2 hover:bg-gray-100">
          <Component class="font-bold" :is="currencies[curr]" />
          {{ curr }}
        </a>
      </li>
    </ul>

  </li>
</template>
