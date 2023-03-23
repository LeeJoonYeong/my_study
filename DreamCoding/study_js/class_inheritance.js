'use strict';

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 클래스 상속.
class Rectangle extends Shape {

}

class Triangle extends Shape {

  // 오버라이딩.
  draw() {
    // 부모 호출.
    super.draw();
    console.log(`삼각형!`);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rect = new Rectangle(20, 20, 'red');
const triangle = new Triangle(20, 20, 'blue');

console.log(rect.getArea());
rect.draw();
console.log(triangle.getArea());
triangle.draw();

console.log(rect instanceof Shape);