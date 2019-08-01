var fs = require('fs')
var sass = require('node-sass')

////////////////Autocompilare//////////////////////////
fs.watchFile("./src/style.scss", function() {
        console.log("Something has changed!")
        var file_change = fs.readFileSync("./src/style.scss")
        file_change.forEach(compileSCSS)
    })
    ////////////////Autocompilare//////////////////////////

function compileSCSS() {
    var result = sass.renderSync({
            file: './src/style.scss',
            outputStyle: 'compressed', // Stilul compresat!

        })
        // console.log(result.css.toString())
    fs.writeFileSync("./dist/style.css", result.css.toString())
}