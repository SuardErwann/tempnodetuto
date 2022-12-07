const http = require ('http');

// // Methode 1 :
// const server1 = http.createServer((req, res) => {
//     res.end('Hello !!');
// }) 
// server1.listen(5000);

// Methode 2
const server = http.createServer();
server.on('request', (req, res) => {    // request n'est pas un nom au hasard, c'est un Event, voir doc.
    res.end('Hello Event!!');
});
server.listen(5000);