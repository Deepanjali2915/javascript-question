// a
let student = {};

// b
student.name = "Deepanjali";
student.email = "deepanjali20@navgurukul.org";
student.age = 24;

// c
console.log(student.name);

// d
student.age = 10;
console.log(student.age);

// e
student.greet = function() {
    console.log("Hello, " + this.name + "!");
}
student.greet();

//f
student.address = {
    country: "India",
    city: "Delhi",
    pin_code: "112211"
};

//g
console.log(student.address.country);

// h
student.address.pin_code = "334455";
console.log(student.address);

//i
let friend = {
    name: "Nishu",
    email: "nishu11@navgurukul.org",
    age: 23,
    address: { 
        country: "India", 
        city: "Delhi", 
        pin_code: "112311"
    },
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }  
};
friend.greet();
console.log(friend);

// j
topper = {
    name: "Anjali",
    email: "anjali11@navgurukul.org",
    age: 26,
    address: {
        country: "India",
        city: "Haryana",
        pin_code: "124161"
    },
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }   
};
topper.greet();
console.log(topper);

// k
class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name
        this.email = email
        this.age = age
        this.address = { 
            country: country, 
            city: city, 
            pin_code: pin_code
        }
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }

    //l
    getFullAddress() {
        return (`${this.address.country}, ${this.address.city} - ${this.address.pin_code}`);
    }
}

//m
let myself = new Student("Deepanjali", "deepanjali20@navgurukul.org", 21, "India", "Delhi", "110077");
let my_friend = new Student("Pooja", "pooja@navgurukul.org", 27, "India", "Bangalore", "560038");
let another_student = new Student("Priya", "priya@navgurukul.org", 25, "India", "Bihar", "112346");

console.log("My Self", myself)
console.log("My Friend", my_friend)
console.log("Another Student", another_student)

my_friend.greet();

//n
console.log(another_student.getFullAddress())
