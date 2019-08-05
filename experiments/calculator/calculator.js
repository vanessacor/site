'use strict';

let expressionParts = [];

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
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return  divide(a, b);    
  }
}

function computeResult (expression) {

  let a = Number(expression[0]);
  let op = expression[1];
  let b = Number(expression[2]);
  let result = calculate(a, op, b);

  return result;
}

function resetExpression () {
  expressionParts = [];
}


function isSymbolOperatorAndLastElementOperator(symbol, lastElement) {
  return operators.includes(symbol) && operators.includes(lastElement);
}

function isSymbolOperatorAndLastElementNumber(symbol, lastElement) {
  return operators.includes(symbol) && !operators.includes(lastElement);
}

function isSymbolNumberAndLastElementOperatorOrNothing(symbol, lastElement) {
  return !operators.includes(symbol) && operators.includes(lastElement) || lastElement === undefined;
}

function isSymbolNumberAndLastElementNumber(symbol, lastElement) {
  return numbers.includes(symbol) && lastElement && !operators.includes(lastElement);
}

function isSymbolBackspaceAndLastElementNumber(symbol, lastElement) {
  return symbol === 'backspace' && !operators.includes(lastElement);
}

function changeOperators (symbol){
  expressionParts.pop();
  expressionParts.push(symbol);
}

function addExpressionPart(symbol) {
  expressionParts.push(symbol);
}

function modifyLastExpressionPart(lastElement, symbol) {
  const newNumb = lastElement.concat(symbol);
  expressionParts[expressionParts.length - 1] = newNumb;
}

function processKey (symbol) {  
  let result;

  const lastElement = expressionParts[expressionParts.length - 1];

  // TODO if symbol is reset

  // TODO if symbol is . and last element CONTAINS a dot
  if (symbol === '.' && lastElement === '.') {
    return;
  }
  
  if (isSymbolNumberAndLastElementNumber(symbol, lastElement)) {
    console.log('2nd if');
    modifyLastExpressionPart(lastElement, symbol);
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    } 
  }

  if (isSymbolNumberAndLastElementOperatorOrNothing(symbol, lastElement)) {
    console.log('3rd if');
    addExpressionPart(symbol);
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    } 
  }

  if (isSymbolOperatorAndLastElementNumber(symbol, lastElement)) {
    console.log('4th if');
    if (expressionParts.length < 3) {
      addExpressionPart(symbol);
    } else {
      result = computeResult(expressionParts)
      resetExpression();
      
    }
  };

  if (isSymbolOperatorAndLastElementOperator(symbol, lastElement)) {
    console.log('5th');
    changeOperators(symbol);
  }

  if (isSymbolBackspaceAndLastElementNumber(symbol, lastElement)) {
    console.log('backspace');
    if (lastElement.length < 2) {
      expressionParts.pop(lastElement)
    } else {
      let newNumb = lastElement.slice(0, -1);
      expressionParts.pop();  
      expressionParts.push(newNumb);
    }
    
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    }
    
  }

  // if symbol is BS and last element number
  //   modify last element, if last element is now empty pop it from expression
  //   if expresson still has length 3, compute

  // if symbol is BS and last element operator
  // pop it

  if (symbol === '=' && operators.includes(lastElement)) {
    console.log('error');  
  }

  if (symbol === '=') {
    result = computeResult(expressionParts);
    expressionParts = [String(result)];
    result = undefined;
  }

  return result;
}



