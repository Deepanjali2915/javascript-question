// a
let cart = [{
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

// b
function calculateTotalPrice(cart) {
    let total_price = 0
    for (let i = 0; i < cart.length; i++) {
        total_price += cart[i].price*cart[i].quantity
    }
    return total_price;
}

// c 
let total = calculateTotalPrice(cart);

console.log(total);




