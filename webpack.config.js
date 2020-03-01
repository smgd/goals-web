const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
  const currentPath = path.join(__dirname)
  const basePath = `${currentPath}/.env`
  const envPath = `${basePath}.${env.ENVIRONMENT}`
  const finalPath = fs.existsSync(envPath) ? envPath : basePath

  const fileEnv = dotenv.config({ path: finalPath }).parsed

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
    return prev
  }, {})

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'index_bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Caribou',
        favicon: './src/assets/images/favicon.ico',
      }),
      new BaseHrefWebpackPlugin({ baseHref: '/' }),
      new HtmlWebpackRootPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
          resolve: {
            extensions: ['.js', '.jsx'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {},
          }],
        },
      ],
    },
    devServer: {
      publicPath: '/',
      contentBase: './public',
      // port: 3000,
      // writeToDisk: true,
      // proxy: {
      //   '/': 'http://localhost:8080',
      // },
      hot: true,
      historyApiFallback: true,
    },
  }
}
