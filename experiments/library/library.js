'use strict';

class Library {
  constructor () {
    this.books = [];
    this.counter = 1;
  }

  list () {
    return this.books;
  }

  addBook (book) {
    book.id = this.counter++;
    this.books.push(book);
  }

  deleteBook (title) {
    const index = this.books.findIndex(item => item.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  updateBook (book1, book2) {
    const index = this.books.findIndex(item => item.title === book1.title);
    this.books.splice(index, 1, book2);
  }

  isUniqueTitle (title) {
    return !this.books.some(book => book.title === title);
  }
}
