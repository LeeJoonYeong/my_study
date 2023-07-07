function Person(name, first, second, third) {
  
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;

}

Person.prototype.sum = function() { // 프로토타입으로 함수 객체를 생성할 수 있다.
  return 'prototype: ' + (this.first + this.second);
} // 장점 : 함수에서 정의를 하면 객체 생성마다 같은 함수를 계속 생성하기 때문에 메모리 문제가 생김을 방지.

const kim = new Person('kim', 10, 20);
kim.sum = function() { // 객체의 함수 개별 변경 가능.
  return 'this : ' + (this.first + this.second);
}

const lee = new Person('lee', 10, 10);

console.log('kim.sum()', kim.sum());
console.log('kim.sum()', lee.sum());