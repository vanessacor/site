'use strict';

const digitButtons = document.querySelectorAll('.digit');
const key = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.operator');
const expressionScreen = document.getElementById('operations');
const resultScreen = document.getElementById('result');

function updateOperations () {

  if (expressionParts.length < 4) {
    expressionScreen.textContent = expressionParts.join('');

  } else {
    expressionScreen.textContent = result;
  }
}

function updateResult (result) {
  resultScreen.textContent = result;
}

// TODO add event listner on #document key press, send keys to handleKey

key.forEach((button)=> {
  button.addEventListener ('click', () => {
    handleKey(button.value);
  })
});

function handleKey(key) {
  const result = processKey(key);
  updateOperations();
  updateResult(result);
}

