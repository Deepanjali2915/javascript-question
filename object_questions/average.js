// a 
people=[{name:"deepu", age:24},
    {name:"anjali", age:34},
    {name:"deepa", age:14},
    {name:"nishu", age:25},
    {name:"kajal", age:28}]
// b 
function calculateAverageAge(people) {
    let total_average = 0
    for (let i = 0; i < people.length; i++) {
        total_average += people[i].age;
    }
    return total_average/people.length;
}
// c 
let total_average = calculateAverageAge(people);

console.log(total_average);
