'use strict';
class Utils {
  static generateColor (colors) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

  static randomIntFromRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static distance (x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }

  static convertDegreeToRadians (degree) {
    const radian = (Math.PI / 180) * degree;
    return radian.toFixed(3);
  }
}
