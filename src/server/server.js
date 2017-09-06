/* import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
*/

import path from 'path';
import Express from 'express';

var app = Express();
var server;

// debug: "/Users/ericgrudzien/Git/Starters/react-starter/src/server/client/styles"
const PATH_STYLES = path.resolve(__dirname, './client/styles');

// debug: "/Users/ericgrudzien/Git/Starters/react-starter/src/dist"
const PATH_DIST = path.resolve(__dirname, '../dist');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  // debug: "/Users/ericgrudzien/Git/Starters/react-starter/src/client/index.html"
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 1337, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});