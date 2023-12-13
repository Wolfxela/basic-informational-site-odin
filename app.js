const fs = require('fs')
const http = require('http')


const server = http.createServer(function(req,res){
    if(req.url === '/favicon.ico'){res.end(); return}
    if(req.url === '/'){req.url = '/index'}

    let path = '.' + req.url +'.html'
    fs.readFile(path,{},(err,data)=>{
        if(err)
        {
            fs.readFile('./404.html',{},(err,data)=>{
                res.writeHead(404,{"Content-Type":"text/html"})
                res.write(data)
                res.end()
                return
            })
            return
        }
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    
    })
})

server.listen(8080)