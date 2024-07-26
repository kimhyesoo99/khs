'use strict';

let n1, n2;
let tot = 0;

while (1) {
    n1 = +prompt('작은 수 : ');
    n2 = +prompt('큰 수 : ');

    if (n1 <= n2) {
        for (let i = n1; i <= n2; i++) {
            tot += i;
        }

        break;
    }
}

alert(`${n1}부터 ${n2} 까지의 합 : ${tot}`);


// let n1, n2;
// let tot = 0;

// do {
//     n1 = +prompt('작은 수 :');  // 작은수   10
//     n2 = +prompt('큰 수 :');  // 큰수     1
// } while (n1 > n2);

// for (let i = n1; i <= n2; i++) {
//     tot += i;
// }

// alert(`${n1}부터 ${n2}까지의 합 : ${tot}`);