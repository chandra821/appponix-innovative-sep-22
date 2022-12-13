var http =require('http')
console.log(http)
var url = require('url')
http.createServer((req:any,res:any)=>{
    if(req.url=='/chandu'){
        res.write('hi i am chandu don')
        res.end()
    }
}).listen(8006,()=>{console.log('server is started at port 8006')})