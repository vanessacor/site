
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
      this.y -= this.dy;
    } if (direction === 'down') {
      this.y += this.dy;
    } else (this.stop());
  }

  stop () {
    this.y = this.y;
  }

  update () {
    this.draw();
    if (this.y + this.height > this.canvasHeight) {
      this.y = this.canvasHeight - this.height;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }
}
