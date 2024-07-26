/*

    <삼항 조건 연산자>


    조건식            ?    참  : 거짓(생략불가)    
    (true, false)

    조건식1    ?  참  :  조건식2    ?   참  :  거짓    -  비권장 (코드 가독성 안좋음)


*/



let gender = true;
let gender = false;

console.log(gender ? ' 너는 남자다 ' : '너는 여자다');


let genderName;

gender ? genderName = '남자' : genderName = '여자';

console.log(genderName);


/*--------------------------------------------------------------------------------------- */


let age = 26;               // age변수에 26

let beverage = (age >= 21) ? "Beer" : "Juice";

// 나이에 따라 음료를 준다 만약
// 나이가 21세 이상이면 맥주를 주고 (참)
// 나이가 21세 미만이면 주스를 줄 것이다 (거짓)

console.log(beverage);     // 출력


// 위 삼항연산자를 if문으로 표햔한다면?

let age = 19;      // age 변수에 19
let beverage;

if (age >= 21) {         // 변수age가 21보다 이상(>=)이면
    beverage = "Beer";   // 변수 beverage 출략값 맥주
} else {                  // age >= 21 조건이 아니면 
    beverage = "Juice"    // 변수 beverage 출략값 주스
}

console.log(beverage)      // 출력


/*-------------------------------------------*/

/*
    나이가 20살 이하면 학생 , 이상이면 성인
*/

let age = 17;
let oli

if ( age >= 19) {
    oli = "성인"
} else {
    oli = "학생"
}

console.log(oli)