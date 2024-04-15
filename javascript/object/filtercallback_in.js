function filterArray(array, callback) {
    let List = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            List.push(callback(array[i]))
        }
    }
    console.log(List)
    return List
}

let numbers = [5, 4, 7, 2, 90, 33]
function even(num) {
    if (num % 2 == 0) {
        return num
    }
}
let filter = filterArray(numbers, even)
// console.log(filter)
