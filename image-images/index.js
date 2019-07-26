var fs = require("fs")
var sharp = require('sharp')

// urmarim schimbarile din dosarul images/original

fs.watch("./images/original", function() {
    console.log("Something has changed!")
        //fs ->lista fisierelor dintr-un directoriu
    var file_names = fs.readdirSync("./images/original")
    file_names.forEach(genThumb)
})

function genThumb(file_name) {
    if (`${file_name}`.endsWith("jpg")) {
        sharp(`./images/original/${file_name}`)
            .resize(200, 200)
            .toFile(`./images/thumbs/jpg/-sm-${file_name}`)
    } else {
        sharp(`./images/original/${file_name}`)
            .resize(200, 200)
            .toFile(`./images/thumbs/png/-xm-${file_name}`)
    }
}