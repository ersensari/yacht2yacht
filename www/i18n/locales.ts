export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    name: 'English',
    default: true,
  },
  {
    locale: 'tr',
    name: 'Türkçe',
  },
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale as string


export function extractLocale(url: string) {
  const urlPaths = url.split('/').filter((x) => x.trim() !== '')
  
  let locale
  let urlWithoutLocale

  const firstPath = urlPaths[0]
  if (
    SUPPORTED_LOCALES.filter((l) => l !== DEFAULT_LOCALE).includes(firstPath)
  ) {
    locale = firstPath
    urlWithoutLocale = '/' + urlPaths.slice(1).join('/')
  } else {
    locale = DEFAULT_LOCALE
    urlWithoutLocale = url
  }

  return { locale, urlWithoutLocale }
}
