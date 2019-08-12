var http = require('http');
var fs = require('fs');

var users = ['John', 'Jessie', 'Alex', 'Arnold', 'Julia'];

var server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write(fs.readFileSync('../client/index.html'));
    } else if (req.url == "/client.js") {
        res.write(fs.readFileSync('../client/client.js'));
    } else if (req.url.indexOf("/search") != -1) {
        var results = [];
        var text = req.url.split("/").pop();

        users.forEach(user => {
            if (user.toLowerCase().startsWith(text)) {
                results.push(user);
            }
        })
        console.log(results);


        // console.log(text);
        res.write(JSON.stringify(results));
    }

    res.end();
});

server.listen(3000);