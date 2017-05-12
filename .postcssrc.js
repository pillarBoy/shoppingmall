// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // to edit target browsers: use "browserlist" field in package.json
    require('autoprefixer')({
      browsers: ['> 1%',
        'Last 2 versions',
        'IE 10'
      ]
    })
    // ,
    // require('postcss-autoreset')({
    //   reset: {
    //     margin: 0,
    //     padding: 0,
    //     borderRadius: 0,
    //     listStyle: 'none',
    //     boxSizing: 'border-box'
    //   }
    // })
  ]
}
