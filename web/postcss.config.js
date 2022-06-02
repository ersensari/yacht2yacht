// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
      require('postcss-import')({
          plugins: [
          ],
          path: ['./node_modules'],
      }),
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-preset-env')({
          autoprefixer: { },
          features: {
              'nesting-rules': true
          }
      })
  ]
};