<script setup lang="ts">
import { usePageContext } from '../../renderer/usePageContext';
import { SUPPORTED_LOCALES as availableLocales, DEFAULT_LOCALE } from '../../i18n/locales'
const { locale, url } = usePageContext()

const language: { [key: string]: string } = { en: 'English', tr: 'Türkçe' }

const localeName = computed(() => language[locale])

const getLanguagePath = (newLanguage: string) => {
  newLanguage = newLanguage === DEFAULT_LOCALE ? '' : newLanguage

  const currentPath = url
  const languageDetector = new RegExp(`^\/(${availableLocales.join('|')})?\/?`)
  let newPath

  newPath = currentPath.replace(languageDetector, `/${newLanguage}/`).replaceAll('//', '/')

  return newPath
}
</script>
<template>
  <li class="group relative">
    <button id="localeMenuLink" data-dropdown-toggle="localeMenu"
      class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
      <div i-mdi-translate />
      {{ localeName }}
    </button>

    <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-auto
      absolute left-0 top-full transition-all opacity-0 group-focus-within:block 
      group-focus-within:opacity-100 group-focus-within:translate-y-1" id="localeMenu">
      <ul class="py-1 text-sm text-gray-700" aria-labelledby="localeMenu">
        <li v-for="lang in availableLocales.filter(x => x !== locale)" :key="lang">
          <a :href="getLanguagePath(lang)" class="block px-4 py-2 hover:bg-gray-100">
            {{ language[lang] }}
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>
