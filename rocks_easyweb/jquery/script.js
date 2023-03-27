'use strict';
$( document ).ready(function() {

	$( window ).resize(function() { // 뷰포트 조정시 발동 이벤트

		console.log('창 크기 조절 중');

	});

	$('.switch1').click((e) => {

		// console.log('switch1 click!!');
		// console.log(e.target);

		// #. target element 슬라이드 토글 함수 
		$('#box1').slideToggle();

	});

});