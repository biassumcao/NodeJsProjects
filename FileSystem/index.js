const http = require('http');
const {readFile, readFileSync} = require('fs')

const host = '127.0.0.1';
const port = 3000;
const url = `http://${host}:${port}`;

let content = ''
readFile('index.html', (err, data) => {
    if (err) throw err;
    content = data.toString();
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
})

server.listen(port, host, () => {
    console.log(`server running on ${url}`);
})

const start = (process.platform == 'darwin' ? 'open': process.platform == 'win32' ? 'start': 'xdg-open');

require('child_process').exec(start+ ' ' + url);