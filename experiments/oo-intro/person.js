'use strict';

// @todo move this to site/experiments/oo-intro/person.js
// @todo copy calculator/test.html to oo-intro and adapt
// @todo create ..../person.spec.js (write only bdd ... given a persion, when I call bio, expect contains ...)

// const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'chess', 'cooking']);
// const person2 = new Person('Linda', 'Bale', 22, 'female', ['skate', 'surfing']);

function chosePronoun (gender) {
  switch (gender) {
    case 'male':
      return ' He likes ';
    case 'female':
      return ' She likes ';
    default:
      return ' They like ';
  }
}

function createInterests (interests, gender) {
  let interestsPart = '';

  if (!interests.length) {
    return '.';
  }

  // interestsPart = choosePronoun(gender)

  if (interests.length === 1) {
    interestsPart = interests[0] + '.';
  } else if (interests.length === 2) {
    interestsPart = interests[0] + ' and ' + interests[1] + '.';
  } else {
    for (let i = 0; i < interests.length; i++) {
      if (i === interests.length - 1) {
        interestsPart += ' and ' + interests[i] + '.';
      } else {
        interestsPart += interests[i] + ', ';
      }
    }
  }
  return interestsPart;
}

function Person (first, last, age, gender, interests = []) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  this.bio = function () {
    let sentence = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
    sentence += chosePronoun(this.gender) + createInterests(this.interests);
    // sentence += createInterests(this.interests, this.gender);

    return sentence;
  };

  this.greeting = function () {
    return 'Hi! I\'m ' + this.name.first + '.';
  };
}
