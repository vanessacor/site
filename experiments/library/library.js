'use strict';

class Library {
  constructor () {
    this.books = [];
  }

  list () {
    return this.books;
  }

  addBook (book) {
    this.books.push(book);
  }

  deleteBook (book) {
    const index = this.books.findIndex(item => item.title === book.title);
    this.books.splice(index, 1);
  }
}
