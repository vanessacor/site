'use strict';

const key = document.querySelectorAll('button');
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

document.addEventListener('keyup', (ev) => {
  handleKey(event.key);
});

key.forEach((button) => {
  button.addEventListener('click', () => {
    handleKey(button.value);
  });
});

function handleKey (key) {
  const result = processKey(key);
  updateOperations();
  updateResult(result);
}
