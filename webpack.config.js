const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

let config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './',
              name: '[name].[ext]?[hash]',
            }
          }
        ],
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  optimization: {},
};


module.exports = [
  (env, options) => ({
    ...config,
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'v-owl-carousel.min.js',
      libraryTarget: 'window',
      library: 'VOwlCarousel',
    }
  }),
  (env, options) => ({
    ...config,
    entry: path.resolve(__dirname + '/src/Carousel.vue'),
    output: {
      filename: 'v-owl-carousel.js',
      libraryTarget: 'umd',
      library: 'v-owl-carousel',
      umdNamedDefine: true,
    }
  }),
];
