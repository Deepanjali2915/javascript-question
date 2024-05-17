// a--
function add(num1,num2){
    return num1+num2;
}
console.log(add(2,5))


// b--
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(2,5))


// c--
function subtract(num1,num2){
    return num1-num2;
}
console.log(subtract(5,2))


// d--
function divide(num1,num2){
    return num1/num2;
}
console.log(divide(6,2))


// e--
function performArithmetic(num1,num2,operation){
    return operation(num1,num2)
}

console.log(performArithmetic(1,2,add))
console.log(performArithmetic(7,2,multiply))
console.log(performArithmetic(8,4,subtract))
console.log(performArithmetic(10,5,divide))