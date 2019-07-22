var products = [
    { name: "Product 1", price: { amount: 100, currency: "USD" } },
    { name: "Product 2", price: { amount: 200, currency: "USD" } },
    { name: "Product 3", price: { amount: 300, currency: "USD" } }
];

function showProducts(procuts_list) {
    for (i = 0; i < 3; i++) {
        console.log(products[i].name + " | " + products[i].price.amount + " " +
            products[i].price.currency)
    }
}


showProducts(products);