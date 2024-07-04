//a
colors=[ "red", "green", "blue"]
console.log(typeof(color));

//b
console.log(colors.length);

//c
colors.push("white");
console.log(colors);

//d
colors.pop();
console.log(colors);

//e
a = colors.indexOf("blue");
console.log(a);

//f
colors.owner = "Black";
console.log(colors);

for (i in colors) {
    console.log(i+":" + colors[i])
}