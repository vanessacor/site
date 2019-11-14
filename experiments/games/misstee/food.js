'use strict';

class Food {
  constructor (ctx, canvasWidth, canvasHeight, x, y, dx) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.active = true;
    this.width = 10;
    this.height = 10;
    this.colors = ['pink'];
    // this.colors = ['pink', '#ff8889', '#39332b'];
    this.color = Utils.generateColor(this.colors);
  };

  deactivate () {
    this.active = false;
  }

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
