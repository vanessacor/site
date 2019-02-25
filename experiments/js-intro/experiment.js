'use strict';

function runExperiment1() {
    let age1 = 2;
    let age2 = 4;
    let age3 = 10;
    let average = (age1 + age2 + age3) / 3;

    let resultElement = document.getElementById ('result-1');
    resultElement.innerHTML = average;
}

// when the user clicks on a button
// invoke the function runExperiment1
// checK: add event listener
// write code here:
const myButton = document.getElementById ('button-1');
myButton .addEventListener ('click', runExperiment1);