class Product{
    constructor( name, price ){
        this.name  = name
        this.price = price
    }

    info(){
        console.log(`${this.name}: ${this.price}`)
    }

}

class Client{
   constructor(name, tel ){
       this.name = name
       this.tel  = tel
   }
   info(){
    console.log(`${this.name}: ${this.tel}`)
 }

}

module.exports.Product = Product
module.exports.Client  = Client