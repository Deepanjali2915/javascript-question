// Exercise 2: In the above userData, update Twitter handle to "@doejane" and add "traveling" to interests.

const userData = {
    userId: "user123",
    profile: {
        name: "Jane Doe",
        age: 30,
        social: {
            twitter: "@janedoe",
            facebook: "janedoe"
        },
        interests: ["music", "reading", "tech"]
    }
};

console.log (userData.profile.social.twitter="@doejane")
console.log(userData.profile.interests[3]="traveling")
console.log(userData)