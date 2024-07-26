/*
    <반복문>

    반복 (회전수) 결정되기 위한 조건 :  1) 처음 2) 끝 3) 일정한 규칙

*/

/* 

for (초기식부분; 조건식(반복)부분; 증감식부분) {            // 초기식 > 조건식 > 반복실행문 > 증감식
    반복실행블럭;                                           //        > 조건식 > 반복실행문 > 증감식
}

*/

/*

    < 1 : 1 비교 >

    ==  !=


    < 범위 측정 연산자 >

    >     초과
    >=    이상
    <     미만
    <=    이하


    >5       <=5
    >=6      <6

    <=-64    >-64
    <-63     >=-63


*/


// 1 ~ 10

for (let i = 1; i < 11; i++) {
    console.log(i);             // 구하는식( 기준 : 현재)
}

// // 91 ~ 144

for (let i = 90; i < 144;) {
    i++;
    console.log(i);             // 구하는식( 기준 : 현재)
}

for (let i = 90; i <= 143;) {
    i++;
    console.log(i);             // 구하는식( 기준 : 현재)
}

// // -14 ~ 93

for (let i = -14; i < 94;) {
    console.log(i);             // 구하는식( 기준 : 현재)
    i++;
}

// // 157 ~ 81

for (let i = 158; i > 81;) {
    i--;
    console.log(i);             // 구하는식( 기준 : 현재)
}

// // 114 ~ -57

for (let i = 114; i > -58;) {
    console.log(i);             // 구하는식( 기준 : 현재)
    i--;
}

// 55 ~ 70

for (let i = 55; i < 71;) {
    console.log(i);
    i++;
}

// 104 ~ 70 

for (let i = 104; i <= 69;) {
    console.log(i);
    i--;
}


// // 67 ~ 119
for (let i = 67; ;) {
    if (i >= 120) break;
    console.log(i);
    i++;
}



// // 5~ -34
for (let i = 6; ;) {
    if (i <= -34) break;
    i--;
    console.log(i);
}


// // 91 ~ 153
for (let i = 90; ;) {
    i++;
    console.log(i);
    if (i >= 153) break;
}

// /*------------------------------------------------------------------*/

while (조건식(반복)) {
    반복실행블럭;
}

// //17 ~ 93
let i = 16;

while (i < 93) {
    i++;
    console.log(i);
}


// //114 ~ 191
let i = 113;

while (i <= 190) {
    i++;
    console.log(i);
}


// //93 ~ 154
let i = 92;

while (i) {
    i++;
    if (i >= 155) break;
    console.log(i);
}

// //41 ~ -33
let i = 42;

while (i) {
    i--;
    console.log(i);
    if (i <= 33) break;
}


// 114 ~191
let i = 114;

while (i <= 191) {
    console.log(i);
    i++;
}

// 78 ~191
let i = 78;

while (i < 192) {
    console.log(i);
    i++;
}


// //82 ~ 211
let i = 81;

while (i < 211) {
    i++;
    console.log(i);
}




// 67 ~ 119 
for (초기식부분; 조건식(반복)부분; 증감식부분) {
    반복실행블럭;
}

- 초기식부분 : 일반적으로 반복하기 위한 변수를 선언
    - 조건식부분 : 조건식이 만족되면(참이면) 반복실행블럭 안으로 진입
              반대로 조건식이 만족되지않으면(거짓이면) 종료 직관적 이해를 위해서 항상 끝나는 조건으로 평가를 하되
              문법 조건은 반복하는 조건이므로 반대로 평가하여 명시


for (let i = 67; i 120; i++) {
    console.log(i);                // 구하는식 (기준 : 현재 ) : 반복을 하는 목적이 있을 것이고 그에 따라 구하는식은 달라질 수 있음
    //                             // 항상 구하는 식 (현재)이 기준이 되어 모든 시간을 평가 
}


// /*-------------------------------------------------------------------*/


do {
    반복실행블럭;
} while (조건식(반복));

// //24 ~ 57 
let i = 23;

do {
    i++;
    console.log(i);
} while (i < 57);

// // 13 ~ -44
let i = 13;

do {
    console.log(i);
    i--;
} while (i > -45);


// // 109 ~ 214 
let i = 109;

do {
    console.log(i)
    if (i >= 214) break
    i++;
} while (1);


// // 71 ~ 64 
let i = 72;

do {
    i--;
    con(i <= 63);
    console.log(i);
} while (1);

// 185 ~ 214 
let i = 185;

do {
    console.log(i)
    i++;
    if (i >= 215) break
} while (1);

// 185 ~ 150 

let i = 186;

do {
    i--;
    console.log(i)
    if (i <= 150) break
} while (1);



/*---------------------------------------------------*/


// 1 ~ 100 누적합

let tot = 0;    // 필요없는 숫자(0)으로 초기화

for (let n = 1; n < 101; n++) {
    tot = tot + n;                          // 현재누적합(tot) = 과거누적합(tot) + 현재대상값(n)
}

console.log(tot);


// 1 ~ 100 누적합

let tot = -193;                         // 0에 -193을 넣어준다 

for (let n = 5; n < 103; n++) {        // 1~4는 더하고 , 101,102는 빼줌
    tot = tot + n;
}

console.log(tot);                       // 출력값에 빼면 x 


/*--------------------------------------------------*/


/*

    작은수 : 1
    큰수   : 10

    1 부터 10 까지 누적합 : 55

*/

let tot = 0;
min, max;

min = +prompt('작은수 : ');                 // prompt 기본이 문자열 " + " 붙으면 숫자는 숫자형으로 입력 받을 수 있음
max = +prompt('큰수 : ');

let n = min - 1;

while (n < max) {
    n = n + 1;                                  // 증감식에 따라 과거값 현재값이 바뀜 증감식은 어디에 가든 상관은 없음! 
    tot = tot + n;
}


let n = min;

while (n <= max) {
    tot = tot + n;
    n = n + 1;
}

alert(`${min} 부터 ${max} 까지 누적합 ${tot}`);   //  문자열+값을 결합 시키기 위해 `` 사용


/*------------------------------------------------------------------*/


/* 
    작은수 : 1
    큰수   : 10

    1 부터 10 까지 누적합 : 55
*/

let tot = 0,
    min, max;

min = +prompt('작은수 : ');
max = +prompt('큰수 : ');

let n = min - 1;

while (n < max) {
    n = n + 1;
    tot = tot + n;
}

let n = min;

while (n <= max) {
    tot = tot + n;
    n = n + 1;
}

alert(${ min } 부터 ${ max } 까지 누적합 ${ tot });


/* 
    정수1 : 1
    정수2 : 10

    1 부터 10 까지 누적합 : 55

    
    정수1 : 10
    정수2 : 1

    1 부터 10 까지 누적합 : 55
*/
'use strict';

let tot = 0,
    n1, n2,
    min, max;

n1 = +prompt('정수1 : ');
n2 = +prompt('정수2 : ');

if (n1 > n2) {
    min = n2, max = n1;
} else {
    min = n1, max = n2;
}

//1 ~ 10
for (let i = min; i <= max; i++) {
    tot = tot + i;
}

alert(`${min} 부터 ${max} 까지 누적합 ${tot}`);


/*---------------------------------------------------------------------*/

/*

    정수 1 : 1
    정수 2 : 2
    정수 3 : 3
    정수 4 : 4
    정수 5 : 5
    정수 6 : 0

    누적합 : 15

*/


let n;
let tot = 0;

for (let i = 1; ; i++) {
    n = +prompt(`정수${i} : `);

    if (n === 0) break;

    tot = tot + n;
}

alert(`누적합 : ${tot}`);

/*

    입력 정수 갯수 : -1
    입력 정수 갯수 : -2
    입력 정수 갯수 : 0
    입력 정수 갯수 : 5

    정수 1 : 1
    정수 2 : 2
    정수 3 : 3
    정수 4 : 4
    정수 5 : 5

    누적합 : 15

*/

'use strict';

let cnt;
let n;
let tot = 0;

do {
    cnt = + prompt(`입력 정수 갯수 : `);
} while (cnt <= 0);

for (let i = 1; i <= cnt; i++) {
    n = +prompt(`정수${i} : `);
    tot = tot + n;
}

alert(`누적합 : ${tot}`);

