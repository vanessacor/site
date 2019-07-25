'use strict';

const digitButtons = document.querySelectorAll('.digit');
const key = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.operator');
const expressionScreen = document.getElementById('operations');
const resultScreen = document.getElementById('result');

function updateOperations () {
  expressionScreen.textContent = expressionParts.join('');
}

function updateResult (result) {
  resultScreen.textContent = result;
}

key.forEach((button)=> {
  button.addEventListener ('click', () => {
    const result = processKey(button.value);
    updateOperations();
    updateResult(result);
  })
});

