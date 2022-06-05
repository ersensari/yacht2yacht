<script lang="ts">
import TRY from '~icons/mdi/currency-try'
import USD from '~icons/mdi/currency-usd'
import EUR from '~icons/mdi/currency-eur'

export default defineComponent({
  components: {
    TRY,
    USD,
    EUR,
  },
  setup() {
    const currencies = ref(['TRY', 'USD', 'EUR'])

    const currencyCookie = useSessionStorage('currency', ref('USD'), {
      listenToStorageChanges: true,
    })

    const currency = computed({
      get: () => {
        return currencyCookie?.value
      },
      set: (v: string) => {
        currencyCookie.value = v
        return v
      },
    })

    return {
      currencies,
      currency,
    }
  },
})
</script>
<template>
  <li tabindex="0">
    <a class="link"> <Component :is="currency" /> {{ currency }} </a>
    <ul class="bg-base-100">
      <li v-for="curr in currencies" :key="curr">
        <a
          @click="
            () => {
              currency = curr
            }
          "
          class="w-full block hover:bg-gray-100"
        >
          <Component class="inline-block font-bold" :is="curr" />
          {{ curr }}
        </a>
      </li>
    </ul>
  </li>
</template>
