const http = require('node:http');
var fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    var myObj = {
      name: 'mac',
      job: 'Dev',
      age: 29
    }

    res.end(JSON.stringify(myObj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

