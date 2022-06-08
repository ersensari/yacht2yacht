<script lang="ts" setup>
import { usePageContext } from '../../renderer/usePageContext'
import { DEFAULT_LOCALE } from '../../i18n/locales'

const pageContext = usePageContext()

let { href, locale } = defineProps({
  href: { type: String },
  locale: { type: String, required: false, default: () => null }
})

let mHref: any = href
const mLocale = locale === null ? pageContext.locale : locale

if (mLocale !== DEFAULT_LOCALE) {
  mHref = `/${mLocale}/${href}`.replaceAll('//', '/')
}

</script>

<template>
  <a :href="mHref" replace>
    <slot />
  </a>
</template>
