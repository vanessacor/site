'use strict';

const digitButtons = document.querySelectorAll('.digit');
const key = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.operator');
const expressionScreen = document.getElementById('operations');
const resultScreen = document.getElementById('result');



  
key.forEach((button)=> {
  button.addEventListener ('click', () => {
    processKey(button.value);
  })
});