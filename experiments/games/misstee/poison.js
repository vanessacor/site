'use strict';

class Poison {
  constructor (ctx, canvasWidth, canvasHeight, x, y, dx, status) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.status = status;
    this.height = 10;
    this.width = 10;
    this.colors = ['red', 'brown', 'green'];
    this.utils = new Utils();
    this.color = this.utils.generateColor(this.colors);
  }
  ;
  draw () {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update () {
    this.draw();
    this.x += -this.dx;
  }
}