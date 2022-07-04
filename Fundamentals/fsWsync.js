const fs = require('fs');

console.log(`antes`);
console.log((process.hrtime()[0]/60).toFixed(5));

const data = fs.readFile("file.txt", (err, data) => {  //como nao eh sync, precisa de uma funcao callback
    if(err) throw err;
    console.log(`finished reading file`);
});

console.log(`depois`);
console.log((process.hrtime()[0]/60).toFixed(5)); //tofixed define qunatidade de casas decimais