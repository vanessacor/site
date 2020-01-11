'use strict';
class Background {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.radius = Math.random() * 3;
    this.arrayOfBackgroundStars = [];
    this.groundHeight = 100;
  }

  createBackgroundGradiente () {
    const backgroundGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasHeight);
    backgroundGradient.addColorStop(0, '#270f36');
    backgroundGradient.addColorStop(0.20, '#642b6b');
    backgroundGradient.addColorStop(0.40, '#c86b98');
    backgroundGradient.addColorStop(0.60, '#f09f9c');
    backgroundGradient.addColorStop(0.80, '#ffc19f');
    backgroundGradient.addColorStop(1, '#fd9d7f');
    return backgroundGradient;
  }

  createMountainRange (mountAmount, height, color) {
    for (let i = 0; i < mountAmount; i++) {
      const mountWidth = this.canvasWidth / mountAmount;
      this.ctx.beginPath();
      this.ctx.moveTo(i * mountWidth, this.canvasHeight);
      this.ctx.lineTo(i * mountWidth + mountWidth + 325, this.canvasHeight);
      this.ctx.lineTo(i * mountWidth + mountWidth / 2, this.canvasHeight - height);
      this.ctx.lineTo(i * mountWidth - 325, this.canvasHeight);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  draw () {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.arrayOfBackgroundStars = [];
    this.ctx.fillStyle = this.createBackgroundGradiente();
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * this.canvasWidth;
      const y = Math.random() * this.canvasHeight;
      const radius = Math.random() * 3;
      this.arrayOfBackgroundStars.push(new Star(this.ctx, this.canvasWidth, this.canvasHeight, x, y, radius, 'white'));
    }
    this.arrayOfBackgroundStars.forEach((backgroundStar) => {
      backgroundStar.draw();
    });

    this.createMountainRange(2, this.canvasHeight - 250, '#5C7BA4');
    this.createMountainRange(3, this.canvasHeight - 350, '#304A69');
    this.createMountainRange(5, this.canvasHeight - 450, '#203954');
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, this.canvasHeight - this.groundHeight, this.canvasWidth, this.groundHeight);
  }
}
