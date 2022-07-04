// const fs = require('fs');

// fs.readFile(`file.txt`, (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.unlinkSync(`file.txt`);

// metodos bloqueantes com nao bloqueantes -> paraliza o metodo nao bloqueante no meio

const fs = require('fs');

fs.readFile(`file.txt`, (err, data) => { //executa os dois sem barreiras
    if(err) throw err;
    console.log(data)
    fs.unlinkSync(`file.txt`, (unlinkErr) => {
        if(unlinkErr) throw unlinkErr;
        console.log(`Arquivo deletado`);
    });
})
