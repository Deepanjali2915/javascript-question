// a--
function higherOrderFunction(num, callback) {
    callback(num);
}

// b---
function callbackFunction(number) {
    console.log(number);
}
higherOrderFunction(5, callbackFunction);

// c---
higherOrderFunction(10, function(num) {
    console.log(num);
});

// d---
higherOrderFunction(4, function(num) {
    console.log(num**2);
});

// e----
newHigherOrderFunction(3, 7, function(num1, num2) {
    console.log(num1 + num2);
});

function newHigherOrderFunction(num1, num2, callback) {
    callback(num1, num2);
};
