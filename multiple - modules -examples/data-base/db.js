var fs = require("fs")
//in functia saveData inaintea de a se scrie in fisier sa se verifice daca acest fisier exista si in cazul in care exista sa se afiseze un mesage de avertizare ("atentie fisierul deja exista datele vor fi suprascrise ")
function saveData(data){
  fs.writeFileSync("data.txt",data)

}

function deleteData(){
 fs.unlinkSync("data.txt")
}

exports.saveData = saveData
exports.deleteData = deleteData