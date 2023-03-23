'use strict';

let arr1 = [1, 2, 4, 6];

// for
for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// for of
for(let value of arr1) {
  console.log(value);
}

// forEach
arr1.forEach(function(value, index) {
  console.log(value);
  console.log(index);
});

console.clear();

// splice
arr1.splice(1, 1, 'a', 'n');
console.log(arr1);

// combine
let arr2 = ['new', 'arr2'];
let newArr = arr1.concat(arr2);
console.log(newArr);

// searching
console.log(newArr.indexOf('new'));
console.log(newArr.includes('arr2'));

// lastIndexOf
newArr.push(1);
console.log(newArr);
console.log(newArr.indexOf(1));
console.log(newArr.lastIndexOf(1));

// changing array item to string.
console.log(newArr.toString());

// sort.
console.clear();
let arr3 = [1, 2, 6, 4, 3];
console.log(arr3);

// increase sort
arr3.sort();
console.log(arr3);

// decrease sort
arr3.sort((a, b) => b - a);
console.log(arr3);

// dream coding homework.
console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

let enrolled_Students = [];
let scores = [];
let average = 0;
students.forEach(element => {
  //console.log(element);
  if(element.score === 90) {
    console.log(`90점인 학생의 이름른: ${element.name}`);
  }

  if(element.enrolled) {
    enrolled_Students.push(element);
  }
  
  scores.push(element.score);

  if(element.score < 50) {
    console.log(`50점 미만인 학생의 이름은: ${element.name}`);
  }

  average += element.score;
});

average /= students.length;

console.log('==== 등록된 학생 리스트 ====');
console.log(enrolled_Students);
console.log('==== 학생들의 점수판 ====');
console.log(scores);
console.log('==== 학생들의 점수 평균 ====');
console.log(average);

let scores_string = scores.join(', ');
console.log(scores_string);

let scores_increase_sort = [].concat(scores).sort().join(', ');
console.log(scores_increase_sort);









