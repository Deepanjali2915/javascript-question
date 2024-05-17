
class Book_data {
    constructor(title, author, publisher, year, genre) {
        this.title = title
        this.author = author
        this.publisher = publisher
        this.year = year
        this.genre = genre
    }

    describe() {
        return (this.title + "-" + this.author+"("+ this.year+")")

    }

    displayGenre() {
        return ("Genre: " + this.genre)

    }
}

normalBook = new Book_data("Five Points Someone","Chetan Bhagat","Shivani",2004,"Historical fiction")
classicBook = new Book_data("Things fall apart","Chinua achebe","KAjal",1958,"Historical fiction")
sciFiBook = new Book_data("Fairy tales","Hans Christian Andersen","hena",1836,"anime")

console.log("Book", normalBook)
console.log(normalBook.describe())
console.log(normalBook.displayGenre())
console.log("Classic Book", classicBook)
console.log(classicBook.describe())
console.log(classicBook.displayGenre())
