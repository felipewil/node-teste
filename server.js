if (process.env.NODE_ENV !== 'production') {
  /* const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.dev.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath
  })); */
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.dev.config');
  var open = require('open');

  new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, 'localhost', function (err) {
      if (err) {
        console.log(err);
      }
      console.log('Listening at localhost:' + config.port);
      console.log('Opening your system browser...');
      open('http://localhost:' + config.port + '/webpack-dev-server/');
    });
} else {
  const path = require('path')
  const express = require('express')

  const port = (process.env.PORT || 8000);
  const app = express();
  const indexPath = path.join(__dirname, './index.html');
  const publicPath = express.static(path.join(__dirname, '/dist/assets/'));

  app.use('/assets/', publicPath)
  app.get('/', function (_, res) { res.sendFile(indexPath) })

  app.listen(port);
  console.log(`Listening at http://localhost:${port}`);
}

