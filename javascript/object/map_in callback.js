function mapArray(array, callback) {
    let List = []
    for (let i = 0; i < array.length; i++) {
        List.push(callback(array[i]))
    }
    // console.log(List)
    return List
}

let numbers = [5, 4, 7, 2, 9, 3]
function into(num) {
    return num * 2
}
let multiply = mapArray(numbers, into)
console.log(multiply)


