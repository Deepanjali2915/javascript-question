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
function fliterFruit(callback) {
    filters = fruits.filter(callback);
    console.log(filters);
}
callback_fun = fruit =>fruit.length>5;
fliterFruit(callback_fun);


// e--
filterfruits = fruits.filter(
    fruit=>fruit.includes("a"));

upperfruits = filterfruits.map(
    fruit=>fruit.toUpperCase());

console.log(upperfruits);


// f--
totalCharacters=0
fruits.forEach(element => {
    totalCharacters+=element.length;
    
});

console.log(totalCharacters);