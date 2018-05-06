const express = require('express');

const server = express();
server.use('/', express.static(process.cwd() + '/dist'));

server.get('/*', function(req, res) {
  res.sendFile(process.cwd() + '/dist/index.html');
});

const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
