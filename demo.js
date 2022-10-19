var http = require('http');
var url = require('url');
var fs = require('fs');

    http.createServer(function(req,res){
        var p =url.parse(req.url,true)
        var filename ="."+ p.pathname;
        fs.readFile(filename,function(err,data){
            if (err) {
                res.writeHead(404,{'Content-Type':'winter/html'})
                return res.end("404 not found");
            }
            else{
                res.writeHead(202,{'Content-Type':'winter/html'})
                res.write(data);
                return res.end();
            }
        })
    }).listen(8080);