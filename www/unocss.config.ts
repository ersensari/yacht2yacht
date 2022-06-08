import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-blue-700 text-white cursor-pointer hover:bg-blue-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      autoInstall: false,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        'margin-right': '2px',
      },
      mode: 'mask',
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
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
      colors: {
        violet: '#B682FF',
        sand: '#F2EADF',
        dark: '#000000',
        grey: '#c4c4c4',
        midgrey: '#696969',
        lightgrey: '#b8b8b8',
        lightblack: '#2d2d2d',
        blue: '#3490dc',
        indigo: '#6574cd',
        purple: '#9561e2',
        pink: '#f66d9b',
        red: '#e3342f',
        orange: '#f6993f',
        yellow: '#ffed4a',
        green: '#38c172',
        teal: '#4dc0b5',
        cyan: '#6cb2eb',
        darkOrange: '#e83531',
        text: '#2c2c2c',
        textHover: '#000080',
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
})
