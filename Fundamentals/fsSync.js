const fs = require('fs');
console.log((process.hrtime()[0]/60).toFixed(5));
console.log(`antes`);
//biblioteca nativa de file system
const data = fs.readFileSync('file.txt'); //carrega arquivo externo

console.log(`depois`);
console.log((process.hrtime()[0]/60).toFixed(5));