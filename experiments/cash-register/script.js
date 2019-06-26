'use strict'

const button = document.getElementById('entry');
const input = document.getElementById('new-item');
const total = document.getElementById('total-amount');
const container = document.querySelector('.item-wraper');

button.addEventListener('click', handleSubmit);


// business logic

const items = [];

function addItem(newValue) {
  items.push(newValue);
}

function formatCurrency (value) {
  return '$' + value;
}

function calculateTotal () {
  return items.reduce((a, b) => a + b, 0);
}

// ui

function handleSubmit (ev) {
  ev.preventDefault();
  const newValue = Number(input.value);
  input.value = '';
  addItem(newValue);

  updateTotal();
  addItemDisplay(newValue);
}

function addItemDisplay(newValue) {
  const newItem = document.createElement('p');
  newItem.setAttribute('class', 'item');
  newItem.innerHTML = formatCurrency(newValue);
  container.appendChild(newItem);
}

function updateTotal () {
  const newTotal = calculateTotal();
  total.innerText = formatCurrency(newTotal);
}



