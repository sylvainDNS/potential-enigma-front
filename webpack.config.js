const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      '@Worker': path.resolve(__dirname, 'src/worker/'),
      '@Utils': path.resolve(__dirname, 'src/utils/'),
      '@Style': path.resolve(__dirname, 'src/style/'),
      '@Component': path.resolve(__dirname, 'src/component/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')]
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  target: 'web',
  node: {
    fs: 'empty',
  },
}
