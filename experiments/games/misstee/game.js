'use strict';

class Game {
  constructor (canvasWidth, canvasHeight, state) {
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.document = document;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.cat = new Cat(100, 100, this.ctx, this.canvasWidth, this.canvasHeight);
    this.foods = [];
    this.poisons = [];
    this.lives = 3;
    this.score = 0;
    this.ui = new MissteeUI(this.score);
    this.timer = 0;
    this.state = state;
  }

  _bindEventListeners () {
    this.document.addEventListener('keydown', (ev) => this.keyDownHandler(ev));
    this.document.addEventListener('keydown', (ev) => this.keyUpHandler(ev));
    this.document.addEventListener('mousedown', (ev) => this.cat.setDirection('up'));
    this.document.addEventListener('mouseup', (ev) => this.cat.setDirection('down'));
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

  purgeItems () {
    for (let i = this.foods.length - 1; i > 0; i--) {
      const food = this.foods[i];
      if (!food.active) {
        this.foods.splice(i, 1);
      }
    }
    for (let i = this.poisons.length - 1; i > 0; i--) {
      const poison = this.poisons[i];
      if (!poison.active) {
        this.poisons.splice(i, 1);
      }
    }
  }

  detectCollission () {
    for (let i = 0; i < this.foods.length; i++) {
      const food = this.foods[i];
      if (Utils.detectCollission(this.cat, food)) {
        this.score++;
        food.deactivate();
        this.ui.updateScore(this.score);
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      const poison = this.poisons[i];
      if (Utils.detectCollission(this.cat, poison)) {
        this.lives--;
        poison.deactivate();
        this.ui.removeHeart();
      }
    }
  }

  isGameOver () {
    if (this.lives === 0) {
      this.state = 'off';
    }
  }

  deactivateElements () {
    for (let i = this.foods.length - 1; i > 0; i--) {
      const food = this.foods[i];
      if (food.x < 0) {
        food.deactivate();
      }
    }
    for (let i = this.poisons.length - 1; i > 0; i--) {
      const poison = this.poisons[i];
      if (poison.x < 0) {
        poison.deactivate(); ;
      }
    }
  }

  generateElements () {
    const x = 570;
    const elementHeight = 10;
    this.generateFoods(elementHeight, x);
    this.generatePoisons(elementHeight, x);
  }

  generatePoisons (elementHeight, x) {
    for (let i = 0; i < 3; i++) {
      const poisonY = Utils.randomIntFromRange(0, this.canvasHeight - elementHeight);
      const poisonDx = Utils.randomIntFromRange(1, 2);
      this.poisons.push(new Poison(this.ctx, this.canvasWidth, this.canvasHeight, x, poisonY, poisonDx));
    }
  }

  generateFoods (elementHeight, x) {
    for (let i = 0; i < 2; i++) {
      const foodY = Utils.randomIntFromRange(0, this.canvasHeight - elementHeight);
      const foodDx = Utils.randomIntFromRange(1, 2);
      this.foods.push(new Food(this.ctx, this.canvasWidth, this.canvasHeight, x, foodY, foodDx));
    }
  }

  drawAll () {
    for (let i = 0; i < this.foods.length; i++) {
      const food = this.foods[i];
      if (food.active) {
        this.foods[i].draw();
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      const poison = this.poisons[i];
      if (poison.active) {
        poison.draw();
      }
    }
    this.cat.draw();
  };

  start () {
    this.generateElements();
    this.loop();
    this._bindEventListeners();
  };

  loop () {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.timer++;
    this.purgeItems();
    this.deactivateElements();
    this.detectCollission();
    this.generateMoreElements();
    this.updateAll();
    this.isGameOver();
    this.drawAll();
  };

  generateMoreElements () {
    if (this.timer === 200) {
      this.generateElements();
      this.timer = 0;
    }
  }

  updateAll () {
    for (let i = 0; i < this.foods.length; i++) {
      this.foods[i].update();
    }
    for (let i = 0; i < this.poisons.length; i++) {
      this.poisons[i].update();
    }

    this.cat.update();
  }
}
