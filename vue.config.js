const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
const myTheme = path.resolve(__dirname, './src/plugins/vant/index.less');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      alias: {
        src: '@/'
      }
    }
  },
  devServer: {
    proxy: {
      '/upload': {
        target: 'https://jsonplaceholder.typicode.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/upload': ''
        }
      }
    }
  },
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // Vant主题定制方法
        modifyVars: {
          hack: `true; @import "${myTheme}";`
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/less/common.less')] // 引入全局样式变量
    }
  }
});
