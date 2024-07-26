'use strict';

// 1, 1, 2, 3, 5, 8, 13 ~ ... 100번째 항까지의 합.

let tot = 2;
// let first + second;
let first = 1, second = 1;
let current;

for (let i = 0; i < 98; i++) {
    current = first + second;
    tot += current;
    first = second
    second = current;
}

console.log(tot);

