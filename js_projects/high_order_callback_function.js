// a--
function higherOrderFunction(num,callback){
    callback(num);
}


// b---
function callbackFunction(number){
    console.log(number);
}
higherOrderFunction(10,callbackFunction)


// c---
higherOrderFunction(20,function(num){
    console.log(num);
});


// d---
higherOrderFunction(10,function(num){
    console.log(num**2);
});


//e----
higgherOrderFunction(20,10,function(num1,num2){
    console.log(num1+num2);
});

function higgherOrderFunction(num1,num2,callback){
    callback(num1,num2);
};