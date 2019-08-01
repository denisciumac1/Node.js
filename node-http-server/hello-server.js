let http = require("http")

// IoC
let server = http.createServer( ( req, res ) => {
    console.log("Client Request!")
    // req <------from client
    // res ------> to client 
    res.write("<h1>Hello Client!</h1>")
    res.write("Bye Client!")
    res.end()
})

server.listen(3000) // localhost: 3000
