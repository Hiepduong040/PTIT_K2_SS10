class Book {
    private title: string;
    private author: string;
    private quantity:number;
    constructor(title: string, author: string,quantiy:number=1) {
        this.title = title;
        this.author = author;
        this.quantity=quantiy;
    }
     getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getQuantity():number{
        return this.quantity;
    }
    setQuantity( quantity:number):number{
       return this.quantity=quantity;
    }
}

class Library {
    private books: Book[];
    constructor() {
        this.books = [];
    }
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public printBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()} - ${book.getQuantity()}`);
        });
    }
}
const book01 = new Book("01", "01",24);
const book02 = new Book("02", "02");
const book03 = new Book("03", "03",64);
const book04 = new Book("04", "04")
const book05 = new Book("05", "05");
const library = new Library();
library.addBook(book01);
library.addBook(book02);
library.addBook(book03);
library.addBook(book04);
library.addBook(book05);
library.printBooks();