//a
let temperature = [-3, 14, 22, 5, -10];

// b 
temperature.forEach(function(temperature) {
    console.log(temperature);
});

temperature.forEach(temperature => {
    console.log(temperature);
});

// c
temperature.forEach(function(temperature) {
    console.log((temperature*9/5) + 32);
});

temperature.forEach(temperature => {
    console.log((temperature*9/5) + 32);
});

// d
let temperaturesInFahrenheit = temperature.map(function(temperature) {
   let Fahrenheit = ((temperature*9/5) + 32);
   return Fahrenheit;
});
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperature.map(temperature => {
    let Fahrenheit = ((temperature*9/5) + 32);
    return Fahrenheit;
 });
 console.log(temperaturesInFahrenheit);
 
// e
let belowFreezing = temperature.filter(function(temperature) {
    if (temperature<0){
        return temperature;
    };
 }); 
 console.log(belowFreezing);


belowFreezing = temperature.filter(temperature => {
    if (temperature<0){
        return temperature;
    };
 }); 
 console.log(belowFreezing);
