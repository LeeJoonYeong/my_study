class Person {

  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }

}

class PersonPlus extends Person {

  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  } 

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second + this.third) / 3;
  }

}

const me = new PersonPlus('lee', 10, 20, 30);
const you = new PersonPlus('kim', 40, 50, 60);

console.log('이름:', me.name, '점수:', me.sum(), '평균:', me.avg());
console.log('이름:', you.name, '점수:', you.sum(), '평균:', you.avg());