'use strict';

let expressionParts = [];


let result;


const operators = [ '+', '-', '*', '/']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

//Operations
function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  if (b === 0) {
    return ('ERROR')
  }
  else {
    return a / b;
  }
}

function calculate (a, op, b) {
  switch (op) {
    case '+':
      result = add(a, b);
      break;
    
    case '-':
      result = subtract(a, b);
      break;
    
    case '*':
      result = multiply(a, b);
      break;
    
    case '/':
      result =  divide(a, b);    
  }

  return result

}

function changeOperators (symbol){
  expressionParts.pop();
  expressionParts.push(symbol);

}

function processKey (symbol) {  
  const lastElement = expressionParts[expressionParts.length - 1];
  if (symbol === '.' && lastElement === '.') {
    return;
  }
  
  if (numbers.includes(symbol) && !operators.includes(lastElement) && lastElement) {
    console.log('2nd if');
    const newNumb = lastElement.concat(symbol);
    expressionParts[expressionParts.length - 1] = newNumb;
      if (isNaN(lastElement)) {
        console.log('3rd if');
        expressionParts.push(symbol);
      }

  }

  
  if (operators.includes(symbol) && !operators.includes(lastElement)) {
    console.log('4th if');
    // calculate(firstElement, operator, lastElement); 
    //does the last operation. Now to figure it out how to replace or where to put it
    expressionParts.push(symbol);
      if (operators.includes(symbol) && operators.includes(lastElement)) {
        console.log('5th');
        changeOperators(symbol);
      
      }

  };


  if (symbol === '=' && operators.includes(lastElement)) {
    console.log('error');  
  }

  if (symbol === '=') {
    calculate(firstElement, operator, lastElement)
  }
}