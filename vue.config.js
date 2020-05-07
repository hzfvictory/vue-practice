const isAnalyze = process.env.ANALYZE;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: false,  // 取消eslint
  chainWebpack: config => {
    if (isAnalyze) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(
          new BundleAnalyzerPlugin({
            analyzerPort: 9999,
            openAnalyzer: true,
          }))
    }
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue实践demo';
        return args
      })
  },
  configureWebpack: () => ({
    optimization: {
      splitChunks: {
        minSize: 30000,//分离后的最小块文件大小，单位为字节
        maxSize: 0,
        minChunks: 1,//分离前，该块被引入的次数（也就是某个js文件通过import或require引入的次数）
        maxAsyncRequests: 5,//内层文件（第二层）按需加载时最大的并行加载数量
        maxInitialRequests: 3,//一个入口文件可以并行加载的最大文件数量
        automaticNameDelimiter: '~',//修改上文中的 “~” ,  若改为： “-” 则分离后的js默认命名规则为 [来源]-[入口的key值].js
        name: true,
        cacheGroups: {

          vendor: {
            name: 'vendor',
            chunks: 'all',//chunks :匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            priority: 10,
            enforce: true,
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          element: {
            name: 'element',
            chunks: 'all',//chunks :匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
            test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
            priority: 10,
            enforce: true,
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          moment: {
            name: 'moment',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](moment)[\\/]/,
            priority: 10,
            enforce: true,
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true,
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  }),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.jing999.cn:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};