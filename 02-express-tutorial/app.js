const http = require('http');
const port = 5000;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello maison');
    }
    else {
        res.end('Marche pô');
    }
});
server.listen(port);