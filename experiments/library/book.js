'use strict';

class Book {
  constructor (title, author, genre, status) {
    this.title = title.toUpperCase();
    this.author = author;
    this.genre = genre;
    this.status = status;
  };
}
