'use strict';

class Game {
  constructor (canvasWidth, canvasHeight, state, soundState) {
    this.canvas = document.getElementById('my-canvas');
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.ctx = this.canvas.getContext('2d');
    this.document = document;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.cat = new Cat(100, 100, this.ctx, this.canvasWidth, this.canvasHeight);
    this.foods = [];
    this.poisons = [];
    this.lives = 3;
    this.score = 0;
    this.ui = new GameUI(this.score);
    this.timer = 0;
    this.state = state;
    this.soundState = soundState;
    this.catEatsound = document.getElementById('cat-eat');
    this.catMeowSound = document.getElementById('cat-meow');
    this.onGameOver = this.gameOverCallBack();
  }

  _bindEventListeners () {
    this.document.addEventListener('touchstart', (ev) => this.cat.setDirection('up'));
    this.document.addEventListener('touchend', (ev) => this.cat.setDirection('down'));
    this.document.addEventListener('keydown', (ev) => this.keyDownHandler(ev));
    this.document.addEventListener('keydown', (ev) => this.keyUpHandler(ev));
    this.document.addEventListener('mousedown', (ev) => this.cat.setDirection('up'));
    this.document.addEventListener('mouseup', (ev) => this.cat.setDirection('down'));
  }

  gameOverCallBack (onGameOver) {
    this.onGameOver = () => {
      onGameOver();
    };
  };

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
        this.catEatsound.play();
        this.score++;
        food.deactivate();
        this.ui.updateScore(this.score);
      }
    }
    for (let i = 0; i < this.poisons.length; i++) {
      const poison = this.poisons[i];
      if (Utils.detectCollission(this.cat, poison)) {
        this.catMeowSound.play();
        this.lives--;
        poison.deactivate();
        this.ui.removeHeart();
      }
    }
  }

  isGameOver () {
    if (this.lives === 0) {
      this.state = 'off';
      this.onGameOver();
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

  ismusicOn () {
    const music = document.getElementById('game-music');
    if (this.soundState === 'on') {
      music.play();
    }
  }

  generateElements () {
    const x = this.canvasWidth;
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
    this.ismusicOn();
    this.loop();
    this._bindEventListeners();
  };

  loop () {
    if (this.state === 'off') {
      return;
    }
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
