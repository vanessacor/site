'use strict';

const myLibrary = [];

function Book (title, author, pages, price) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
  // const newBook = [this.title + ', ' + this.author + ', ' + this.pages + ', ' + this.read];
  // myLibrary.push(newBook);
}

const book1 = new Book('Little Prince', 'Saint Exupery', 410, 15);
const book2 = new Book('1984', 'George Orwell', 250, 20);
const book3 = new Book('Siddharta', 'Hermann Hesse', 601, 10);
const book4 = new Book('The Process', 'Frank Kafka', 410, 30);
const book5 = new Book('Metamorphosis', 'Frank Kafka', 310, 40);

myLibrary.push(book1, book2, book3, book4, book5);

Book.prototype.print = function () {
  console.log(this.title);
};

const listByPages = myLibrary.sort((a, b) => (a.pages > b.pages) ? 1 : -1);

const authors = myLibrary.map(function (book) {
  return book.author;
});

const expensive = myLibrary.filter(function (book) {
  return book.price >= 20;
});

const kafka = myLibrary.filter(function (book) {
  return book.author === 'Frank Kafka';
});
