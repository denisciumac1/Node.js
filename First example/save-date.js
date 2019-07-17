//acest exemplu demonstreaza cum pot fi salvade 
// niste date in fisier

//datele
var username = "Tester"
var password = "password"
var email    = "test@test.test"

//conectam modulul file system 
var fs = require('fs') //modulele reprezinta obiecte
// console.log( fs )
fs.writeFileSync( "data.txt", `${username}\n${password}\n${email}` )