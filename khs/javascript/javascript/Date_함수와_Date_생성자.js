/* 
    < Date 함수와 Date 생성자 >

- Date 함수 : 호스트의 시스템에 종속된 형태의 현재 시간을 문자열 형태로 반환.
              연산 적용이 불가하여 연산시 NaN 값 반환.

- Date 생성자 : 현재 시간 1000분의 1초 단위의 숫자 형태로 반환함에 따라
                연산 적용이 가능.


    < 코드 실행 시간 테스트 >
    
let startTime = new Date();

setTimeout(() => {
    console.log(new Date() - startTime);
}, 3000);

*/



















































'use strict';

function func1() {
    let local = 0;

    // console.log(local);
    return ++local;
}

let var1 = func1();

console.log(var1);      // 1
console.log(func1());   // 1
console.log('==================');


function func2() {
    let local = 0;

    function innerFunc() {
        console.log(++local);
    }

    return innerFunc;
}

let closer1 = func2();

closer1();
closer1();

closer1 = null;

let closer2 = func2();
closer2();

function func3() {
    let local = 0;

    return function () {
        console.log(++local);
    };
}

let closer3 = func3();

closer3();
closer3();

function func4() {
    let local = 0;

    return () => {
        console.log(++local);
    };
}

let closer4 = func4();

closer4();
closer4();