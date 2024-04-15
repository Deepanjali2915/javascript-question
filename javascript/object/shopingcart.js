// name, price, and quantity.

cart = [{
    name: "top",
    price: 132,
    quantity: 12
},
{
    name: "shirt",
    price: 100,
    quantity: 10
},
{
    name: "laptop",
    price: 20000,
    quantity: 70
},
{
    name: "mobile",
    price: 900,
    quantity: 25
},
{
    name: "bottel",
    price: 120,
    quantity: 20
}
]
// console.log(cart[0].price + cart[1].price+cart[2].price+cart[3].price+cart[4].price)




function calculateTotalPrice(cart) {
    let total_price = 0
    for (let i = 0; i < cart.length; i++) {
        total_price += cart[i].price*cart[i].quantity
    }
    return total_price;
}

let total_price = calculateTotalPrice(cart);

console.log(total_price)




// function calculateTotalPrice(cart){
//     total =cart.reduce(function(a,b){
//         return a+(b.price*b.quantity)
//     },0);
//     return(total)
// }

// calculateTotalPrice()
// console.log(total)

// console.log(Object.keys(cart))