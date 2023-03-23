'use strict';

// Object to JSON.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['a', 'b']);
console.log(json);

let rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);


console.clear();
json = JSON.stringify(rabbit, (key, value) => {
  console.log(value);
  return key === 'name' ? 'lee' : value;
});
console.log(json);

//JSON to Object.
console.clear();

json = JSON.stringify(rabbit);
let obj = JSON.parse(json, (key, value) => {
  console.log(value);
  return key === 'birthDate'? new Date(value) : value;
});

console.log(obj.birthDate.getSeconds());