'use strict';
// count the positives numbers and Sum the negatives ones
function countPositivesSumNegatives (input) {
  if (!input || !input.length) {
    return [];
  }

  const positives = input.filter(number => number > 0);
  const negatives = input.filter(number => number < 0);

  const sumNegatives = negatives.reduce((a, b) => a + b, 0);

  return [positives.length, sumNegatives];
}

// find the average
function findAverage (array) {
  const length = array.length;
  const average = (array.reduce((a, b) => a + b, 0)) / length;
  return average;
};

// find the shortest word
function findTheShort (string) {
  const wordList = s.split(' ');
  const sortedWord = wordList.sort((a, b) => (a.length > b.length) ? 1 : -1);

  return sortedWord[0].length;
}

// change all the letter to the next letter of the alphabet
function LetterChanges (str) {
  const stringToArray = str.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const vowels = 'aeiou'.split('');

  const newString = [];

  function findIndex (letter) {
    let index;
    (alphabet.indexOf(letter) === 25) ? index = 0 : index = alphabet.indexOf(letter) + 1;
    return index;
  }

  stringToArray.forEach(function isItaLetter (element) {
    let newLetter = '';
    if (alphabet.includes(element)) {
      const index = findIndex(element);
      newLetter = alphabet[index];
      if (vowels.includes(newLetter)) {
        newLetter = newLetter.toUpperCase();
      }
      newString.push(newLetter);
    } else {
      newString.push(element);
    }
  });

  return newString.join('');
}

// add all the sequence of number, example 4 (1+2+3+4) = 10
function SimpleAdding (num) {
  const numbersToAdd = [];
  let result = 0;
  let n = 0;

  while (n <= num) {
    numbersToAdd.push(n++);
  }

  result = numbersToAdd.reduce((a, b) => a + b, 0);

  return result;
}

// Capitalize all the words first letter.
function LetterCapitalize (str) {
  const wordsToCapitalize = str.split(' ');
  const result = wordsToCapitalize.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return result.join(' ');
}

// check if a letter is surronded by '+' return to if it is and false if not.
function SimpleSymbols (str) {
  const array = str.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (alphabet.includes(letter)) {
      // array[i + 1] find the next element.
      if (array[i + 1] === '+' && array[i - 1] === '+') {
        return true;
      } else {
        return false;
      }
    }
  }
}

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
backgroundColor = colors[Math.floor(Math.random() * colors.length)];
