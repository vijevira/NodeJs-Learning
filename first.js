var http = require('http');
var dt = require('./firstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Todays Date and Time: "+dt.myDateTime());
  res.end('');
}).listen(8080);