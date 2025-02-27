'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    [backBtn, fowardBtn] = main_container.getElementsByTagName('a');

let slide_idx = 0;

/* ================================================================================== */

function activeSlide(slideMove, checkIdx, other) {
    slide_idx += slideMove;
    slide_list.style.left = `${-slide_idx * 100}%`;

    other.classList.remove('nonVisible');
    if (checkIdx()) {
        this.classList.add('nonVisible');
    }
}

function throttle() {
    let isActive = true;
    const data = arguments;

    return function () {
        if (isActive) {
            isActive = false;

            activeSlide.apply(this, data);
            setTimeout(() => isActive = true, 1000);
        }
    };
}

const clickFowardselfself = throttle(1, () => slide_idx >= li.length - 1, backBtn);
const clickBackselfself = throttle(-1, () => slide_idx <= 0, fowardBtn);

fowardBtn.addEventListener('click', clickFowardselfself);
backBtn.addEventListener('click', clickBackselfself);