'use strict';

// async % await

// 1. async
async function fetchUser() {
  return 'lee';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Useful APIs.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));

}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);