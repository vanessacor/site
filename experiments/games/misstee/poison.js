'use strict';

class Poison {
  constructor (ctx, canvasWidth, canvasHeight, x, y, dx) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.active = true;
    this.height = 10;
    this.width = 10;
    this.colors = ['red', 'brown', 'green'];
    this.color = 'black';// Utils.generateColor(this.colors);
    this.image = document.getElementById('poison');
  }

  deactivate () {
    this.active = false;
  }

  draw () {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  update () {
    this.draw();
    this.x += -this.dx;
  }
}
