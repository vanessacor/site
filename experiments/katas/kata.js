'use strict';
function countPositivesSumNegatives (input) {
  if (!input || !input.length) {
    return [];
  }

  const positives = input.filter(number => number > 0);
  const negatives = input.filter(number => number < 0);

  const sumNegatives = negatives.reduce((a, b) => a + b, 0);

  return [positives.length, sumNegatives];
}

function find_average (array) {
  const length = array.length;
  const average = (array.reduce((a, b) => a + b, 0)) / length;
  return average;
};

function findTheShort (string) {
  let word = string.split(' ');
  for (let i = 0; i < word + 1; word++) {
  };
  return word;
}
