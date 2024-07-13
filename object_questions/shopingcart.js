// a
let cart = [{
    name: "Top",
    price: 132,
    quantity: 12
},
{
    name: "Shirt",
    price: 100,
    quantity: 10
},
{
    name: "Laptop",
    price: 20000,
    quantity: 70
},
{
    name: "Mobile",
    price: 900,
    quantity: 25
},
{
    name: "Bottle",
    price: 120,
    quantity: 20
}
]

// b
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let item of cart) {
        totalPrice += item.price*item.quantity;
    };
    return totalPrice;
};

// c 
let total = calculateTotalPrice(cart);
console.log(total);




