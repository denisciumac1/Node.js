var fs = require('fs');
var sass = require('node-sass');

function compileSCSS() {
    var result = sass.render({
            file: './src/style.scss',
            outFile: './dist/style.css',

        },
        function(error, result) {
            if (error) {
                console.log(error)
            } else {
                fs.writeFile(result)
            }
        })

}
compileSCSS()