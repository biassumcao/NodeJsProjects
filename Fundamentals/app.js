//criando um modulo http:
const http = require('https');
//guardando o ip do host e o numero da porta em variaveis:
const host = "127.0.0.1";
const port = 3000;

//criando um servidor a paritir do modulo http criado:
const server = http.createServer((req, res) => {
    res.statusCode = 200; //retorna status positivo a quem o chamou
    res.setHeader('Content-Type', 'text/plain'); //cria um texto limpo
    res.end("Hello World!\n"); //finaliza a ação do servidor
});

//servidor deve ouvir a porta chegando pelo host:
server.listen(port, host, () => {
    console.log(`Server running on port http://${host}:${port}/`)
})