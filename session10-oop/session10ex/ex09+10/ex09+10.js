"use strict";
class Book {
    constructor(title, author, quantiy = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantiy;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        return this.quantity = quantity;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()} - ${book.getQuantity()}`);
        });
    }
}
const book01 = new Book("01", "01", 24);
const book02 = new Book("02", "02");
const book03 = new Book("03", "03", 64);
const book04 = new Book("04", "04");
const book05 = new Book("05", "05");
const library = new Library();
library.addBook(book01);
library.addBook(book02);
library.addBook(book03);
library.addBook(book04);
library.addBook(book05);
library.printBooks();
