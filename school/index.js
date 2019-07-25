const util = require('util')
var education = require("./modules/education")

var univ = new education.University("USM")

var gr = new education.Group("GR-1", "III")

var st_1 = new education.Student("Jason", 2008)
var st_2 = new education.Student("Mickey", 2010)

univ.addGroup(gr)

gr.addStudent(st_1)
gr.addStudent(st_2)

console.log(util.inspect(univ, false, null, true))