const fs = require('fs'); //request file system common js module
let path = __dirname + '//novapasta' //get the current directory path and concatenate it with the new directory name

//mkdir method needs to get a callback function as a parameter to treat all possible errors it could have on creating the new folder
fs.mkdir(path, err => {
    if (err) throw err;

    console.log('creation succeded');
})