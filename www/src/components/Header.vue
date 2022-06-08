<script setup lang="ts">
const props = defineProps<{ url: string, locale: string}>()
const emit = defineEmits(['navToggle'])
const isNavOpen = ref(false)
const isNavScrolled = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
  emit('navToggle', isNavOpen.value)
}
onMounted(() => {
  window.addEventListener('resize', () => {
    isNavOpen.value = false
    emit('navToggle', false)
  })
})

</script>
<template>
  <header :class="{ 'xl:bg-sand': isNavScrolled, 'xl:h-30': isNavScrolled }">
  {{$i18n.locale}}
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a class="flex items-center text-4xl" href="/" replace>
          BLA!
          <!-- <img
            class="mr-3 h-6 sm:h-9"
            src="/images/logo.svg?url"
            alt="Yacht2Yacht"
          /> -->
        </a>
        <!-- Mobil menu button -->
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          :aria-pressed="isNavOpen"
          @click="toggleNav"
        >
          <span class="sr-only">{{ $t('nav.toggle_navigation') }}</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <!-- <div class="p-2 flex-grow-1">
          <location-auto-complete
            name="location"
            :onentersearch="true"
            :onselectsearch="true"
          />
        </div> -->
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <locale-menu-item :url="props.url" :locale="props.locale" />
            <currency-menu-item />
            <guest-menu :url="props.url" v-if="1 === 1" />
            <user-menu v-else />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
