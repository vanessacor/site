'use strict';

describe('Person', function () {
  describe('given an instance of person', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Vanessa', 'Poppe', 43, 'female', ['surf', 'punk', 'skate']);
    });

    it('should contain the first name', function () {
      expect(person3.name.first).toEqual('Vanessa');
    });

    it('should contain the last name', function () {
      expect(person3.name.last).toEqual('Poppe');
    });

    it('should contain person age', function () {
      expect(person3.age).toEqual(43);
    });

    it('should create person gender', function () {
      expect(person3.gender).toEqual('female');
    });

    it('should greet() as expected', function () {
      expect(person3.greeting()).toEqual('Hi! I\'m Vanessa.');
    });
  });

  describe('given a person with male gender', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('John', 'Lennon', 27, 'male', ['music']);
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('John Lennon is 27 years old. He likes music.');
    });
  });

  describe('given a person with other gender', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Fantee', 'Bruu', 999, 'other', ['grass']);
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('Fantee Bruu is 999 years old. They like grass.');
    });
  });

  describe('given a person without interests', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Vanessa', 'Poppe', 43, 'female');
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('Vanessa Poppe is 43 years old.');
    });
  });

  describe('given a person with 1 interest', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Vanessa', 'Poppe', 43, 'female', ['surf']);
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('Vanessa Poppe is 43 years old. She likes surf.');
    });
  });

  describe('given a person with 2 interest', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Vanessa', 'Poppe', 43, 'female', ['surf', 'punk']);
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('Vanessa Poppe is 43 years old. She likes surf and punk.');
    });
  });

  describe('given a person with more than 2 interest2', function () {
    let person3;
    beforeEach(function () {
      person3 = new Person('Vanessa', 'Poppe', 43, 'female', ['surf', 'punk', 'skate']);
    });

    it('should generate bio{} as expected', function () {
      expect(person3.bio()).toEqual('Vanessa Poppe is 43 years old. She likes surf, punk, and skate.');
    });
  });
});
