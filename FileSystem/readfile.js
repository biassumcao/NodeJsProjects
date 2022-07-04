const fs = require('fs');

fs.readFile(`text.txt`, (err, data) => {
    if (err) throw err;

    console.log(data.toString()); //read data in binary format...with toString we can read it properly
});

const text = fs.readFileSync(`text.txt`);
console.log(text.toString());
