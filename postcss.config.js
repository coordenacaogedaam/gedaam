module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'tailwindcss',
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009'
                /* grid: 'no-autoplace' */
              },
              stage: 3,
              features: {
                'nesting-rules': true,
                'custom-properties': true
              }
            }
          ]
        ]
      : ['tailwindcss']
}
