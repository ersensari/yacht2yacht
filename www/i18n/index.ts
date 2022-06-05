import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { DATE_FORMATS } from './date-formats'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales'
import { NUMBER_FORMATS } from './number-formats'

export {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  SUPPORTED_LANGUAGES,
  extractLocaleFromPath,
} from './locales'

const messageImports = import.meta.glob('./translations/*.json')

function importLocale(locale: string) {
  const [, importLocale] =
    Object.entries(messageImports).find(([key]) =>
      key.includes(`/${locale}.`)
    ) || []

  return importLocale && importLocale()
}

export async function installI18n(app: App, locale = '') {
  locale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
  const messages = await importLocale(locale)

  //const messageImports = Object.values(import.meta.globEager('./translations/*.json'))


  //const messages = await import(`./translations/${locale}.json`)

  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    globalInjection: true,
    messages: {
      [locale]: messages?.default || messages,
    },
    datetimeFormats: DATE_FORMATS,
    numberFormats: NUMBER_FORMATS,
  })

  app.use(i18n)
}
