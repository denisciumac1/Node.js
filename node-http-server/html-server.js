let http = require("http")
let fs   = require("fs")

// IoC
let server = http.createServer( ( req, res ) => {

   console.log( req.url )
   if(req.url == "/"){
    var html = fs.readFileSync("./home.html")
   } else if(req.url =="/about"){
    var html = fs.readFileSync("./about.html") 

   }else if(req.url == "/style.css"){
    var html = fs.readFileSync("./style.css")  

   }
   else{
    var html = "Not found"
   }

   
   res.write(html)
   res.end()
})

server.listen(3000) // localhost: 3000