'use strict';

/* global expressionParts:writable, processKey */

describe('library', function () {
  describe('given an empty library', function () {
    beforeEach(function () {
      this.library = new Library();
    });

    describe('when create a book', function () {
      beforeEach(function () {
        const book = new Book('foobar', 'MisterMacfoo', 'fiction', 'Read');
        this.library.addBook(book);
      });

      it('should contain one book', function () {
        expect(this.library.list().length).toEqual(1);
      });

      it('should contain one book', function () {
        const list = this.library.list();
        const book = list[0];
        expect(book.title).toEqual('foobar');
      });
    });
  });
});

// (describe) Library

// given an empty library
// when I create a book
// it should contain one book
// it should have created the book with the correct title

// given a library with two books
// when I delete a book
// it should contain one book

// given a library with two books
// when I update a book
// it should have updated the correct book with the correct title

// (describe) given a library with one book
// (beforeEach)
// this.library = new Library();
// this.sampleBook = new Book('foobar');
// this.library.addBook(sampleBook);

// (describe) when I check if the exiting title is unique

// (beforeEach)
// this.result = libary.isUniqueTitle('foobar');

// (it) should returns false
// expect(this.result).toEqual(false);

// (describe) when I check if another title is unique

// (beforeEach)
// this.result = libary.isUniqueTitle('quxqux');

// (it) should returns true
// expect(this.result).toEqual(true);
