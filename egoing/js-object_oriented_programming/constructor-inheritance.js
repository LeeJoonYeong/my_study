function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second);
  this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype; // 부모와 상속 관계 맺기. 방법 1 (비추천)
PersonPlus.prototype = Object.create(Person.prototype); // 부모와 상속 관계 맺기. 방법 2 (추천)
PersonPlus.prototype.constructor = PersonPlus; // constructor는 본인함수를 대입.

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
}

let kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
console.log('kim.constructor', kim.constructor);

// 결론은 이런 방법으로는 너무나도 복잡하기 때문에 Class를 사용하는게 더 가독성과 복잡성을 고려했을 때 좋다.
// 다른 한 편으로는 이 관계성을 이해한다면 자바스크립트의 개념들을 잘 공부하는데에 도움이 된다.