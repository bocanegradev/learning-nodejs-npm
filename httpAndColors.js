//! HTTP will get requests from users, and give responses
const http = require('http');
const colors = require('colors');

http.createServer(function (req, res) {
    res.write('<h1>Response from Nodejs!</h1>');
    res.end();
}).listen(3000);

console.log('Server running on port 3000'.green);

//! INIT
// npm init
//! The servers just will run 'npm install' command, and then it will search for 'dependencies' on the 'package.json' file to install it