const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('Heres the about page')
    }

    else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page that you're looking for </p>
    <a href="/">back home </a>
    `)
    }
})

server.listen(80)