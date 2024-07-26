
// function toggleImg1() {
//     let img = document.getElementsByTagName("img")
//     img[0].src = "../image/bg1.jpg"
// }

// function toggleImg2() {
//     let img = document.getElementsByTagName("img")
//     img[0].src = "../image/bg2.jpg"
// }

// function toggleImg3() {
//     let img = document.getElementsByTagName("img")
//     img[0].src = "../image/bg3.jpg"
// }

// function toggleImg4() {
//     let img = document.getElementsByTagName("img")
//     img[0].src = "../image/bg4.jpg"
// }

// function toggleImg5() {
//     let img = document.getElementsByTagName("img")
//     img[0].src = "../image/bg5.jpg"
// }


'use strict';

let bgimg;
let nationBox;
let beforeclick;

bgimg = document.getElementsByTagName('img');
nationBox = document.getElementsByClassName('nationBox');
beforeclick = nationBox[0];

function transform(self) {
    console.log(self);
    self.style.opacity = 1;
    beforeclick.style.opacity = 0.5;
    beforeclick = self;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        transform(this);
        bgimg[0].src = `..//image/bg${i + 1}.jpg`;
    });
}



// 'use strict';

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');

let beforeNation = nationBox[0];

function changeImg_nation() {
    img.setAttribute('src', `./image/bg${this.textContent}.jpg`);
    // img.src = `./image/bg${this.textContent}.jpg`;

    beforeNation.style.opacity = '.5';
    this.style.opacity = '1';
    beforeNation = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeImg_nation);
}




const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');

let beforeNation = nationBox[0]; 	// beforeNation : 현재 내이션을 선택했을 때 직전 내이션에 대한
//                         			//                opacity 를 조정하기 위한 변수 선언.

function changeImg_nation(nation) {         // 이미지와 내이션을 조정하기 위한 함수.
    let nationNum = nation.textContent;

    switch (+nationNum) {                   // case 문의 숫자와 비교 편의를 위해 숫자타입으로 변경.
        case 1:
            img.src = './image/bg1.jpg';
            break;
        case 2:
            img.src = './image/bg2.jpg';
            break;
        case 3:
            img.src = './image/bg3.jpg';
            break;
        case 4:
            img.src = './image/bg4.jpg';
            break;
        case 5:
            img.src = './image/bg5.jpg';
            break;
    }

    beforeNation.style.opacity = '.5';  // 직전 내이션의 투명도를 조정후 현재 내이션의 투명도를
    nation.style.opacity = '1';         // 조정. 동일한 내이션을 재선택하는 경우 31행과 32행의
    //                                  // 순서가 바뀌면 현재 재선택한 내이션의 투명도를 낮추는
    //                                  // 예외 상황이 발생할 수 있으므로 코드 순서에 주의.
    beforeNation = nation;
}

nationBox[0].addEventListener('click', function () { changeImg_nation(this) });
nationBox[1].addEventListener('click', function () { changeImg_nation(this) });
nationBox[2].addEventListener('click', function () { changeImg_nation(this) });
nationBox[3].addEventListener('click', function () { changeImg_nation(this) });
nationBox[4].addEventListener('click', function () { changeImg_nation(this) });

// for (const nation of nationBox) {
// 	nation.addEventListener('click', function () { changeImg_nation(this) });
// }

/* ============================================================================================ */

function changeImg_nation() {
    let nationNum = this.textContent;

    switch (+nationNum) {
        case 1:
            img.src = './image/bg1.jpg';
            break;
        case 2:
            img.src = './image/bg2.jpg';
            break;
        case 3:
            img.src = './image/bg3.jpg';
            break;
        case 4:
            img.src = './image/bg4.jpg';
            break;
        case 5:
            img.src = './image/bg5.jpg';
            break;
    }

    beforeNation.style.opacity = '.5';
    this.style.opacity = '1';
    beforeNation = this;
}

for (const nation of nationBox) {
    nation.addEventListener('click', changeImg_nation);
}








const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');

let beforeNation = nationBox[0];

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

function changeImg_nation() {
    img.setAttribute('src', imgAr[this.textContent - 1]) // - 1 연산으로 인해 부호(+) 연산 미필요.
    // img.src = imgAr[this.textContent - 1];

    beforeNation.style.opacity = '.5';
    this.style.opacity = '1';
    beforeNation = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeImg_nation);
}

// for (const nation of nationBox) {
//   nation.addEventListener('click', changeImg_nation);
// }



onst main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

/* 
        < createElement >

    - 인수로 지정한 태그명에 해당하는 태그 요소를 생성하여 반환.
      단, 생성 시의 요소는 모두 독립적인 개별요소가 반환됨에 따라 재활용이 되지 않음에 주의.


        < appendChild >

    - 지정한 부모 요소에 인수로 전달한 요소를 부모 요소의 마지막 자식 요소로 추가후
      추가된 자식 요소의 참조를 반환.
    */
for (let i = 0; i < imgAr.length; i++) {
    const aLink = nation_container.appendChild(document.createElement('a'));

    aLink.href = '#';
    aLink.classList.add(`nationBox`);
    aLink.classList.add(`nation${i + 1}`);
    aLink.textContent = `${i + 1}`;
}

/* ========================================================================================== */

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg_nation() {
    img.src = imgAr[this.textContent - 1];

    beforeNation.style.opacity = '.5';
    this.style.opacity = '1';
    beforeNation = this;
}

for (const nation of nationBox) {
    nation.addEventListener('click', changeImg_nation);

}






const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

/* =========================================================================================== */

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg_nation() {
    /* 
        현재 요소(beforeNation)의 컨테트와 다음 요소의 인덱스 관계를 활용.
        단, 현재 요소의 컨텐트가 다음 요소의 인덱스가 되기 위해 인덱스 범위를
        벗어나는 상황을 대비하기 위해 나머지 원리를 활용.
    */
    let currentNationNumIdx = beforeNation.textContent % imgAr.length;

    img.src = imgAr[currentNationNumIdx];

    beforeNation.style.opacity = '.5';
    nationBox[currentNationNumIdx].style.opacity = '1';
    beforeNation = nationBox[currentNationNumIdx];
}

/* =========================================================================================== */

// 자동 이미지 교체

let stopActiveImg, flag;

function activeImg() {
    stopActiveImg = setInterval(changeImg_nation, 2000);
}

function stopImg() {
    clearInterval(stopActiveImg);
}

activeImg();

main_container.addEventListener('click', () => {
    if (flag) {
        activeImg();
    } else {
        stopImg();
    }
    flag = !flag;
});