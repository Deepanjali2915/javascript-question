//a
let colors=["Red", "Green", "Blue"];

//b
console.log(colors[0]);

//c
colors[1] = "Yellow";
console.log(colors[1]);

//d
colors.push("White");
colors[3] = "White";
console.log(colors[3]);


//e
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

//f
i=0;
while (i<colors.length) {
  console.log(colors[i]);
  i++;
};

//g
for (let color of colors) {
  console.log(color)
};

//h
console.log(typeof(colors));

//i
console.log(colors.length);

//j
colors.push("Purple");
console.log(colors);

//k 
let a = colors.pop();
console.log(a);
console.log(colors);

//l
let b = colors.indexOf("Blue");
console.log(b);

//m
colors.owner = "Deepu";
console.log(colors);

//n
for (i in colors) {
    console.log(i+":" + colors[i])
};


