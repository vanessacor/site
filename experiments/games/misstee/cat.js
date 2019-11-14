
class Cat {
  constructor (x, y, ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = x;
    this.y = y;
    this.dy = 1;
    this.width = 40;
    this.height = 30;
    this.color = '#9e7c65';
    this.speed = 1;
  };

  draw () {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  setDirection (direction) {
    if (direction === 'up') {
      this.dy = -this.speed;
    } else if (direction === 'down') {
      this.dy = this.speed;
    } else {
      this.stop();
    }
  }

  stop () {
    this.dy = 0;
  }

  update () {
    this.draw();

    this.y += this.dy;
    if (this.y + this.height > this.canvasHeight) {
      this.y = this.canvasHeight - this.height;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }
}
