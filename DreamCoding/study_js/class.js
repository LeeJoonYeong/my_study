'use strict';

class Person {
  // 생성자.
  constructor(name, year, age) {
    this.name = name;
    this.year = year
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw Error('나이를 제대로 입력하세요!');
    }
    this._age = value;
  }

  name2 = 'yeong';
  // 함수.
  speak() {
    console.log(`${this.name}: hello!`);
  }

}

const lee = new Person('joon', 1994 , 1);
console.log(lee.name);
console.log(lee.age);
console.log(lee._age);
