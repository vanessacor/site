'use strict';

let expressionParts = [];

const DOT = '.';
const EQUALS = '=';
const BACKSPACE = 'Backspace'; 
const OPERATORS = [ '+', '-', '*', '/']
const reset = 'Escape'

// operations

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
  const a = Number(expression[0]);
  const op = expression[1];
  const b = Number(expression[2]);
  const result = calculate(a, op, b);
  if (result % 1 != 0) {
    return result.toFixed(2)
  } else {
    return result;
    }
}

function resetExpression (part) {
  expressionParts = [];
  if (part) {
    expressionParts.push(part);
  }
}

function isNumber(value) {
  return typeof value !== 'undefined' && (value === "." || !isNaN(Number(value)))
}

function isOperator(value) {
  return OPERATORS.includes(value);
}

function changeOperators (symbol){
  expressionParts.pop();
  expressionParts.push(symbol);
}

function addExpressionPart(symbol) {
  expressionParts.push(symbol);
}

function modifyLastExpressionPart(lastExpressionPart, symbol) {
  const newNumb = lastExpressionPart.concat(symbol);
  expressionParts[expressionParts.length - 1] = newNumb;
}

function processKey (symbol) {  
  let result;

  const lastExpressionPart = expressionParts[expressionParts.length - 1];

  if (symbol === DOT && lastExpressionPart && lastExpressionPart.includes('.')) {
    return;
  }
  
  if (isNumber(symbol)) {
    if (isNumber(lastExpressionPart)) {
    modifyLastExpressionPart(lastExpressionPart, symbol);
    }

    if (isOperator(lastExpressionPart) || !lastExpressionPart) {
      if (symbol === DOT) {
      addExpressionPart("0.");
      }
      else {
      addExpressionPart(symbol);
      }
    }

    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    } 
  }
  
  if (isOperator(symbol) && isNumber(lastExpressionPart)) {
    if (expressionParts.length < 3) {
      addExpressionPart(symbol);
    } else {
      result = computeResult(expressionParts)
      resetExpression(String(result));
      addExpressionPart(symbol);
      }
  }
  
  if (isOperator(symbol) && isOperator(lastExpressionPart)) {
    changeOperators(symbol);
  }
  
  if (symbol === BACKSPACE) {
    if (isNumber(lastExpressionPart)) {
      if (lastExpressionPart.length < 2) {
        expressionParts.pop(lastExpressionPart)
      } else {
          let newNumb = lastExpressionPart.slice(0, -1);
          expressionParts.pop();  
          expressionParts.push(newNumb);
        }
    
    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    }
  }
  
    if (isOperator(lastExpressionPart)) {
      expressionParts.pop(lastExpressionPart);
    }
  }

  if (symbol === EQUALS) {
    if (isOperator(lastExpressionPart)) {
    console.log('error');
    } 
    else {
    result = computeResult(expressionParts);
    resetExpression();
    }
  }
  
  if (symbol === reset) {
    resetExpression();
  }

  return result;
}



