const http = require('node:http');
var fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    var readStream = fs.createReadStream(__dirname + '/readthis.txt', 'utf8');
    // var wrtStream = fs.createWriteStream(__dirname + '/writethis.txt', 'utf8');
    readStream.pipe(res);

    // res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});