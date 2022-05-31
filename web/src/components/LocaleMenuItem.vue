<script setup lang="ts">
const { availableLocales, locale } = useI18n()
const props = defineProps<{ url: string }>()

const language: { [key: string]: string } = { en: 'English', tr: 'Türkçe' }

const localeName = computed(() => language[locale.value])

const getLanguagePath = (newLanguage: string) => {
  if (!props.url) return '/' + locale.value
  const currentPath = props.url
  const languageDetector = new RegExp(`^\/(${availableLocales.join('|')})?\/?`)
  let newPath

  newPath = currentPath.replace(languageDetector, `/${newLanguage}/`)

  if (currentPath !== newPath) {
    locale.value = newLanguage
  }
  return newPath
}
</script>
<template>
  <li>
    <button
      id="localeMenuLink"
      data-dropdown-toggle="localeMenu"
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    >
      <div i-mdi-translate />
      {{ localeName }}
    </button>

    <div
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-auto dark:bg-gray-700 dark:divide-gray-600"
      id="localeMenu"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="localeMenu"
      >
        <li v-for="lang in availableLocales" :key="lang">
          <RouterLink
            :to="getLanguagePath(lang)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {{ language[lang] }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </li>
</template>
