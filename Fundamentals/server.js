const http = require('http'); //cria modulo http -- modulo nativo
const host = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => { //cria servidor
    res.statusCode = 200;                       // res é a resposta dado pelo servidor para a requisicao do cliente -- status 200 deu tudo ok
    res.setHeader('Content-Type', 'text/plain'); //text/plain == texto puro
    res.end("ola mundo \n"); //finaliza
}) 

server.listen(port, host, () => {   //escuta a porta 3000 chegando do servidor host
    console.log(`Server running at http://${host}:${port}/`);
}); 