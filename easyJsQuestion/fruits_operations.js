fruits = ["apple", "banana", "cherry", "date"]


// b--
// function capital(i){
//     console.log(i.charAt(0).toUpperCase()+i.slice(1))
// }
// fruits.forEach(capital);


// c--
// reverseFruit = fruit => {
//     reversed = ""
//     for (i = fruit.length - 1; i >= 0; i--) {
//         reversed += fruit[i];
//         // console.log(reversed);
//     }
//     return reversed;
//     // console.log(reversed);
// }
// reversedFruit = fruits.map(reverseFruit);

// console.log(reversedFruit);


// d--



// function fliterFruit(callback){
//     filters=fruits.filter(callback)
// console.log(filters)

// }

// callback_fun=fruit =>fruit.length>5


// fliterFruit(callback_fun)


// e--

// filterfruits=fruits.filter(fruit=>fruit.includes("a"));

// upperfruits=filterfruits.map(fruit=>fruit.toUpperCase());

// console.log(upperfruits)


// f--
totalCharacters=0
fruits.forEach(element => {
    totalCharacters+=element.length
    
});

console.log(totalCharacters)