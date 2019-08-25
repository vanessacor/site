'use strict';

describe('Person', function () {
  describe('when create a person', function () {
    beforeEach(function () {
      const person3 = Person('Vanessa', 'Poppe', 43, 'female', ['surf', 'punk', 'skate']);
    });

    describe('when call person first name', function () {
      it('should contain the first name', function () {
        expect(person3.name.first).toEqual(['Vanessa']);
      });
    });

    describe('when call person last name', function () {
      it('should contain the last name', function () {
        expect(person3.name.last).toEqual(['Poppe']);
      });
    });

    describe('when call person age', function () {
      it('should contain person age', function () {
        expect(person3.age).toEqual([43]);
      });
    });

    describe('when call person gender', function () {
      it('should create person gender', function () {
        expect(person3.gender).toEqual(['female']);
      });
    });
  });
});
