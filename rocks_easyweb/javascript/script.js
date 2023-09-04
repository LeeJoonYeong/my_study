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

// PC & 모바일 구분하기.
// 1. DPR (비율)로 구별하기 (이 방법은 브라우저 확대 했을 때 문제가 있음.)
const device_ratio = window.devicePixelRatio;

if(device_ratio >= 2) { // 모바일
	console.log('이 메세지가 나타난다면 모바일로 접속한 것입니다.');
} else { // PC
	console.log('이 메세지가 나타난다면 PC로 접속한 것입니다.');
}


// css root 값 조정
const $test_box = document.querySelector('.test_box');
$test_box.addEventListener('click', () => {
	
	console.log('테스트 상자 배경색 변경');
	document.documentElement.style.setProperty('--test-color', 'red'); // css :root 스타일 값 변경.

});