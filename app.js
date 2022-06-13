const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) =>{
    console.log('Server request')
    console.log(req.url, req.method)

    res.setHeader('Content-type', 'text/html')

    res.write('<h1>hello everyone</h1>')
    res.end();
})

server.listen(PORT, 'localhost', (error) =>{
    error ? console.log(error) : console.log('listenint port 3000')
})