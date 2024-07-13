//a
let inventory = [{
    id: 1,
    name: "Laptop",
    price: 20000,
    quantity: 23
}, {
    id: 2,
    name: "Mobile",
    price: 45000,
    quantity: 12
}, {
    id: 3,
    name: "Charger",
    price: 2000,
    quantity: 150
}];
console.log(inventory);


//b
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

//c
function addProduct(id, name, price, quantity) {
    let product = new Product(id, name, price, quantity);
    inventory.push(product);
};
addProduct(4, "Banana", 100, 15);
console.log("add");
displayProducts();


function updateProduct(productId, newQuantity) {
    let product = inventory.find(function(product) {
        if (product.id === productId) {
            return true;
        };
    });

    if (product) {
        product.quantity = newQuantity;
    };
};

updateProduct(2, 15);
console.log("update");
displayProducts();


function removeProduct(productId) {
    inventory.splice(1, 1);
};

removeProduct(2);
console.log("remove");
displayProducts();

function displayProducts() {
    for(let product of inventory){
        console.log(`${product.name} - ${product.price} (${product.quantity})`);
    };
};
