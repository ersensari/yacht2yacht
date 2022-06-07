export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    name: 'English',
    default: true,
  },
  {
    locale: 'tr',
    name: 'Türkçe',
  }
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale as string

export function extractLocaleFromPath(path = '') {
  const [_, maybeLocale] = path.split('/')

  const locale = useLocalStorage('locale', ref(maybeLocale))
  if (maybeLocale !== '' && locale.value !== maybeLocale)
    locale.value = maybeLocale

  return SUPPORTED_LOCALES.includes(locale.value) ? locale.value : DEFAULT_LOCALE
}
