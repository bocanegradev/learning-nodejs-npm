//! Don't adding ./ to require() function, it means that 'os' module have been installed when node was installed
//! Operative System module
// const os = require('os');
//! File system module
const fs = require('fs');

// console.log(os.platform());
// console.log('Free memory: ' + os.freemem() + " bytes");

//! Example async code:
//! WRITING
fs.writeFile('./text.txt', 'Hello world with node modules', function (e) {
    if (e) {
        console.log(e);
    }
    console.log('File created!')
});

console.log('Last code line');

//! READING
fs.readFile('./text.txt', function (e, data) {
    if (e) {
        console.log(e);
    }
    console.log(data.toString());
});