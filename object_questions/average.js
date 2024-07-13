// a 
let people = [{name: "Deepu", age:24},
    {name: "Anjali", age:34},
    {name: "Deepa", age:14},
    {name: "Nishu", age:25},
    {name: "Kajal", age:28}];

// b 
function calculateAverageAge(people) {
    let ageSum = 0
    for (let person of people) {
        ageSum += person.age;
    }
    return ageSum / people.length;
}

// c 
let total_average = calculateAverageAge(people);
console.log(total_average);
