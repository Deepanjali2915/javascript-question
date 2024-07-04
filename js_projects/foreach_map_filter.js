//a
let numbers = [ 1, 2, 3, 4, 5];

//b
numbers.forEach(function(number) {
    console.log(number);
});

//c
numbers.forEach(function(number) {
    console.log(number*2);
});

//d
let squaredNumbers = numbers.map(function(number) {
    return number**2;
});
console.log(squaredNumbers);

//e
squaredNumbers = numbers.map(number => number**2);

//f
let evenNumber = numbers.filter(function(number) {
    if (number % 2 == 0) {
        return true;
    } 
});
console.log(evenNumber);

//g
evenNumber = numbers.filter(number => number % 2 == 0);


