'use strict';

class Star {
  constructor (ctx, canvasWidth, canvasHeight, x, y, radius, color) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.groundHeight = 100;
    this.arrayOfMiniStars = [];
    this.Xvelocity = Utils.randomIntFromRange(-4, 4);
    this.Yvelocity = 3;
    this.gravity = 1;
    this.friction = 0.8;
  }

  removeMiniStars (index) {
    this.arrayOfMiniStars.splice(index);
  }

  draw () {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Utils.convertDegreeToRadians(360), false);
    this.ctx.fillStyle = this.color;
    this.ctx.shadowColor = this.color;
    this.ctx.shadowBlur = 20;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  };

  update () {
    this.draw();

    if (this.y + this.radius + this.Yvelocity > this.canvasHeight - this.groundHeight) {
      this.Yvelocity = -this.Yvelocity * this.friction;
      this.shatter();
    } else {
      this.Yvelocity += this.gravity;
    }

    if (this.x + this.radius + this.Xvelocity > this.canvasWidth || this.x + this.radius <= 0) {
      this.Xvelocity = -this.Xvelocity;
    }
    this.x += this.Xvelocity;
    this.y += this.Yvelocity;

    for (let i = 0; i < this.arrayOfMiniStars.length; i++) {
      const miniStar = this.arrayOfMiniStars[i];
      miniStar.update();
      if (miniStar.timeToLive <= 2) {
        this.removeMiniStars(i);
      }
    }
  };

  shatter () {
    this.radius -= 3;
    for (let i = 0; i < 8; i++) {
      this.arrayOfMiniStars.push(new MiniStar(this.ctx, this.canvasWidth, this.canvasHeight, this.x, this.y));
    }
  };
}
