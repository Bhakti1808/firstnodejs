var http = require('http');
var to = require('./first');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write( to.fib(n, memo));
  res.end();
}).listen(8080)