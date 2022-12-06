const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end('Welcome to the home page !');
    }
    else if (req.url === "/about") {
        res.end('About us');
    }
    else{
        res.end('Ooops');
    }
});

server.listen(5000);