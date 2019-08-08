let http = require("http")
let fs = require("fs")

let server = http.createServer((req, res) => {

    console.log(req.url)
    if (req.url == "/") {
        var html = fs.readFileSync("./html/home.html")
    } else if (req.url.endsWith(".css")) {
        var html = fs.readFileSync("." + req.url)
    }

    // else if (req.url == "/css/style.css") {
    //     var html = fs.readFileSync("./css/style.css")
    // } else if (req.url == "/css/animation.css") {
    //     var html = fs.readFileSync("./css/animation.css")
    // } 
    else if (req.url == "/images/icon.png") {
        var html = fs.readFileSync("./images/icon.png")
    } else {
        var html = "Not found"
    }


    res.write(html)
    res.end()


})

server.listen(3000) // localhost: 3000