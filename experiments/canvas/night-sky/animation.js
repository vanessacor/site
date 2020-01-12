'use strict';

class Animation {
  constructor () {
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    this.arrayOfStars = [];
    this.arrayOfBackgroundStars = [];
    this.ticker = 0;
    this.tickerRate = 20;
  }

  removeStar (index) {
    this.arrayOfStars.splice(index, 1);
  }

  clearCanvas () {
    this.background.draw();
  }

  createStars () {
    if (this.ticker % this.tickerRate === 0) {
      const radius = Utils.randomIntFromRange(4, 8);
      const x = Math.max(radius, (Math.random() * this.canvas.width - radius));
      this.arrayOfStars.push(new Star(this.ctx, this.canvas.width, this.canvas.height, x, 0, radius, '#D3F4FF'));
      this.ticker = 0;
      this.tickerRate = Math.floor((Math.random() * 10) + 10);
    }
  }

  updateAll () {
    this.createStars();

    for (let i = this.arrayOfStars.length - 1; i >= 0; i--) {
      this.arrayOfStars[i].update();
      if (this.arrayOfStars[i].radius <= 0) {
        this.removeStar(i);
      }
    }
  }

  drawAll () {
    this.clearCanvas();

    for (let i = this.arrayOfStars.length - 1; i >= 0; i--) {
      this.arrayOfStars[i].draw();
    }
  }

  loop () {
    requestAnimationFrame(() => this.loop());
    this.ticker++;
    this.updateAll();
    this.drawAll();
  }
}
