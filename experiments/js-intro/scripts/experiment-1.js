'use strict';

// when the user clicks on a button
// invoke the function runExperiment1
function runExperiment1 () {
  const age1 = 2;
  const age2 = 4;
  const age3 = 10;
  const average = (age1 + age2 + age3) / 3;

  const resultElement = document.getElementById('result-1');
  resultElement.innerHTML = average;
}

const myButton = document.getElementById('button-1');
myButton.addEventListener('click', runExperiment1);
