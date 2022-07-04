const { writeFile } = require('fs')

function createFile(name, content){
    return new Promise((resolve, reject) =>{
        writeFile(name, content, err => {
            if (err) return reject(err);
            resolve();
        })
    });
}

createFile('promiseFile.txt', 'new file\ncreated using promises')
    .then(() => console.log('success'))
    .catch(err => console.log(err));