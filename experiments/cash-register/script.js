'use strict';

const button = document.getElementById('entry');
const inputPrice = document.getElementById('item-price');
const inputName = document.getElementById('item-name');
const inputCategory = document.getElementById('categories-choice');
const total = document.getElementById('total-amount');
const container = document.querySelector('.item-wraper');
const categoryFeedback = document.getElementById('category-feedback');
const itemFeedback = document.getElementById('item-feedback');
const priceFeedback = document.getElementById('price-feedback');

button.addEventListener('click', handleSubmit);

// business logic

const itemsList = [];

function addItem (category, name, price) {
  itemsList.push({ category, name, price });
}

function removeItem (index) {
  itemsList.splice(index, 1);
}

function formatCurrency (price) {
  return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price));
}

function calculateTotal () {
  return itemsList.reduce((a, b) => a + b.price, 0);
}

// ui event handlers

function handleSubmit (ev) {
  ev.preventDefault();
  displayFeedback();
  const newCategory = inputCategory.options[inputCategory.selectedIndex].value;
  const newName = inputName.value;
  const newPrice = Number(inputPrice.value);
  if (!validateInput(newCategory, newName, newPrice)) {
    inputCategory.value = 0;
    inputPrice.value = '';
    inputName.value = '';
    addItem(newCategory, newName, newPrice);

    updateTotal();
    addItemDisplay(newCategory, newName, newPrice);
  };
  if (validateInput()) {
    return false;
  }
}

function handleDelete (ev) {
  const buttons = document.querySelectorAll('.delete-btn');
  const buttonsArray = Array.from(buttons);
  const index = buttonsArray.findIndex(element => element === ev.currentTarget);
  removeItem(index);

  removeItemDisplay(ev);
  updateTotal();
}

// ui update dom

function addItemDisplay (newCategory, newName, newPrice) {
  const newItem = document.createElement('li');
  if (newPrice < 0) {
    newItem.setAttribute('class', 'item item-negative');
  } else {
    newItem.setAttribute('class', 'item');
  }

  newItem.innerHTML = `<button class="delete-btn">
  <i class="far fa-trash-alt"></i></button>
  <span id="category">${newCategory}</span>
  <span id="name">${newName}</span>
  <span id="price">${formatCurrency(newPrice)}</span>`;

  const deleteButton = newItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', handleDelete);
  container.appendChild(newItem);
}

function removeItemDisplay (ev) {
  ev.currentTarget.parentNode.remove();
}

function updateTotal () {
  const newTotal = calculateTotal();
  total.innerText = formatCurrency(newTotal);
  if (newTotal < 0) {
    total.setAttribute('class', 'total-amount-negative');
  } else {
    total.classList.remove('class', 'total-amount-negative');
  }
}

function validateInput (category, name, price) {
  return !category || !name || !price;
}

// is there a better efficient way to do this?
function displayFeedback () {
  if (inputCategory.value === '') {
    categoryFeedback.style.display = 'block';
  } else {
    categoryFeedback.style.display = 'none';
  }

  if (inputName.value === '') {
    itemFeedback.style.display = 'block';
  } else {
    itemFeedback.style.display = 'none';
  }
  if (inputPrice.value === '') {
    priceFeedback.style.display = 'block';
  } else {
    priceFeedback.style.display = 'none';
  }
}
