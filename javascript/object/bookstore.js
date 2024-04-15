class Bookstore {
  constructor(id,name,price,quantity,brand) {
    this.id = id;  
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.brand = brand;

  }
}

const book=[];

function add(id,name,price,quantity,brand){
  const product = new Bookstore(id,name,price,quantity,brand);
  book.push(product)
}

// add(1,"laptop",20000,23,"thiknpad")
// add(2,"mobile",45000,12,"nokia")
// add(3,"charger",2000,150,"vivo")

// console.log("add")
// console.log(inventory);


function update(productId, newQuantity) {
  const product = book.find(product => product.id === productId);
  if (product) {
      product.quantity = newQuantity;
  }
}

// update(2, 15);
// console.log("update")
// console.log(inventory);
// display()


function remove(productId) {
  const index = book.find(product => product.id === productId);
  book.splice(index,2);

}

// remove(2);
// console.log("remove")
// console.log(inventory);
// display()

function display() {
  book.forEach(product => {
      console.log(+ product.id + "." + product.name + "-" + product.price + "(" + product.quantity+")");
  });
}


add(1,"hindi",200,23,"10th");
add(2,"english",450,12,"10th");
add(3,"math",200,150,"10th");
console.log("add");
console.log(book);
display();

update(2, 15);
console.log("update");
// console.log(inventory);
display();


remove(2);
console.log("remove");
// console.log(inventory);
display();
