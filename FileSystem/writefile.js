// import just one func from the module
// similar to 'from ... import ...'
import { writeFile } from 'fs';

writeFile('file.txt', 'One\ntwo\nthree', err => {
    if (err) throw err;
    console.log(`file created successfully`);
})