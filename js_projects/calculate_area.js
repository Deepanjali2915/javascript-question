// a----
function calculateArea(width, height) {
    return (width*height);
}

// b---
let area = calculateArea (5, 10);
console.log(area);

// c----
function calculateArea(width=1, height=1) {
    return (width*height);
}

area = calculateArea (5, 10);
console.log(area);

area = calculateArea();
console.log(area);

// d---
let calculateAreaFunction = function(width=1, height=1) {
    return (width*height);
}

area = calculateAreaFunction (10, 20);
console.log(area);

area = calculateAreaFunction();
console.log(area);

// e----
let calculateAreaArrow = (width=1, height=1) => {
    return (width*height);
}

area = calculateAreaArrow (10, 20);
console.log(area);

area = calculateAreaArrow();
console.log(area);