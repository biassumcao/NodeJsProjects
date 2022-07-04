const http = require('http');
const port = 5500;
const host = '127.0.0.1';
const url = 'http://' + host + ':' + port + '/';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Welcome </h1>');
});

server.listen(port, host, () => {
    console.log('listening on port ' + port);
    console.log('server running at ' + url);
});

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start': 'xdg-open'); //get operational system to open the server automatically

require('child_process').exec(open + ' ' + url);