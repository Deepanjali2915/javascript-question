//a
class Book{
    constructor(title, author, publisher, year, genre) {
        this.title = title
        this.author = author
        this.publisher = publisher
        this.year = year
        this.genre = genre
    }

    //b
    describe() {
        console.log(`${this.title} - ${this.author} (${this.year})`);

    }

    //c
    displayGenre() {
        console.log(`Genre: ${this.genre}`);

    }
}
//d
classicBook = new Book("Things fall apart", "Chinua achebe", "KAjal", 1958, "Historical fiction");
console.log("Classic Book", classicBook);

//e
sciFiBook = new Book("Fairy tales", "Hans Christian Andersen", "hena", 1836, "anime");
console.log("sciFiBook", sciFiBook);

//f
classicBook.describe();

//g
sciFiBook.displayGenre();
