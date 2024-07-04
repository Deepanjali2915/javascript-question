//a
class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name
        this.email = email
        this.age = age
        this.department = department
        this.position = position
        this.salary = salary
    }
    //b
    introduce() {
        console.log(`Hello, I am ${this.name}, ${this.position}`);
        
    }
    //c
    displaySalary() {
        console.log(`Salary: $${this.salary}`);

    }
}
//d
let newEmployee = new Employee("Deepanjali", "deepanjali20@navgurukul.org", 21, "Finance", "Accountant", 510000)
console.log("newEmployee", newEmployee);

//e
let manager = new Employee("Nishu", "nishu@navgurukul.org", 22, "Marketing", "Executive", 560000)
console.log("manager", manager);

//f
newEmployee.introduce();

//g
manager.displaySalary();
