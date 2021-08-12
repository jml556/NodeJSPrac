const http = require('http');

function rqListener(req, res) {
    console.log(req)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>First practive node</title></head>')
    res.write('<body><h1>Hello World!</h1></body>')
    res.write('</html>')
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3005)