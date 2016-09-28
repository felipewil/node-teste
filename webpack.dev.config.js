var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, '/src');
var publicPath = '/assets/';

module.exports = {
    port: 8000,
    entry: ["./run.js", "webpack/hot/dev-server"],
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: publicPath
    },
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      hot: true,
      port: 8000,
      publicPath: publicPath,
      noInfo: false
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            include: srcPath,
            loader: 'eslint'
          }
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(js|jsx)$/, loader: "babel" },
        ]
    }
};
