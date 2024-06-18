// 1----map
// function mapArray(array, callback) {
//     let list = []
//     for (let i = 0; i < array.length; i++) {
//         list.push(callback(array[i]))
//     }
//     // console.log(List)
//     return list
// }

// let numbers = [5, 4, 7, 2, 9, 3]
// function into(num) {
//     return num * 2
// }
// let multiply = mapArray(numbers, into)
// console.log(multiply)












// 2---filter
function filterArray(array, callback) {
    let list = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            list.push(callback(array[i]))
        }
    }
    // console.log(list)
    return list
}

let numbers = [5, 4, 7, 2, 90, 33]
function even(num) {
    if (num % 2 == 0) {
        return num
    }
}
let filter = filterArray(numbers, even)
console.log(filter)




// 3--for each
// numbers.forEach(element => {console.log(element)
//     });

// function forEacharray(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i])   
//     }
// }
// let numbers = [5, 4, 7, 2, 9, 3]

// function into(num) {
//     console.log(num)
// }
// // console.log(num)
// let forEachFunction=forEacharray(numbers, into)