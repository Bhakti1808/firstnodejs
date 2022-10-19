
var fs = require('fs');
fs.rename('first.text','to.text',function(err){
    if(err) throw err;
    console.log('hello')
})