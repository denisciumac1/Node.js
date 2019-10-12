// punctul de start 

//conectam un modul 
const fs = require("fs")

function loadData(req, res){
  fs.readFile("./server/data.json", function(err, data){
      if(!err){
        console.log (data.toString() )
        showData(data)
      }else{
          console.log(err)
      }
      
  })
   
}
///////////////////////////////////
function showData( data ){
    console.log( data )

}


loadData();