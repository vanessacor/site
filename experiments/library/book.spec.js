'use strict';

/* global expressionParts:writable, processKey */

describe('Book', function () {
  describe('when I create a book', function () {
    beforeEach(function () {
      this.book = new Book('foobar', 'MisterMacfoo', 'fiction', 'Read');
    });

    it('should contain the correct title', function () {
      expect(this.book.title).toEqual('foobar');
    });

    it('should contain the correct author', function () {
      expect(this.book.author).toEqual('MisterMacfoo');
    });

    it('should contain the correct genre', function () {
      expect(this.book.genre).toEqual('fiction');
    });

    it('should contain the selected status', function () {
      expect(this.book.status).toEqual('Read');
    });
  });
});

// (describe) when I create a book
// (beforeEach)
// this.book = new Book('foobar')

// (it) should contains all the attributes
// expect(this.book.title).toEqual('foobar')
// ..
