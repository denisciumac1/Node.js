// fisierul principal al aplicatiei "server"
//utilizam modulul "http"
const fs = require("fs")
const http = require("http")

//{"status": "ok" }
//creeam obiectul serverului
// http -> 80 000
// https -> 443
let obj = { status: "ok" }

const server = http.createServer(loadData)

function jsonHeader(res) {
    res.setHeader("Content-Type", "application/json")
    return res
}

// fs.readFile()-> Buffer
// data.toString()-> String

// json()-> String

function json(data) {
    data = JSON.stringify(data)
    return data
}

function parse(data) {
    data = JSON.parse(data)
    return data
}

function loadData(req, res) {
    if (req.url == "/tasks") {
        fs.readFile("data.json", function(err, data) {
            res = jsonHeader(res)
            if (!err) {
                var tk = parse(data.toString())
                res.end(json(tk.tasks))
            } else {
                res.end(json(err))
            }
        })
    } else if (req.url == "/users") {
        fs.readFile("data.json", function(err, data) {
            res = jsonHeader(res)
            if (!err) {
                var us = parse(data.toString())
                res.end(json(us.users))
            } else {
                res.end(json(err))
            }
        })

    } else {
        res.end(json({ status: "Not Found" }))
    }
}
server.listen(3000)