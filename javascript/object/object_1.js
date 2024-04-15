// Exercise 1: In the code below, print Jane Doe's Facebook handle and her second interest.

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

console.log (userData.profile.social.facebook)
console.log (userData.profile.interests[1])


