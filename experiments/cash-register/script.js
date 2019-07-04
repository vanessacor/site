'use strict'

const button = document.getElementById('entry');
const inputPrice = document.getElementById('item-price');
const inputName = document.getElementById('item-name');
const total = document.getElementById('total-amount');
const container = document.querySelector('.item-wraper');
const itemFeedback = document.getElementById('item-feedback');
const priceFeedback = document.getElementById('price-feedback');

button.addEventListener('click', handleSubmit);


// business logic

const itemsList = [];

function addItem(name, newValue) {
  itemsList.push({name, newValue});
}

function removeItem (index) {
  itemsList.splice(index, 1);
}

function formatCurrency (value) {
  return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value));
}

function calculateTotal () {
  return itemsList.reduce((a, b) => a + b.newValue, 0);
}

// ui event handlers

function handleSubmit (ev) {
  ev.preventDefault();
  displayFeedback();
  if (!validateInput()) {
    const newName = inputName.value;
    const newValue = Number(inputPrice.value);
    inputPrice.value = '';
    inputName.value = '';
    addItem(newName, newValue);
    
    updateTotal();
    addItemDisplay(newName, newValue);
  };
  if(validateInput()) {
    return false;
  }
}

function handleDelete (ev) {
  const buttons = document.querySelectorAll('.delete-btn');
  const buttonsArray = Array.from(buttons);
  const index = buttonsArray.findIndex(element => element === ev.currentTarget);
  removeItem(index) 

  removeItemDisplay(ev);
  updateTotal();
}

// ui update dom

function addItemDisplay(newName, newValue) {
  const newItem = document.createElement('li');
  if (newValue < 0) {
    newItem.setAttribute('class', 'item item-negative')
  } else {
    newItem.setAttribute('class', 'item');
  }
  
  newItem.innerHTML = `<button class="delete-btn">
  <i class="far fa-trash-alt"></i></button>
  <span id="name">${newName}</span>
  <span id="price">${formatCurrency(newValue)}</span>`;
  
  const deleteButton = newItem.querySelector('.delete-btn');
  deleteButton.addEventListener ('click', handleDelete)  
  container.appendChild(newItem);
}


function removeItemDisplay(ev) {
  ev.currentTarget.parentNode.remove();
}

function updateTotal () {
  const newTotal = calculateTotal();
  total.innerText = formatCurrency(newTotal);
  if (newTotal < 0) {
    total.setAttribute('class', 'total-amount-negative')
  }
  else {
    total.classList.remove('class', 'total-amount-negative')
  }
}


function validateInput() {
   return inputName.value === '' || inputPrice.value === ''
}


//is there a better efficient way to do this?
function displayFeedback () {
  if (inputName.value == '') {
    itemFeedback.style.display = 'block';
  }     
  else {
    itemFeedback.style.display = 'none';
  }
  if (inputPrice.value == '') {
    priceFeedback.style.display = 'block';
  } 
  else {
    priceFeedback.style.display = 'none';
  }
}
