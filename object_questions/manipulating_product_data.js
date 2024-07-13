//a
const products = [{ 
    id: 1, 
    name: "Pen", 
    price: 6, 
    category: "Stationery"
 }, {
     id: 2, 
    name: "Toffee", 
    price: 5, 
    category: "Snacks" 
}, { 
    id: 3, 
    name: "Gulab Jamun", 
    price: 80, 
    category: "Food" 
}, { 
    id: 4, 
    name: "Chole Bhuture", 
    price: 60, 
    category: "Food" 
}];

//b
products.forEach(function(product) {
    console.log(`${product.name} - ${product.price}`);
});

//c
let productsWithTax = products.map(function(product) {
    let newProduct = {
        name: product.name,
        price: product.price * (1 + 0.1)
      };
    return newProduct; 
});
console.log(productsWithTax);

//d
let foodProducts = products.filter(function(product) {
    if(product.category === "Food") {
        return true;
    };
})
console.log(foodProducts);

//e
let productsLessThanTen = products.filter(function(product) {
    if (product.price <= 10) {
        return true;
    }
});
let affordableProducts = productsLessThanTen.map(function(product) {
    return `${product.name} - ${product.price}`;
});

console.log(affordableProducts);


//f
totalPrice = 0
products.forEach(function(product) {
    totalPrice += product.price
});

console.log(totalPrice);