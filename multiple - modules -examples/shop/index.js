var commerce = require("./commerce")

// console.log(commerce)

var p = new commerce.Product("qqq","111") 
var c = new commerce.Client("Toni", "+373605214")

p.info()
c.info()