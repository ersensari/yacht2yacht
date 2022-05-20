// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const useLazyStyle = (url: string) => {
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  link.type = 'text/css'
  head.appendChild(link)
}

export const useLazyScript = (url: string) => {
  const head = document.getElementsByTagName('head')[0]
  const script = document.createElement('script')
  script.src = url
  script.defer = true
  head.appendChild(script)
}
