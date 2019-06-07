const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function productionConfigFunc(env, options)
{
  const mode = options.mode === 'development' ? 'development' : 'production';
  return {
    mode,
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
          ],
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
      }),
    ],
    optimization: {},
  };
}

module.exports = (env, options) => {
  if (options.mode === 'development')
  {
    return [
      // development
      options.mode === 'development' && {
        mode: 'development',
        entry: './dev/main.js',
        output: {
          publicPath: '/',
          filename: '[name].js',
          chunkFilename: '[name].js',
        },
        module: {
          rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
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
        plugins: [
          new HtmlWebpackPlugin({
            template: './dev/index.html',
          }),
          new VueLoaderPlugin(),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
        ],
        devServer: {
          hot: true,
          host: '0.0.0.0',
          noInfo: true,
          contentBase: path.resolve(__dirname, '.cache/dist'),
          stats: {
            color: true,
          },
        },
      }
    ];
  }
  else
  {
    let config = productionConfigFunc(env, options);
    return [
      {
        ...config,
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
          filename: 'v-owl-carousel.min.js',
          libraryTarget: 'window',
          library: 'VOwlCarousel',
        }
      },
      {
        ...config,
        entry: path.resolve(__dirname + '/src/Carousel.vue'),
        output: {
          filename: 'v-owl-carousel.js',
          libraryTarget: 'umd',
          library: 'v-owl-carousel',
          umdNamedDefine: true,
        }
      }
    ];
  }
};
