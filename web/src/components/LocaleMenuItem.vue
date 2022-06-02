<script setup lang="ts">
import {
  SUPPORTED_LANGUAGES as language,
  SUPPORTED_LOCALES as availableLocales,
} from '~/i18n'
const { locale } = useI18n()
const props = defineProps<{ url: string }>()

const localeName = computed(
  () => language.find((l) => l.locale === locale.value)?.name
)

const getLocaleName = (lang: string) => language.find((l) => l.locale === lang)?.name

const getLanguagePath = (newLanguage: string) => {
  if (!props.url) return `/${newLanguage}/`
  const currentPath = props.url
  const languageDetector = new RegExp(`^\/(${availableLocales.join('|')})?\/?`)
  let newPath

  newPath = currentPath.replace(languageDetector, `\/${newLanguage}\/`)

  return newPath
}
</script>
<template>
  <li tabindex="0">
    <a class="link">
      <mdi-translate />
      {{ localeName }}
    </a>
    <ul class="bg-base-100">
      <li v-for="lang in availableLocales" :key="lang">
        <a :href="getLanguagePath(lang)" class="p-10">
          {{ getLocaleName(lang) }}
        </a>
      </li>
    </ul>
  </li>
</template>
