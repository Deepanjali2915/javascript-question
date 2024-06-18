form = document.getElementById("form")
form.addEventListener("submit", function (event) {
  event.preventDefault()
  console.log("Form Submitted")

})


document.addEventListener("DOMContentLoaded", function () {
  paragraphs = document.querySelectorAll("p")

  paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener("mouseover", function () {
      this.style.color = "red"
    })
  });
})


let content = document.getElementById("content")
content.addEventListener("click", function abc() {
  content.style.fontSize = "xx-large"


  let small = document.getElementById("small")
  small.addEventListener("click", function abc() {
    content.style.fontSize = "small"
  })

  let medium = document.getElementById("medium")
  medium.onclick = function () {
    content.style.fontSize = "medium"
  }

  let larg = document.getElementById("larg")
  larg.onclick = function () {
    content.style.fontSize = "large"
  }
  let extralarge = document.getElementById("extralarge")
  extralarge.onclick = function () {
    content.style.fontSize = "x-large"
  }
})



document.addEventListener("DOMContentLoaded", function () {
  toggless =document.querySelectorAll("togglediv")

  toggless.forEach(function(div) {
    div.addEventListener("click", function () {
      if (this.style.backgroundColor === "yellow") {
        this.style.backgroundColor = "green"
      }
      else {
        this.style.backgroundColor="yellow"
      }
    })
  })
})


























