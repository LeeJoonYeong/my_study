'use strict';

// 다시 해보자..!

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let result = fruits.join(', ');
  console.log(fruits);
  console.log(result);
  // 원본이랑 connecting?? => NO!
  result = null;
  console.log(result);
  console.log(fruits);
  console.clear();
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let result = fruits.split(',', 4);
  console.log(fruits);
  console.log(result);
  // 원본이랑 connecting?? => NO!
  result.pop();
  console.log(fruits);
  console.log(result);
  console.clear();
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  let result = array.reverse();
  console.log(result);
  // 원본이랑 connecting?? => YES!
  result.pop();
  console.log(array);
  console.log(result);
  console.clear();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let result = array.slice(2, 5);
  // 원본이랑 connecting?? => No! (# splice는 원본을 바꿈!).
  console.log(result);
  console.log(array);
  console.clear();
}

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

// Q5. find a student with the score 90
{
  let result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
  console.clear();
}

// Q6. make an array of enrolled students
{
  let result = students.filter(student => student.enrolled);
  console.log(result);
  console.clear();
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let result = students.map(student => student.score);
  console.log(result);
  console.clear();

}

// Q8. check if there is a student with the score lower than 50
{
  let result = students.some(student => student.score < 50);
  console.log(result);
  console.clear();
}

// Q9. compute students' average score
{
  let result = students.reduce((prev, curr) => prev + curr.score, 0) / students.length;
  console.log(result);
  console.clear();
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let result = students
  .map(student => student.score)
  .join(', ');
  console.log(result);
  console.clear();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let result = students
  .map(student => student.score)
  .sort()
  .join(', ');
  console.log(result);
}