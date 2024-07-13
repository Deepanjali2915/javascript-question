//a
fruits = ["apple", "banana", "cherry", "date"]

// b--
fruits.forEach(function(fruit) {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});

fruits.forEach(fruit => {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});

// c--
reverseFruit = fruit => {
    reversed = ""
    for (i = fruit.length - 1; i >= 0; i--) {
        reversed += fruit[i];
    }
    return reversed;
}
reversedFruit = fruits.map(reverseFruit);
console.log(reversedFruit);


// d--
let filters = fruits.filter(function(fruit){
    return fruit.length>5;
});

console.log(filters)


filters = fruits.filter(fruit => fruit.length > 5);

console.log(filters);


// e--
let filterfruits = fruits.filter(
    fruit=>fruit.includes("a"));

let upperfruits = filterfruits.map(
    fruit=>fruit.toUpperCase());


console.log(upperfruits);


// f--
let totalCharacters=0
fruits.forEach(fruit => {
    totalCharacters+=fruit.length;
    
});

console.log(totalCharacters);