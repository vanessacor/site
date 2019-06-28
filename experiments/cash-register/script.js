'use strict'

const button = document.getElementById('entry');
const input = document.getElementById('item-price');
const inputName = document.getElementById('item-name');
const total = document.getElementById('total-amount');
const container = document.querySelector('.item-wraper');

button.addEventListener('click', handleSubmit);


// business logic

const itemsList = [];

function addItem(name, newValue) {
  itemsList.push({name, newValue});
}


function formatCurrency (value) {
  return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value));
}

function calculateTotal () {
  return itemsList.reduce((a, b) => a + b.newValue, 0);
}

// ui

function handleSubmit (ev) {
  ev.preventDefault();
  let newName = inputName.value;
  inputName.value = '';
  const newValue = Number(input.value);
  input.value = '';
  addItem(newName,newValue);

  updateTotal();
  addItemDisplay(newValue);
}

function addItemDisplay(newValue) {
  const newItem = document.createElement('li');
  if (newValue < 0) {
    newItem.setAttribute('class', 'negative')
  } else {
    newItem.setAttribute('class', 'item');
    }

  newItem.innerHTML = `<button id="delete-btn">
    <i class="far fa-trash-alt"></i></button>
    <span id="name">${inputName.value}</span>
    <span id="price">${formatCurrency(newValue)}</span>`;
  container.appendChild(newItem);
}

function updateTotal () {
  const newTotal = calculateTotal();
  total.innerText = formatCurrency(newTotal);
}



