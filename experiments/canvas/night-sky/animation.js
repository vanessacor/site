'use strict';

class Animation {
  constructor () {
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // this.utils = new Utils();
    this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    this.arrayOfStars = [];
    this.ticker = 0;
    this.tickerRate = 25;
  }

  removeStars (index) {
    this.arrayOfStars.splice(index);
  }

  clearCanvas () {
    this.background.draw();
  }

  drawAll () {
    const radius = Utils.randomIntFromRange(3, 5);
    const x = Math.max(radius, (Math.random() * this.canvas.width - radius));
    for (let i = 0; i < 1; i++) {
      this.arrayOfStars.push(new Star(this.ctx, this.canvas.width, this.canvas.height, x, -100, radius, '#D3F4FF'));
    }

    if (this.ticker % this.tickerRate === 0) {
      this.arrayOfStars.push(new Star(this.ctx, this.canvas.width, this.canvas.height, x, -100, radius, '#D3F4FF'));
      this.tickerRate = Utils.randomIntFromRange(25, 75);
    }
  }

  updateAll () {
    for (let i = 0; i < this.arrayOfStars.length; i++) {
      this.arrayOfStars[i].update();
      if (this.arrayOfStars[i].radius <= 0) {
        this.removeStars(i);
      }
    }
  }

  loop () {
    requestAnimationFrame(() => this.loop());
    this.clearCanvas();
    this.ticker++;
    this.updateAll();
    this.drawAll();
  }
}
