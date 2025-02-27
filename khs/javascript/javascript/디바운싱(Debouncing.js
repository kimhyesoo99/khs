'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    [backBtn, fowardBtn] = main_container.getElementsByTagName('a');

let slide_idx = 0,
    stopActive;

/* ================================================================================== */

/* 
    < 디바운싱(Debouncing) >

- 연속적으로 동일 이벤트가 발생되는 상황에서 중첩된 동일 이벤트가 쌓이지 않도록
  현재 이벤트가 실행되기 이전에 먼저 직전 이벤트를 취소 시키는 행위를 반복함으로써
  최종 이벤트만 실행되도록 처리하는 기법.
  결과적으로 연쇄적인 동일 이벤트가 발생될 때, 마지막 이벤트만 처리할 때 유용.
*/
function activeSlide(slideMove, checkIdx, other) {
    clearTimeout(stopActive);

    /* 
        setTimeout 의 딜레이 지정 시간이 300 미만일 때는 clearTimeout 이 호출되어
        실행되는 시점까지의 딜레이가 발생될 수 있어, 연쇄 트리거 문제 그대로 발생
        가능.
    */
    stopActive = setTimeout(() => {
        slide_idx += slideMove;
        slide_list.style.left = `${-slide_idx * 100}%`;

        other.classList.remove('nonVisible');
        if (checkIdx()) {
            this.classList.add('nonVisible');
        }
    }, 300);
}

fowardBtn.addEventListener('click', function () {
    activeSlide.apply(this, [1, () => slide_idx >= li.length - 1, backBtn]);
});

backBtn.addEventListener('click', function () {
    activeSlide.apply(this, [-1, () => slide_idx <= 0, fowardBtn]);
});