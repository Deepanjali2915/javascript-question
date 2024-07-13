// 1--for each
function forEachArray(array, callback) {
    for (let element of array) {
        callback(element);
    };
};
let numbers = [15, 16, 17, 18, 19, 20, 21];

let forEachFunction = forEachArray(numbers, function(number) {
    console.log(number*2);
});


// 2----map
function mapArray(array, callback) {
    let newArray = [];
    for (let element of array) {
        let newElement = callback(element);
        newArray.push(newElement);
    };
    return newArray;
};

let numbersIntoTwo = mapArray(numbers, function(number) {
    return number * 2;
});
console.log(numbersIntoTwo);


// 3---filter
function filterArray(array, callback) {
    let filteredArray = []
    for (let element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        };
    };
    return filteredArray;
};

let evenNumbers = filterArray(numbers, function(number) {
    if (number % 2 == 0) {
        return true;
    };
});
console.log(evenNumbers);





