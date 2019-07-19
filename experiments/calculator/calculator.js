'use strict';

const expressionParts = [];

let result;


const operators = [ '+', '-', '*', '/']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

function processKey (symbol) {  
  const lastElement = expressionParts[expressionParts.length - 1];
  if (symbol === '.' && lastElement.contains('.')) {
    return;
  }
  
  if (numbers.includes(symbol) && !operators.includes(lastElement) && lastElement) {
    const newNumb = lastElement.concat(symbol);
    expressionParts[expressionParts.length - 1] = newNumb;
  }

  if (isNaN(lastElement)) {
    expressionParts.push(symbol);
  }

  if (operators.includes(symbol) && !operators.includes(lastElement)) {
    expressionParts.push(symbol);
  };


}





