'use strict';

class Game {
  constructor (canvasWidth, canvasHeight) {
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.document = document;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.utils = new Utils();
    this.cat = new Cat(100, 100, this.ctx, this.canvasWidth, this.canvasHeight);
    this.foods = [];
    this.poisons = [];
    this.lives = 3;
    this.score = 0;
    this.ui = new MissteeUI(this.score);
    this.timer = 0;
  }

  _bindEventListeners () {
    this.document.addEventListener('keydown', (ev) => this.keyDownHandler(ev));
    this.document.addEventListener('keyup', (ev) => this.keyUpHandler(ev));
  }

  keyUpHandler (e) {
    if (e.key === 'Up' || e.key === 'ArrowUp') {
      this.cat.setDirection('up');
    }
  };

  keyDownHandler (e) {
    if (e.key === 'Down' || e.key === 'ArrowDown') {
      this.cat.setDirection('down');
    };
  }

  detectCollission () {
    for (let i = 0; i < this.foods.length; i++) {
      const food = this.foods[i];
      if (this.utils.detectCollission(this.cat, food)) {
        this.score++;
        food.status = 0;
        this.foods.splice(food, 1);
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      const poison = this.poisons[i];
      if (this.utils.detectCollission(this.cat, poison)) {
        this.lives--;
        poison.status = 0;
        this.poisons.splice(poison, 1);
      }
    }
  }

  // checkIsGameOver () {
  //   if (this.lives < 1) {
  //     alert('GAME OVER');
  //     this.document.location.reload();
  //   }
  // }

  removeElements () {
    for (let i = 0; i < this.foods.length; i++) {
      const food = this.foods[i];
      if (food.x < 0) {
        food.status = 0;
        this.foods.splice(food, 1);
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      const poison = this.poisons[i];
      if (poison.x < 0) {
        poison.status = 0;
        this.poisons.splice(poison, 1);
      }
    }
  }

  generateElements () {
    const x = 570;
    const elementHeight = 10;
    const status = 1;
    for (let i = 0; i < 2; i++) {
      const foodY = this.utils.randomIntFromRange(0, this.canvasHeight - elementHeight);
      const foodDx = this.utils.randomIntFromRange(1, 2);
      this.foods.push(new Food(this.ctx, this.canvasWidth, this.canvasHeight, x, foodY, foodDx, status));
    }

    for (let i = 0; i < 2; i++) {
      const poisonY = this.utils.randomIntFromRange(0, this.canvasHeight - elementHeight);
      const poisonDx = this.utils.randomIntFromRange(1, 2);
      this.poisons.push(new Poison(this.ctx, this.canvasWidth, this.canvasHeight, x, poisonY, poisonDx, status));
    }
  }

  drawAll () {
    for (let i = 0; i < this.foods.length; i++) {
      const food = this.foods[i];
      if (food.status === 1) {
        this.foods[i].draw();
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      this.poisons[i].draw();
    }
    this.cat.draw();
  };

  start () {
    this._bindEventListeners();
    this.drawAll();
  };

  loop () {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.timer++;
    this.removeElements();
    this.detectCollission();
    this.updateAll();
    // this.checkIsGameOver();
    this.drawAll();
  };

  updateAll () {
    if (this.timer === 200) {
      this.generateElements();
      this.timer = 0;
    }

    for (let i = 0; i < this.foods.length; i++) {
      this.foods[i].update();
    }
    for (let i = 0; i < this.poisons.length; i++) {
      this.poisons[i].update();
    }

    this.cat.update();
    this.ui.updateScore(this.score);
    // this.ui.updatelives(this.lives);
  }
}
