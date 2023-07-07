function Person() {
  this.name = 'lee';
  this.first = 10;
  this.second = 20;
  this.third = 30;
  this.sum = function() {
    return this.first + this.second + this.third;
  }
}

console.log('Person(): ', Person()); // undefined
console.log('new Person(): ', new Person()); // 함수를 new로 생성하면 객체가 되네...? 이것을 construct function 이라고 한다..?