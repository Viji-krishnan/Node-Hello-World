const fs = require('fs'); 
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1> Hello World !!! This is the OVERVIEW </h1>');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'tele-404'
        });
        res.end( '<h1>Page not found !</h1>');
    }
    //res.end('Hello from the server!');
});

server.listen(8000, 'localhost');

//fs.readFileSync()
//const hello = 'Hello World';
//console.log(hello);