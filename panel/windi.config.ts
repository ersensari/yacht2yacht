import { defineConfig } from 'windicss/helpers'
import lineClamp from 'windicss/plugin/line-clamp'

export default defineConfig({
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        wide: '1248px',
      },
      fontFamily: {
        sans: ['GT Walsheim Pro'],
        serif: ['"Cooper Lt BT"'],
        display: ['"Cooper Lt BT"'],
        body: ['GT Walsheim Pro'],
      },
      borderRadius: {
        '3xl': '1.375rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        card: '0px 4px 19px rgba(150, 105, 214, 0.5)',
      },
      fontSize: {
        hero: ['60px', '110%'],
        heading: ['40px', '120%'],
        header: ['18px', '100%'],
        body: ['18px', '145%'],
        body2: ['16px', '135%'],
        button: ['20px', '100%'],
        footnote: ['12px', '124%'],
        h1: ['48px', '124%'],
        h2: ['36px', '124%'],
        h3: ['24px', '124%'],
        h4: ['20px', '120%'],
      },
      width: {
        58: '232px',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  safelist: '-translate-x-4 -translate-x-8 -translate-x-12 -translate-x-16 -translate-x-20 translate-x-4 translate-x-8 translate-x-12 translate-x-16 translate-x-20 translate-x-10',
  plugins: [lineClamp],
})
