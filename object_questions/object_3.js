// Exercise 3: Consider an array of posts where each post has comments, and each comment can have replies. Write a function to add a reply to a given comment.
// In exercise 3, the function should take the comment Id as input and print the text of the comment.

const posts = [
    {
        id: 1,
        text: "First post",
        comments: [
            { id: 1, text: "Great post", replies: [{ id: 1, text: "Thanks!" }] },
            { id: 2, text: "Interesting read", replies: [] }
        ]
    },
    {
        id: 2,
        text: "Second post",
        comments: []
    }
];
console.log(posts[0].comments[0].replies[0].text)