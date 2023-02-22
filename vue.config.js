const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8080',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/': ''
//         }
//       }
//     }
//   }
// }

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}