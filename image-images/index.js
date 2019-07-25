var fs = require("fs")
var sharp = require('sharp')

// urmarim schimbarile din dosarul images/original

fs.watch("./images/original", function(){
    console.log("Something has changed!")
    //fs ->lista fisierelor dintr-un directoriu
  var file_names = fs.readdirSync("./images/original")

  //array of string!!!
  //prin metodele string (to...)->testati extensiile fisierilor originale(.jpg , .png) toate celelate extensii ignorate
  //in functie genThumb
  //toate pozele convertite sa fie impartite in 2 mape diferite (thumbs/jpeg) (thumbs/png)
  //endsWith()
  file_names.forEach( genThumb )
  //console.log(file_names)
})


function genThumb( file_name ){
      sharp (`./images/original/${file_name}`)
     .resize(100,100,)
     .toFile(`./images/thumbs/-sm-${file_name}`)
}
