const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('ccccccc')
}).listen(Math.round(1 + Math.random(0, 1)) * 1000, '127.0.0.1')