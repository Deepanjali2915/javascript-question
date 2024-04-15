class Expenses_tracker {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }
}

const expense = [];

function add(id, name, price, quantity) {
    const product = new Expenses_tracker(id, name, price, quantity);
    expense.push(product)
}
add(1, "laptop", 20000, 23, "thiknpad");
add(2, "mobile", 45000, 12, "nokia");
add(3, "charger", 2000, 150, "vivo");
console.log("add");
console.log(expense);


function update(productId, newQuantity) {
    const product = expense.find(product => product.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
}

update(2, 15);
console.log("update");
console.log(expense);



function remove(productId) {
    const index = expense.findIndex(product => product.id === productId);
    expense.splice(index, 1);

}

remove(3);
console.log("remove");
console.log(expense);


function calculateTotalPrice(expense) {
    let total_price = 0
    for (let i = 0; i < expense.length; i++) {
        total_price += expense[i].price * expense[i].quantity
    }
    return total_price;
}

let total_price = calculateTotalPrice(expense);

console.log("total price");
console.log(total_price);
