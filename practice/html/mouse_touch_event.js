'use strict';

document.body.addEventListener('mousedown', (e) => {
  console.log('mousedown');
  console.log('x: ', e.clientX);
});

document.querySelector('.pop').addEventListener('mousemove', (e) => {
  console.log('mousemove');
});
document.body.addEventListener('mouseup', (e) => {
  e.preventDefault();
  console.log('mouseup');
});

document.body.addEventListener('touchstart', (e) => {
  console.log('touchstart');
  console.log('x: ', e.changedTouches[0].clientX);
});
document.body.addEventListener('touchmove', (e) => {
  console.log('touchmove');
});
document.body.addEventListener('touchend', (e) => {
  e.preventDefault();
  console.log('touchend');
});