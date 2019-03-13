'use strict';

//odin project - fundamentals 3

//add 
function add7(num1) {
  let result = num1 + 7;
  return result;
}   

//multiply
function multiply (num1, num2) {
  let result = num1 * num2;
  return result
}

//capitalize first letter
function capitalize (string) {
  return string.charAt(0) + string.slice(1).toUpperCase()
}

//return last letter
function lastLetter (string) {
  return string.substr(string.length -1)
}