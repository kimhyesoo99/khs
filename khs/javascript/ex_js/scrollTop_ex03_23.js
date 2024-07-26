'use strict';

const scrollTop = document.querySelector('.scrollTop');

let stop;

document.addEventListener('scroll', () => {

    /* 
        하기 setTimeout 시간 지정으로 무조건 2초 뒤에 실행되는
        문제점으로 인해 버튼 부분에 호버한 상테에서 스크롤을
        내리면 지연 실행으로 인해 버튼이 사라지는 문제점 발생.
        따라서 아래와 같이 예약 실행을 항상 멈춰야 문제 해결.
    */
    clearTimeout(stop);

    if (window.scrollY > window.innerHeight / 3) {
        scrollTop.classList.add('visible');
        scrollTop.classList.add('opacity');
    } else {
        scrollTop.classList.remove('opacity');

        stop = setTimeout(
            () => scrollTop.classList.remove('visible'), 2000
        );
    }
});

scrollTop.addEventListener('click', () => {
    const stopScroll = setInterval(() => {
        window.scrollBy(0, -5)

        if (window.scrollY <= 0) clearInterval(stopScroll);
    }, 5);
});