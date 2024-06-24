// a--
function doubleNumber(num) {
    return num*2;
}

// b---
function squareNumber(num) {
    return num*num;
}

// c---
function incrementNumber(num) {
    return num+1;
}

// d---
function performOperation(num, operation) {
    return operation(num);
}

// e---
let result = performOperation(7, doubleNumber);
console.log(result);

result = performOperation(8, squareNumber);
console.log(result);

result = performOperation(9, incrementNumber);
console.log(result);
