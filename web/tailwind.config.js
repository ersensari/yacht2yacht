export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
];
export const plugins = [
  require('flowbite/plugin')(),
  require('@tailwindcss/typography')(),
];
export const theme = {
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
      sand: '#F2EADF',
      dark: '#000000',
      grey: '#c4c4c4',
      midgrey: '#696969',
      lightgrey: '#b8b8b8',
      lightblack: '#2d2d2d',
      blue: '#3490dc',
      indigo: '#6574cd',
      purple: '#9561e2',
      violet: '#B682FF',
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
      card: '0px 4px 19px #2d2d2d',
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
};
