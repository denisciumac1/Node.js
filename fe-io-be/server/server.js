var http = require("http")
var fs   = require("fs")

var users = ["Alex", "Jason", "Jasie", "Arnold"]


var server = http.createServer( (req, res) => {
if(req.url == "/"){
    res.write(fs.readFileSync("../client/index.html"))
    
}
if(req.url == "/client.js"){
    res.write(fs.readFileSync("../client/client.js"))
    
}
if(req.url.indexOf("/search") !=-1){
    var text = req.url.split("/").pop()
    var results = []
    users.forEach( u=>{
        if(u.toLowerCase().startsWith(text)){
            results.push(u)
        }
    })
    console.log(results)
    res.write(JSON.stringify(results))
    
}


 res.end()   
})

server.listen(3000)

