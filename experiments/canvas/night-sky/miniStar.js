'use strict';

class MiniStar {
  constructor (ctx, canvasWidth, canvasHeight, x, y) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    // this.utils = new Utils();
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.groundHeight = 100;
    this.color = '#d3f4ff';
    this.velocity = {
      x: Utils.randomIntFromRange(-5, 5),
      y: Utils.randomIntFromRange(-15, 15)
    };
    this.gravity = 0.1;
    this.friction = 0.8;
    this.timeToLive = 100;
    this.opacity = 1;
  }

  update () {
    // when the balls hits the bottom of the screen
    if (this.y + this.radius + this.velocity.y > this.canvasHeight - this.groundHeight) {
      this.velocity.y = -this.velocity.y * this.friction;
    } else {
      this.velocity.y += this.gravity;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.timeToLive -= 1;
    this.opacity -= 1 / this.timeToLive;
  };

  draw () {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Utils.convertDegreeToRadians(360), false);
    this.ctx.fillStyle = `rgb(211, 244, 255, ${this.opacity})`;
    this.ctx.shadowColor = this.color;
    this.ctx.shadowBlur = 20;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  };
}
