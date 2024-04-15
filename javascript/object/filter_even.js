num=[10,3,15,4,60,7,8,3]
function find_even(num){
    return num.filter((i) => i % 2===0)
}

let even = find_even(num);
console.log(even)
  