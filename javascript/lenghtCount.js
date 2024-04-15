const sentence = "My ane is deepanjali";
const words = sentence.split(" ");
let longestWord = "";
let longestLength = 0;
words.forEach(word => {
    const length = word.length;
    if (length > longestLength) {
        longestWord = word;
        longestLength = length;
    }
});
console.log(longestWord,longestLength);

