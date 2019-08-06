var http = require("http")
var fs = require("fs")
var querystring = require("querystring")

var server = http.createServer( (req, res) =>{

if (req.url=="/"){
    res.write(fs.readFileSync("form.html"))
}else if(req.url.indexOf("?email=") !=-1){
 var url_data = querystring.parse(req.url)
 console.log(url_data['/?email'])

 ////////////save new address////////////
 var data = JSON.parse(fs.readFileSync("./emails.json")) // array de date din fisier 
 if(!data.includes( url_data['/?email'] )){
    data.push( url_data['/?email'] )
 
    fs.writeFileSync("./emails.json", JSON.stringify(data))
 }else if(req.url == "/send"){
    var data = JSON.parse(fs.readFileSync("./emails.json"))
    data.forEach(email => {
        res.write(`${email}<br>`)
    });
     res.write("Sending automated emails!")
     // utilizind nodemailer sa se trimite cite un mesaj pe fiecare adresa din acea lista
 }
 

 ///////////////////////////////////////


 res.write(fs.readFileSync("thanks.html"))
}



res.end()

})

server.listen(3000)
