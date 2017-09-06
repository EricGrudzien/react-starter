// eslint-disable-next-line jsx-a11y/href-no-hash
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

  // eslint-disable-next-line no-console
  console.log('Server is listening at %s', port);
});
