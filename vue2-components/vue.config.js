const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:4444',
          secure: false,
        },
      },
    },
  }
 
})
