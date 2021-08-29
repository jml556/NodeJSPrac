const http = require('http');
 
const handleData = require('./routes')
 
const server = http.createServer(handleData)
server.listen(3000);