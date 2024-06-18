people=[{name:"deepu"},{name:"anjali"},{name:"deepa"},{name:"nishu"},{name:"kajal"}]
function average(people) {
    let total_average = 0
    for (let i = 0; i < people.length; i++) {
        total_average += people[i].age
    }
    return total_average/people.length;
}

let total_average = average(people);

console.log(total_average)
    