import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { DATE_FORMATS } from './date-formats'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales'
import { NUMBER_FORMATS } from './number-formats'
import tr from './translations/tr.json'
import en from './translations/en.json'
export {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  SUPPORTED_LANGUAGES,
  extractLocale,
} from './locales'

export async function installI18n(app: App, locale = '') {
  locale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    globalInjection: true,
    messages: {
      tr,
      en,
    },
    datetimeFormats: DATE_FORMATS,
    numberFormats: NUMBER_FORMATS,
  })

  app.use(i18n)
}
