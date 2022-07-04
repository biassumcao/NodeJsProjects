const {promisify} = require('util'); //importing with desestructuring
const writeFile = promisify(require('fs').writeFile); //come as a promise
const content = `one \n two \n three \n four \n five`
writeFile('util file.txt', content)
.then(() => {
    console.log('file created successfully');
})
.catch(err => {
    console.log(`error creating file: ${err.message}`);
})