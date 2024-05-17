// a--
function doubleNumber(num){
    return num*2;
}

console.log(doubleNumber(2));


// b---
function squareNumber(num){
    return num*num;
}
console.log(squareNumber(4))


// // c---
function incrementNumber(num){
    return num+1;
}

function number(num,callback){
    return callback(num);
}
console.log(number(6,incrementNumber));


// // d---
function performOperation(num,operation){
    result=operation(num)
    return result ;
}
A=(performOperation(7,doubleNumber))
B=(performOperation(8,squareNumber))
C=(performOperation(9,incrementNumber))


// e----
console.log(A)
console.log(B)
console.log(C)