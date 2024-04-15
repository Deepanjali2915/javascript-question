function sum(name,...args){
    let sum=0;
    for (let i in args){
        sum+=args[i]
    }
    console.log(sum);
    console.log(name);
}
sum("deepu",20,30)    
sum("deepanjali",60,80)
