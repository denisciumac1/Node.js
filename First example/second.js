class User {
    constructor(login, password){
        this.login    = login 
        this.password = password
    }

    checkPassword(qwerty){
      if(qwerty == this.password){
      return true
    }else {
        return false
    } 
 }
 
}


var xxx = new User("admin", 12345)
console.log(xxx)
console.log(xxx.checkPassword(12345))