// a--
function addNumbers(num1, num2) {
    return num1 + num2;
}

// b--
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// c--
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// d--
function divideNumbers(num1, num2) {
    return num1 / num2;
}

// e--
function performArithmetic(num1, num2, operation) {
    return operation(num1, num2)
}

// f--
let result = performArithmetic(1, 2, addNumbers);
console.log(result);

result = performArithmetic(7, 2, multiplyNumbers);
console.log(result);

result = performArithmetic(8, 4, subtractNumbers);
console.log(result);

result = performArithmetic(10, 5, divideNumbers);
console.log(result);
