import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const testData = ref([])

  const res = fetch('/api/get-test', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  async function getTest() {
    const data = await (await res).json()
    testData.value = data.value
    return data.value
  }

  return {
    getTest,
    testData,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDemoStore, import.meta.hot))
