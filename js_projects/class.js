friend = {
    friend_name: "nishu",
    friend_email: "nishu11@navgurukul.org",
    friend_age: 23,
    friend_address:
        { country: "india", city: "delhi", pin_code: 112211 }
}
console.log("friend", friend)

topper = {
    topper_name: "Anjali",
    topper_email: "anjali11@navgurukul.org",
    topper_age: 26,
    topper_address:
        { country: "india", city: "haryana", pin_code: 124161 }
}
console.log("Topper", topper)

class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.city = city
        this.pin_code = pin_code
    }

    greet() {
        return ("Hello, " + this.name + "!")

    }

    getFullAddress() {
        return (this.country + " " + this.city + "-" + this.pin_code)

    }


}

myself = new Student("Deepanjali", "deepanjali20@navgurukul.org", 21, "india", "delhi", 110077)
my_friend = new Student("Pooja", "Pooja@navgurukul.org", 27, "india", "Bangalore", 560038)
another_student = new Student("Priya", "priya@navgurukul.org", 25, "india", "bihar", 112346)


console.log("My Self", myself)
console.log("My Friend", my_friend)
console.log("Another Student", another_student)
console.log(my_friend.greet())
console.log(another_student.getFullAddress())
