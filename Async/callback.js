//exemplo de funcoes de API node
function soma(x, callback) {
    return setTimeout(() => {
        return callback(null, x + x);
    }, 3000);
}


//sempre eh 2 params, o primeiro erro, o segundo resultado(operacao feita pela funcao assincrona)
function resolveSoma(err, result){
    if(err){
        console.log(err);
    }

    console.log(result);
}

soma(200, resolveSoma);