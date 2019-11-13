'use strict';
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
const maxRadius = 40;

const mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove',
  function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

function convertDegreeToRadians (degree) {
  const radian = (Math.PI / 180) * degree;
  return radian.toFixed(3);
}

function generateColor () {
  const colors = ['#F2D22E', '#F29F05', '#D96704', '#8C3503'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function Circle (x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = generateColor();

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, convertDegreeToRadians(360), false);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.closePath();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if ((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50 && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

function Line (x, y) {
  this.x = x;
  this.y = y;

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, 0);
    ctx.shadowColor = '#b2fcff';
    ctx.shadowBlur = 20;
    ctx.strokeStyle = '#04ADBF';
    ctx.stroke();
  };
}

const arrayOfCircles = [];

const arrayOfLines = [];

for (let i = 0; i < 800; i++) {
  const radius = Math.random() * 2 + 1;
  // adding the last part is to make sure the ball bounce from the outline
  const x = Math.random() * (innerWidth - radius * 2) + radius;
  const y = Math.random() * (innerHeight - radius * 2) + radius;
  const dx = (Math.random() - 0.5);
  const dy = (Math.random() - 0.5);
  arrayOfCircles.push(new Circle(x, y, dx, dy, radius));
}

for (let i = 0; i < 100; i++) {
  const LineX = Math.random() * window.innerWidth;
  const LineY = Math.random() * window.innerHeight;
  arrayOfLines.push(new Line(LineX, LineY));
}

function draw () {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i].draw();
  }

  for (let i = 0; i < arrayOfCircles.length; i++) {
    arrayOfCircles[i].update();
  }
}

draw();
