console.log(this); // {} 빈 객체

function a() {
  console.log(this); // global
}

a();