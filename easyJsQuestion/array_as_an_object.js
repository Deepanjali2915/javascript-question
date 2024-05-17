color=[ "red", "green", "blue"]
console.log(typeof(color))


console.log(color.length)


color.push("white")
console.log(color)


color.pop()
console.log(color)


a=color.indexOf("blue")
console.log(a)


color.owner="Deepanjali"
console.log(color)

for (i in color){
    console.log(i+":"+color[i])
}