'use strict';

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Cat {
  constructor (height, width, color) {
    this.x = canvas.width - 520;
    this.y = canvas.height / 2;
    this.height = height;
    this.width = width;
    this.color = color;
  };
}

class Food {
  constructor (height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = generateFoodColor();
  };
}

class Poison {
  constructor (x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  };
}

function drawCat (cat) {
  ctx.beginPath();
  ctx.rect(cat.x, cat.y, cat.width, cat.height);
  ctx.fillStyle = cat.color;
  ctx.fill();
  ctx.closePath();
}

function drawFood (food) {
  ctx.beginPath();
  ctx.rect(food.x, food.y, food.width, food.height);
  ctx.fillStyle = food.color;
  ctx.fill();
  ctx.closePath();
}

function generateFoodColor () {
  const colors = ['pink', '#ff8889', '#39332b'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function draw () {
  const cat = new Cat(40, 40, '#9e7c65');
  drawCat(cat);

  requestAnimationFrame(draw);
}

draw();
