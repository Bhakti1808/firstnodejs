var url = require('url');
var adr = 'https://www.w3schools.com/nodejs/nodejs_url.asp0';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);    
