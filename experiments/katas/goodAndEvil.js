'use strict';

// With map and reduce
// function sumUnits (unitsString, values) {
//   const unitArray = unitsString.split(' ').map(item => Number(item));
//   return values.reduce(function (accumulator, item, index) {
//     return accumulator + item * unitArray[index];
//   }, 0);
// }

// with forEach and for
function sumUnits (unitsString, values) {
  const unitArray = unitsString.split(' ');
  const unitsNumbersArray = [];
  const result = 0;
  unitArray.forEach(function (item) {
    unitsNumbersArray.push(Number(item));
  });

  for (let i = 0; i < values.length; i++) {
    result += values[i] * unitsNumbersArray[i];
  };
  return result;
}

function goodVsEvil (good, evil) {
  const goodValues = [1, 2, 3, 3, 4, 10];
  const evilValues = [1, 2, 2, 2, 3, 5, 10];

  const sumGood = sumUnits(good, goodValues);
  const sumEvil = sumUnits(evil, evilValues);

  if (sumGood > sumEvil) {
    return ('Battle Result: Good triumphs over Evil');
  }

  if (sumGood < sumEvil) {
    return ('Battle Result: Evil eradicates all trace of Good');
  }

  if (sumGood === sumEvil) {
    return ('Battle Result: No victor on this battle field');
  }
}
