//a. HTTP server with routes

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the homepage");
    } else if (req.url === '/about') {
        res.end("This is the about page");
    } else {
        res.end("404 Not Found");
    }
});

server.listen(3000, () => console.log('Server on port 3000'));


//b. JSON response at /api/data
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name: "Alice", age: 22, city: "Hyderabad" }));
    }
});

server.listen(3000);

//c. OS module — system info
const os = require('os');

console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("Uptime (s):", os.uptime());
console.log("Total Memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));
