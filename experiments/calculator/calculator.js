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

function resetExpression (part) {
  expressionParts = [part];
}


function isSymbolOperatorAndLastElementOperator(symbol, lastElement) {
  return operators.includes(symbol) && operators.includes(lastElement);
}

function isSymbolOperatorAndLastElementNumber(symbol, lastElement) {
  return operators.includes(symbol) && !operators.includes(lastElement);
}

function isSymbolNumberAndLastElementOperatorOrNothing(symbol, lastElement) {
  return !operators.includes(symbol) && operators.includes(lastElement) && symbol !== 'backspace' || lastElement === undefined;
}

function isSymbolNumberAndLastElementNumber(symbol, lastElement) {
  return numbers.includes(symbol) && lastElement && !operators.includes(lastElement);
}

function isSymbolBackspaceAndLastElementNumber(symbol, lastElement) {
  return symbol === 'backspace' && !operators.includes(lastElement);
}

function isSymbolBackspaceAndLastElementOperator (symbol, lastElement) {
  return symbol === 'backspace' && operators.includes(lastElement);
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
    modifyLastExpressionPart(lastElement, symbol);
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    } 
  }

  if (isSymbolNumberAndLastElementOperatorOrNothing(symbol, lastElement)) {
    addExpressionPart(symbol);
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    } 
  }

  if (isSymbolOperatorAndLastElementNumber(symbol, lastElement)) {
    if (expressionParts.length < 3) {
      addExpressionPart(symbol);
    } else {
      result = computeResult(expressionParts)
      resetExpression(String(result));
      addExpressionPart(symbol);
    }
  };

  if (isSymbolOperatorAndLastElementOperator(symbol, lastElement)) {
    changeOperators(symbol);
  }

  if (isSymbolBackspaceAndLastElementNumber(symbol, lastElement)) {
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

  if (isSymbolBackspaceAndLastElementOperator(symbol, lastElement)) {
    expressionParts.pop(lastElement);
    result = computeResult(expressionParts);
  }
  // if symbol is BS and last element operator
  // pop it



  if (symbol === '=' && operators.includes(lastElement)) {
    console.log('error');  
  }

  if (symbol === '=') {
    result = computeResult(expressionParts);
    resetExpression(String(result));
    result = undefined;
  }

  return result;
}



