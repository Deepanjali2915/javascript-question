
class Employee_data {
    constructor(name, email, age, department, position, salary) {
        this.name = name
        this.email = email
        this.age = age
        this.department = department
        this.position = position
        this.salary = salary
    }

    introduce() {
        return ("Hello, my name is " + this.name + "and i work as a" + this.position)

    }

    displaySalary() {
        return ("Salary: " + this.salary)

    }
}

one = new Employee_data("Deepanjali", "deepanjali20@navgurukul.org", 21, "Finance", "Accountant", 510000)
two = new Employee_data("Nishu", "nishu@navgurukul.org", 22, "Marketing", "Executive", 560000)

console.log("one", one)
console.log(one.introduce())
console.log(one.displaySalary())
console.log("two", two)
console.log(two.introduce())
console.log(two.displaySalary())
