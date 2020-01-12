'use strict';

class BackgroundStar {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.y = Math.random() * this.canvasHeight;
    this.x = Math.random() * this.canvasWidth;
    this.radius = Math.random() * 2;
  }

  draw () {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    this.ctx.shadowColor = '#E3EAEF';
    this.ctx.shadowBlur = (Math.random() * 10) + 10;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;

    this.ctx.fillStyle = 'white';
    this.ctx.fill();

    this.ctx.closePath();
    this.ctx.restore();
  }
}
