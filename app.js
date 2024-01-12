const http = require('node:http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(__dirname + '/index.html').pipe(res);

    } else if (req.url === '/contact') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(__dirname + '/contact.html').pipe(res);
      
    } else if(req.url === '/api/ninjas'){
      var ninjas = [{name: 'jay', age: 29},{name: 'sean', age: 23}];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(ninjas));
      
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(__dirname + '/404.html').pipe(res);

    }

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    
    // var myObj = {
    //   name: 'mac',
    //   job: 'Dev',
    //   age: 29
    // };

    // res.end(JSON.stringify(myObj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

