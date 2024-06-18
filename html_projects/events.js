click = document.getElementById("button")

click.addEventListener("click", function () {
  console.log("Button Clicked")
})


mouseover = document.getElementById("mouse")
mouseover.addEventListener("mouseover", (event) => {
  event.target.style.color = "red"
}

)

input = document.getElementById("input")
input.addEventListener("input", function (event) {
  console.log(event.target.value)
})


document.addEventListener("DOMContentLoaded", function () {
  togglebutn = document.getElementById("togglebutn")
  togglebutn.addEventListener("click", function () {
    if (toggelediv.style.backgroundColor === "pink") {
      toggelediv.style.backgroundColor = "white";
    } else {
      toggelediv.style.backgroundColor = "pink";
    }
  })


  toggelediv = document.getElementById("toggelediv")

})