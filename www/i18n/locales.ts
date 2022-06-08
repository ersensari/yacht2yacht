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
  const urlPaths = url.split('/')

  let locale
  let urlWithoutLocale
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1]
  if (SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = '/' + urlPaths.slice(2).join('/')
  } else {
    locale = DEFAULT_LOCALE
    urlWithoutLocale = url
  }

  return { locale, urlWithoutLocale }
}


export function includeLocale(locale: string, url: string) {
  const urlPaths = url.split('/').filter((x) => x.trim() !== '')

  let urlWithLocale

  const firstPath = urlPaths[0]
  if (SUPPORTED_LOCALES.includes(firstPath)) {
    const loc = firstPath === DEFAULT_LOCALE ? '' : firstPath
    urlWithLocale = `/${loc}/` + urlPaths.slice(1).join('/')
  } else {
    urlWithLocale = url
  }

  return urlWithLocale
}

