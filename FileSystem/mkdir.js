const fs = require('fs');
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){
    dir.forEach(element => {
        fs.mkdir(`project/assets/${element}`, {recursive: true}, (err) => { //recursive allows us to create sub folders
            if (err) throw err;
            
            console.log(`Directory created successfully: ${element}`);
        })
    });

}

make(assets)
