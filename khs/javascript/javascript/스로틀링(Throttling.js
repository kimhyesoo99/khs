'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    [backBtn, fowardBtn] = main_container.getElementsByTagName('a');

let slide_idx = 0,
    isActive = true;

/* ================================================================================== */

/* 
    < 스로틀링(Throttling) >

- 연속적으로 동일 이벤트가 발생되는 상황에서 특정 시간 이전에 발생한 동일 이벤트는
  실행되지 않도록 하되, 해당 시간을 초과해야만 동일한 다음 이벤트가 실행될 수 있도록
  하는 기법.
  결과적으로 일정한 시간적인 간격을 두고 주기적으로 연쇄적인 동일 이벤트가 발생될 수
  있도록함에 유용.
*/
function activeSlide(slideMove, checkIdx, other) {
    if (isActive) {
        slide_idx += slideMove;
        slide_list.style.left = `${-slide_idx * 100}%`;

        other.classList.remove('nonVisible');
        if (checkIdx()) {
            this.classList.add('nonVisible');
        }

        isActive = false;

        setTimeout(() => isActive = true, 1000);
    }
}

fowardBtn.addEventListener('click', function () {
    activeSlide.apply(this, [1, () => slide_idx >= li.length - 1, backBtn]);
});

backBtn.addEventListener('click', function () {
    activeSlide.apply(this, [-1, () => slide_idx <= 0, fowardBtn]);
});