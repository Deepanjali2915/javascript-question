class Product {
    constructor(id,name,price,quantity,brand) {
      this.id = id;  
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.brand = brand;

    }
  }
  
const inventory=[];

function add(id,name,price,quantity,brand){
    const product = new Product(id,name,price,quantity,brand);
        inventory.push(product)
}
  
// add(1,"laptop",20000,23,"thiknpad")
// add(2,"mobile",45000,12,"nokia")
// add(3,"charger",2000,150,"vivo")

// console.log("add")
// console.log(inventory);


function update(productId, newQuantity) {
    const product = inventory.find(product => product.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
}

// update(2, 15);
// console.log("update")
// console.log(inventory);
// display()


function remove(productId) {
    const index = inventory.find(product => product.id === productId);
        inventory.splice(index,2);

}

// remove(2);
// console.log("remove")
// console.log(inventory);
// display()

function display() {
    inventory.forEach(product => {
        console.log(+ product.id + "." + product.name + "-" + product.price + "(" + product.quantity+")");
    });
}


add(1,"laptop",20000,23,"thiknpad");
add(2,"mobile",45000,12,"nokia");
add(3,"charger",2000,150,"vivo");
console.log("add");
console.log(inventory);
display();

update(2, 15);
console.log("update");
// console.log(inventory);
display();


remove(2);
console.log("remove");
// console.log(inventory);
display();
