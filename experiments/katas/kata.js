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
