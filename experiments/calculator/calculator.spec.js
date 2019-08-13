'use strict';

/* global expressionParts:writable, processKey */

describe('calculator', function () {
  describe('given expression is shorter than 3 parts and ends with a Number', function () {
    beforeEach(function () {
      expressionParts = ['123'];
    });

    describe('when the user clicks on a Number', function () {
      let result;

      beforeEach(function () {
        result = processKey('1');
      });

      it('should modify the last expression part', function () {
        expect(expressionParts).toEqual(['1231']);
      });

      it('should not return a result', function () {
        expect(result).toBe(undefined);
      });
    });

    describe('when the user clicks on an operator ', function () {
      beforeEach(function () {
        processKey('+');
      });

      it('should add operator to expression', function () {
        expect(expressionParts).toEqual(['123', '+']);
      });
    });

    describe('when user clicks on Dot ', function () {
      let result;

      beforeEach(function () {
        result = processKey('.');
      });

      it('should modify the last expression part', function () {
        expect(expressionParts).toEqual(['123.']);
      });

      it('should not return a result', function () {
        expect(result).toBe(undefined);
      });
    });
  });

  describe('given expression is 3 parts long and ends with a Number', function () {
    beforeEach(function () {
      expressionParts = ['123', '+', '2'];
    });

    describe('when the user clicks on a number', function () {
      let result;

      beforeEach(function () {
        result = processKey('2');
      });

      it('should return the result', function () {
        expect(result).toEqual(145);
      });

      it('should add number to last expression part', function () {
        expect(expressionParts).toEqual(['123', '+', '22']);
      });
    });

    describe('when the user clicks on an operator ', function () {
      let result;

      beforeEach(function () {
        result = processKey('+');
      });

      it('should return the result', function () {
        expect(result).toBe(125);
      });

      it('should reset the expression to contain the result and the operator', function () {
        expect(expressionParts).toEqual(['125', '+']);
      });
    });
  });

  describe('given the expression ends with a number with at least 2 digits', function () {
    beforeEach(function () {
      expressionParts = ['12'];
    });

    describe('when the user clicks on backspace', function () {
      beforeEach(function () {
        processKey('Backspace');
      });

      it('should remove a digit from the last number in the expression', function () {
        expect(expressionParts).toEqual(['1']);
      });
    });
  });

  describe('given the expression ends with a number with only 1 digits', function () {
    beforeEach(function () {
      expressionParts = ['12', '+', '1'];
    });

    describe('when the user clicks on backspace', function () {
      beforeEach(function () {
        processKey('Backspace');
      });

      it('should remove a digit from the last number in the expression', function () {
        expect(expressionParts).toEqual(['12', '+']);
      });
    });
  });

  describe('given the expression is shorter than 3 parts and ends with a Operator', function () {
    beforeEach(function () {
      expressionParts = ['123', '+'];
    });

    describe('when user cliks on Dot', function () {
      let result;

      beforeEach(function () {
        result = processKey('.');
      });

      it('should add 0. to the expression', function () {
        expect(expressionParts).toEqual(['123', '+', '0.']);
      });

      it('should return the result', function () {
        expect(result).toEqual(123);
      });
    });

    describe('when user clicks on a number', function () {
      let result;

      beforeEach(function () {
        result = processKey('1');
      });

      it('should add to expression', function () {
        expect(expressionParts).toEqual(['123', '+', '1']);
      });

      it('should return the result', function () {
        expect(result).toEqual(124);
      });
    });

    describe('when user clicks on an operator', function () {
      let result;

      beforeEach(function () {
        result = processKey('*');
      });

      it('should change the last expression part', function () {
        expect(expressionParts).toEqual(['123', '*']);
      });

      it('should not return result', function () {
        expect(result).toEqual(undefined);
      });
    });

    describe('when user clicks on backspace', function () {
      let result;

      beforeEach(function () {
        result = processKey('Backspace');
      });

      it('should remove the last expression part', function () {
        expect(expressionParts).toEqual(['123']);
      });

      it('should not return result', function () {
        expect(result).toEqual(undefined);
      });
    });

    describe('when user clicks on Equal', function () {
      beforeEach(function () {
        processKey('=');
      });

      it('should not change the expression', function () {
        expect(expressionParts).toEqual(['123', '+']);
      });
    });
  });

  describe('given a non-empty expression', function () {
    describe('when user clicks on Reset', function () {
      let result;

      beforeEach(function () {
        result = processKey('Escape');
      });

      it('should reset expression', function () {
        expect(expressionParts).toEqual([]);
      });

      it('should return undefined', function () {
        expect(result).toEqual(undefined);
      });
    });
  });
});
