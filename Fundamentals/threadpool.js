const crypto = require('crypto');
const start = Date.now();

function logHashTime(){
    //itera os primeiros parametros 100000 vezes e aloca 512 bytes
    //para todas as funcoes assincronas, o ultimo parametro eh o callback

    crypto.pbkdf2("xy", "wz", 100000, 512, "sha512", () => { 
        console.log(`Hash took ${Date.now() - start} ms`);
    })   
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();//como o threadpool aloca ate 4 nucleos, o ultimo(5) espera o primeiro terminar pra ser executado