const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    hot: true,
    historyApiFallback: true
  },
  entry: [
    "react-hot-loader/patch",
    path.join(__dirname, '../../app/web/index.js')
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
      { 
        test: /\.less$/, 
        loader: 'style!css!autoprefixer?browsers=last 2 version!less' 
      },{
        test: /\.json$/,
        loader: "json",
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          // plugins: [['react-transform', {
            // transforms: [{
            //   transform: 'react-transform-hmr',
            //   imports: ['react'],
            //   // this is important for Webpack HMR:
            //   locals: ['module']
            // }],
          // }]],
        },
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['public']),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    new webpack.NamedModulesPlugin()
  ],
};
