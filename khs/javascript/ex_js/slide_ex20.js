'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    liLength = slide_list.getElementsByTagName('li').length,
    btn = main_container.getElementsByTagName('a');

let slide_idx = 0;                      // 현재 슬라이드 인덱스.

/* ================================================================================== */

// btn[1].addEventListener('click', function () {
//     slide_idx++;
//     slide_list.style.left = `${-slide_idx * 100}%`;

//     /*
//         foward 버튼을 클릭했을 때 현재 슬라이드 인덱스가 인덱스 종료값일 때는
//         foward 버튼이 보이지 않아야 하는 특성과 back 버튼은 무조건 나타나야
//         하는 특성 활용.
//     */
//     btn[0].classList.remove('nonVisible');
//     if (slide_idx >= liLength - 1) {
//         this.classList.add('nonVisible');
//     }
// });

// btn[0].addEventListener('click', function () {
//     slide_idx--;
//     slide_list.style.left = `${-slide_idx * 100}%`;

//     btn[1].classList.remove('nonVisible');
//     if (slide_idx <= 0) {
//         this.classList.add('nonVisible');
//     }
// });

/* ================================================================================== */
// 함수를 활용한 코드 통합.

/*
    slideMove : 버튼에 따른 인덱스증감. ( back : -1,  foward : 1 )
    checkIdx : 버튼에 따른 종료시점 평가식.
    self : 클릭한 버튼.
    other : 클릭하지 않은 버튼.
*/
// function activeSlide(slideMove, checkIdx, self, other) {
//     slide_idx += slideMove;
//     slide_list.style.left = `${-slide_idx * 100}%`;

//     other.classList.remove('nonVisible');
//     if (checkIdx()) {
//         self.classList.add('nonVisible');  // self 대신에 this 를 직접 쓰면 function 함수
//     }                                      // 내 function 함수 안에서의 this 가 되어
//     //                                     // undefined 가 반환됨에 주의.
//     //                                     // 따라서 아래와 같이 activeSlide 함수 호출시
//     //                                     // 직접 this 를 전달하는 방법을 적용.
// }

// btn[1].addEventListener('click', function () {
//     activeSlide(1, () => slide_idx >= liLength - 1, this, btn[0]);
// });

// btn[0].addEventListener('click', function () {
//     activeSlide(-1, () => slide_idx <= 0, this, btn[1]);
// });

/* ================================================================================== */
// 이벤트 위임.

// main_container.addEventListener('click', e => {
//     let checkIdx,
//         other;

//     const targetBtn = e.target.closest('a');

//     switch (targetBtn) {
//         case btn[0]:
//             slide_idx--;
//             checkIdx = () => slide_idx <= 0;
//             other = btn[1];
//             break;
//         case btn[1]:
//             slide_idx++;
//             checkIdx = () => slide_idx >= liLength - 1;
//             other = btn[0];
//             break;
//         default:
//             return;    // 버튼이 아닌 요소가 클릭되었을 때 아래 로직의 처리로 예외적인
//             //         // 실행 문제가 발생될 수 있으므로 해당 로직을 막기 위한 return 처리.
//     }

//     slide_list.style.left = `${-slide_idx * 100}%`;

//     other.classList.remove('nonVisible');
//     if (checkIdx()) {
//         targetBtn.classList.add('nonVisible');
//     }
// });