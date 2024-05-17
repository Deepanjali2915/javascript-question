// numbers=[1,2,3,4,5]
// numbers.forEach(element => {console.log(element)
// });
// numbers.forEach(element => {console.log(element*2)
    
// });



// number=[1,2,3,4,5]
// squaredNumbers=number.map((i)=>i**2)
// console.log(squaredNumbers)


// function main_fun(callback){
//     squaredNumbers=number.map(callback)
//     console.log(squaredNumbers)

// }

// callback_fun= number=>number**3


// main_fun(callback_fun)




number=[1,2,3,4,5]
even=number.filter((i)=>i%2==0)
console.log(even)




function main_fun(callback){
    even=number.filter(callback)
console.log(even)

}

callback_fun= number=>number%2==0


main_fun(callback_fun)
