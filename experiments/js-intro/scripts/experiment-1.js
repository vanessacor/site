'use strict';

// when the user clicks on a button
// invoke the function runExperiment1
function runExperiment1 () {
  const age1 = document.getElementById('number1');
  const age2 = document.getElementById('number2');
  const age3 = document.getElementById('number2');
  const average =
    (Number(age1.value) + Number(age2.value) + Number(age3.value)) / 3;

  const resultElement = document.getElementById('result-1');
  resultElement.innerHTML = 'The Average is ' + average;
}
