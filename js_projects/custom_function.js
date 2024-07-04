// 1----map
function mapArray(array, callback) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        list.push(callback(array[i]));
    };
    return list;
};

let mapnumbers = [1, 2, 3, 4, 5, 6, 7];
function into(num) {
    return num * 2;
};
let multiply = mapArray(mapnumbers, into);
console.log(multiply);


// 2---filter
function filterArray(array, callback) {
    let list = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            list.push(callback(array[i]));
        };
    };
    // console.log(list)
    return list;
};

let filternumbers = [8, 9, 10, 11, 12, 13, 14]
function even(num) {
    if (num % 2 == 0) {
        return num;
    };
};
let filternum = filterArray(filternumbers, even);
console.log(filternum);



// 3--for each

function forEacharray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    };
};
let forEachnumbers = [15, 16, 17, 18, 19, 20, 21]

function into(num) {
    console.log(num*2);
}
let forEachFunction = forEacharray(forEachnumbers, into);


