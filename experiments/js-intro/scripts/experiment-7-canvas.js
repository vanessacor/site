'use strict';

const canvasElement = document.querySelector('#canvas canvas');
const ctx = canvasElement.getContext('2d');

function randomInteger (max, offset = 0) {
  return Math.round(Math.random() * max) + offset;
}

function randomHSLColor () {
  const h = randomInteger(255);
  const s = 75;
  const l = randomInteger(50, 20);
  return { h, s, l };
}

function lighterColor (original) {
  return {
    h: original.h,
    s: original.s,
    l: original.l + 20
  };
}
function darkerColor (original) {
  return {
    h: original.h,
    s: original.s,
    l: original.l - 20
  };
}

const objects = [];
for (let ix = 0; ix < 100; ix++) {
  const object = {
    x: randomInteger(100, 140),
    y: randomInteger(100, 140),
    radius: randomInteger(20, 20),
    hsl: randomHSLColor()
  };
  objects.push(object);
}

const canvasWidth = 280;
const canvasHeight = 280;

function drawCircle (x, y, radius, hsl) {
  const color = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  const center = {
    x: x - radius / 2,
    y: y - radius / 2
  };
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawObject (object) {
  const rand1 = randomInteger(20, -10);
  const rand2 = randomInteger(20, -10);
  const lighter = lighterColor(object.hsl);
  const darker = darkerColor(object.hsl);
  drawCircle(object.x + rand1, object.y + rand1, 25, lighter);
  drawCircle(object.x - rand2, object.y + rand2, 25, darker);
  drawCircle(object.x, object.y, object.radius, object.hsl);
}

function updateObjectPosition (object) {
  const rand1 = Math.random() * 10 - 5;
  const rand2 = Math.random() * 10 - 5;
  object.x = object.x + rand1;
  object.y = object.y + rand2;
}

function drawAllObjects () {
  objects.forEach(function (object) {
    updateObjectPosition(object);
    drawObject(object);
  });
}

function updateScreen () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawAllObjects();
  window.requestAnimationFrame(updateScreen);
}

window.requestAnimationFrame(updateScreen);
