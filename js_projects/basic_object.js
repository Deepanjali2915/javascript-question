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



