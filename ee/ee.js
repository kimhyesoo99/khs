'use strict';

// let bgimg;
// let nationBox;
// let beforeclick;

// bgimg = document.getElementsByTagName('img');
// nationBox = document.getElementsByClassName('nationBox');
// beforeclick = nationBox[0];

// const arr = [                   // 배열 
//     './image/bg1.jpg',
//     './image/bg2.jpg',
//     './image/bg3.jpg',
//     './image/bg4.jpg',
//     './image/bg5.jpg'
// ]

// function transform(self) {    // 
//     console.log(self);
//     self.style.opacity = 1;
//     beforeclick.style.opacity = 0.5;
//     beforeclick = self;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', function () {
//         transform(this);
//         bgimg[0].src = arr[i];
//     });
// }

// this 연결고리 
// this 는 self 짝꿍


let bgimg;
let nationBox;
let beforeclick;

bgimg = document.getElementsByTagName('img');
nationBox = document.getElementsByClassName('nationBox');
beforeclick = nationBox[0];

const arr = [                                          
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
]

function transform(self) {
    console.log(self);
    self.style.opacity = 1;
    beforeclick.style.opacity = 0.5;
    beforeclick = self;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        transform(this);
        bgimg[0].src = arr[i];
    });
}


