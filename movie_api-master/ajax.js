let request=new XMLHttpRequest();
let a=document.getElementById("Submit")
console.log(a)
a.onclick = function() {
    let movie_id = document.getElementById("input").value;
    
    request.open("GET","https://www.omdbapi.com/?t="+movie_id+"&apikey=7f38cf13");
    request.onloadend= output;
    request.send();
    
    return false;
    
}
let output=function(){
    if (request.status===200){
        let response=JSON.parse(request.responseText);
        let movie_name=response.Title;
        let year=response.Year;
        let director=response.Director;
        let writer=response.Writer;
        let released=response.Released;
        let imbd_rating=response.Ratings[0].Value;
        
        
        document.getElementById("movie_name").innerHTML=movie_name;    
        document.getElementById("year").innerHTML=year;
        document.getElementById("director").innerHTML=director;
        document.getElementById("writer").innerHTML=writer;
        document.getElementById("released").innerHTML=released;
        document.getElementById("imbd_rating").innerHTML=imbd_rating;
    
        
    } else{
        
    
    }
};
