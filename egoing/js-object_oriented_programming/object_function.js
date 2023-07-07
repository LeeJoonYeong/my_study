let kim = { name: 'kim', first: 10, second: 20 };
let lee = { name: 'lee', first: 30, second: 20 };

function sum(prefix) {
  return prefix + (this.first + this.second);
}

// func.call 함수로 this를 결정시킨다.
console.log('func call kim ', sum.call(kim, '=> '));
console.log('func call lee ', sum.call(lee, '-> '));

// func.bind 함수로 새로운 함수를 만듦.
let kimSum = sum.bind(kim, '==> ');
console.log('bind kim', kimSum());