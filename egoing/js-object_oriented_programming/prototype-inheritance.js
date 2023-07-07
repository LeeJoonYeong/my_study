let superObj = { superVal: 'super' }; // 부모

// subObj의 부모를 지정하는 방법. 클래스로 치자면 extend superObj 일 듯???
// 방법 1
// let subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj; 

// 방법 2
let subObj = Object.create(superObj);
subObj.subVal = 'sub';

// ==============================
console.log('subObj.subVal: ', subObj.subVal);
console.log('subObj.superVal: ', subObj.superVal);

subObj.superVal = 'sub'; // 부모 객체에서 받은 값을 바꾸면?
console.log('superObj.superVal: ', superObj.superVal); // 부모 객체의 본래의 값은 안바뀐다.
console.log('subObj.superVal: ', subObj.superVal); // 자식 객체에서만 바뀐 값이 적용된다.
