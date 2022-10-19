var fs = require('fs');
var rs = fs.createReadStream('./to.text');
rs.on('open',function(){
    console.log('file is open');    
})