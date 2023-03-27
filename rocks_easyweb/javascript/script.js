'use strict';

// 키보드의 각 키를 눌렀을 때 이벤트
window.addEventListener('keydown', (e) => {

	console.log(e.key+" 키 누름");

});


document.querySelector('#switch1').addEventListener('click', () => {

	// 스크롤 부드럽게 이동 시키기
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});

});
