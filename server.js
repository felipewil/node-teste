// If not production environment
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

  var compiler = webpack(config);

  var server = new WebpackDevServer(compiler, config.devServer);

  /*
    server.listen([port][, hostname][, backlog][, callback])
    - info: https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
  */
  server.listen(config.port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
    console.log('Opening your system browser...');
    open('http://localhost:' + config.port + '/webpack-dev-server/');
  });
} else {
  // If production environment
  const path = require('path')
  const express = require('express')

  const port = (process.env.PORT || 8000);
  const app = express();
  const indexPath = path.join(__dirname, './index.html');

  /*
    express.static(root, [options])
    - The root argument refers to the root directory from which the static assets are to be served

    info: http://expressjs.com/pt-br/api.html#express.static
  */
  const publicPath = express.static(path.join(__dirname, '/dist/assets/'));
  /*
    app.use([path,] callback [, callback...])
    - With express.static, mounts the middleware at “/assets/ to serve static content only when their request path is prefixed with “/assets/”:

    Ex: GET /assets/bundle.js etc.
  */
  app.use('/assets/', publicPath)
  /*
    app.get(path, callback [, callback ...])
    - Routes HTTP GET requests to the specified path with the specified callback functions.

    res.sendFile(path [, options] [, fn])
    - Transfers the file at the given path
  */
  app.get('/', function (_, res) { res.sendFile(indexPath) })

  app.listen(port);
  console.log(`Listening at http://localhost:${port}`);
}

