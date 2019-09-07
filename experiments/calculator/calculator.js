'use strict';

/* eslint-disable no-unused-vars */
/* global expressionParts, processKey */

let expressionParts = [];

const DOT = '.';
const EQUALS = '=';
const BACKSPACE = 'Backspace';
const OPERATORS = ['+', '-', '*', '/'];
const reset = 'Escape';

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
    return ('ERROR');
  } else {
    return a / b;
  }
}

const ops = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

function calculate (a, op, b) {
  if (!op) { return; }
  const fn = ops[op];
  return fn(a, b);
}

// utils

function isNumber (value) {
  const isDot = value === '.';
  const isNumber = !isNaN(Number(value));
  return typeof value !== 'undefined' && (isDot || isNumber);
}

function isOperator (value) {
  return OPERATORS.includes(value);
}

// modify expression

function resetExpression (part) {
  expressionParts = [];
  if (part) {
    expressionParts.push(part);
  }
}

function changeOperators (symbol) {
  expressionParts.pop();
  expressionParts.push(symbol);
}

function addExpressionPart (symbol) {
  expressionParts.push(symbol);
}

function modifyLastExpressionPart (lastExpressionPart, symbol) {
  const newNumb = lastExpressionPart.concat(symbol);
  expressionParts[expressionParts.length - 1] = newNumb;
}

// result

function computeResult (expression) {
  const a = Number(expression[0]);
  const op = expression[1];
  const b = Number(expression[2]);
  const result = calculate(a, op, b);
  return result;
}

// input

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
        addExpressionPart('0.');
      } else {
        addExpressionPart(symbol);
      }
    }

    if (expressionParts.length === 3) {
      result = computeResult(expressionParts);
    }
  }

  if (isOperator(symbol)) {
    if (isNumber(lastExpressionPart)) {
      if (expressionParts.length < 3) {
        addExpressionPart(symbol);
      } else {
        result = computeResult(expressionParts);
        resetExpression(String(result));
        addExpressionPart(symbol);
      }
    }

    if (isOperator(lastExpressionPart)) {
      changeOperators(symbol);
    }
  }

  if (symbol === BACKSPACE) {
    if (isNumber(lastExpressionPart)) {
      if (lastExpressionPart.length < 2) {
        expressionParts.pop(lastExpressionPart);
      } else {
        const newNumb = lastExpressionPart.slice(0, -1);
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
    } else {
      result = computeResult(expressionParts);
      resetExpression();
    }
  }

  if (symbol === reset) {
    resetExpression();
  }

  return result;
}
