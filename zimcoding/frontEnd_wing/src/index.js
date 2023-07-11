'use strict';
import a_number from './webpack_a.js';
import b_number from './webpack_b.js';
import c_number from './webpack_c.js';

const $buttonA = document.querySelector('#button-a');
const $buttonB = document.querySelector('#button-b');
const $buttonC = document.querySelector('#button-c');
const $display = document.querySelector('#display');

$buttonA.addEventListener('click', () => {
  $display.textContent = a_number;
});

$buttonB.addEventListener('click', () => {
  $display.textContent = b_number;
});

$buttonC.addEventListener('click', () => {
  $display.textContent = c_number;
});