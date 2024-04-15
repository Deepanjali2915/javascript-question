people=[{name:"deepu",age:24},{name:"anjali",age:34},{name:"deepa",age:14},{name:"nishu",age:25},{name:"kajal",age:28}]
function average(people) {
    let total_average = 0
    for (let i = 0; i < people.length; i++) {
        total_average += people[i].age
    }
    return total_average/people.length;
}

let total_average = average(people);

console.log(total_average)
