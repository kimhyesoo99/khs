'use strict';

// 1, 3, 5, 7, 9 ~ 20번째 항까지의 합.
let tot = 0;
let n = -1;

for (let i = 0; i < 20; i++) {
    n += 2;
    tot += n;
}

console.log(tot);


// =========================================================

// let tot = 0;
// let n = 1;
// for (let i = 0; i < 20; i++) {
//     tot += n;
//     n += 2;
// }

// console.log(tot);