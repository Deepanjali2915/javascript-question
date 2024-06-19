// 1-----/
function greet(name) {
    return ("Hello, " + name + "!");
}

// //b
let greeting = greet("Deepanjali");
console.log(greeting);


// c----
function greetDefult(name = "Guest") {                      
    return ("Hello, " + name + "!");
}
let greeting1 = greetDefult();
console.log(greeting1);


// d-----
let greetFunction = function (name="Guest") {                      
    return ("Hello, " + name + "!");
}
let greeting2 = greetFunction("Deepanjali");
console.log(greeting2);


// e----
let greetArrow = (name)=> {
    return ("Hello, " + name + "!");
}
let greeting3 = greetArrow("Deepanjali");
console.log(greeting3);
