const connect = require('connect');
const http = require('http');
const serveStatic = require('serve-static');

let app = connect().use(serveStatic(process.cwd() + '/dist'));
http.createServer(app).listen(process.env.PORT || 3000);
