var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, '/src');
var publicPath = '/assets/';

module.exports = {
    port: 8000,
    entry: ["./run.js"],
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: publicPath
    },
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
