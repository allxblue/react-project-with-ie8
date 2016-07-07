import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.dev'

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

app.use('/public', express.static(__dirname + '/public'))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api', function(req, res) { 
 	res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, '/data.json'));
});


app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening on http://127.0.0.1:3001')
})
