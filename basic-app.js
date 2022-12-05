const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to Home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    
    }
    res.end(`<h1>Oops</h1> <p> We can't see the finded page</p><a href = "/">Click here</a>`);
})

server.listen(5000)