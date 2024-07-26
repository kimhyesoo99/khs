// 함수 : 반복적이거나 복작한 작업을 하나의 명령어로 간단히 구현토록 하는 도구

// function 함수명(매개변수) { 함수실행블럭; }
//                   입력          처리

function fromToSum() {
    let min, max,
        tot = 0;

    min = 1;
    max = 10;

    for (let i = min; i <= max; i++) {
        tot += i;
    }

    console.log(`${min} 부터 ${max} 까지 누적합 : ${tot}`);
}

fromToSum();         //실인수 


/*-----------------------------------------------*/


function fromToSum(min, max) {
    let tot = 0;

    for (let i = min; i <= max; i++) {
        tot += i;
    }

    console.log(`${min} 부터 ${max} 까지 누적합 : ${tot}`);
}

let min, max;

min = 1;
max = 10;

fromToSum(min, max);    // 실인수


/*-----------------------------------------------------------------*/

function fromToSum(min, max) {
    let tot = 0;

    for (let i = min; i <= max; i++) {
        tot += i;
    }

    return tot;         // return : 1) 호출부로 값을 반환  2) 함수의 종료

    // console.log(123);   // 실행 불가 코드.
}

let min, max;

min = 1;
max = 10;

console.log(`${min} 부터 ${max} 까지 누적합 : ${fromToSum(min, max)}`);




// 함수명 == 변수와 거의 동일 