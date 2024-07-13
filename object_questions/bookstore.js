//a
let inventory = [{
  id: 1,
  title: "Hindi",
  author: "Pooja",
  price: 2000,
  quantity: 3
}, {
  id: 2,
  title: "English",
  author: "Shivani",
  price: 40,
  quantity: 2
}, {
  id: 3,
  title: "Math",
  author: "Rani",
  price: 20,
  quantity: 10
}];
console.log(inventory);

//b
class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
};

//c
function addBook(id, title, author, price, quantity) {
  let book = new Book(id, title, author, price, quantity);
  inventory.push(book)
};

addBook(4, "Computer", 200, "Sonam", 12);
console.log("addBook");
display();

function updateBook(bookId, newQuantity) {
  const book = inventory.find(function(book) {
    return book.id === bookId;
  });

  if (book) {
    book.quantity = newQuantity;
  };
};

updateBook(2, 15);
console.log("updateBook");
display();

function removeBook(bookId) {
  inventory.splice(bookId, 1);
}

removeBook(1);
console.log("removeBook");
display();

function display() {
  inventory.forEach(function(product) {
    console.log(`${product.title} - ${product.price} (${product.quantity})`);
  });
}
