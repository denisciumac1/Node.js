function search(){
    var text = event.target.value.trim().toLowerCase()

    fetch(`http://localhost:3000/search/${text}`)

    .then (response =>{
      return response.json()
    }) 

    .then (usersJson =>{
        console.log(usersJson)
        // cu ajutorul unui forEach si DOM create element ... sa se afiseze rezultatul in urmatorul format (BS4-list group)
        
      }) 
}
    
