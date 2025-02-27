/*
    < 변수의 선언 >

- let, const, var구문을 이용한 변수의 선언.

형식    :   let 변수명;
            const 변수명;
            var 변수명;

-------------------------------------------------------------------------------------------------

    < Hoisting >

- 호이스팅이란  컴파일 과정에서 선언 및 정의 위치와 관계 없이 변수나 함수의 선언 및 정의부를                  
  코드의 최상단으로 끌어 올리는 것을 의미하는데, 변수나 함수의 선언은 컴파일 단계에서 메모리에
  저장되지만 실제 물리적 코드의 위치가 변경되어 저장되는 것은 아님.                                                             

-------------------------------------------------------------------------------------------------

      < 함수 범위(Scope)와 블럭 범위 >

1) 함수 스코프( var구문 )
   - 함수 외부에서 선언된 변수는 전역으로 함수 내부에서 선언된 변수만 지역변수로 인식하여,
     일반적인 블럭 스코프에서는 전역 변수로 인식.

2) 블럭 스코프( let, const구문 )
   - 변수가 선언된 블럭, 구문, 표현식 내에서 유효한 범위를 가지는 지역변수로 인식되며, var과
     달리 중복 선언 불가. 블럭 바깥에서는 선언된 시점이후의 소스 코드 전체에 유효한 전역변수
     성격을 가져 var구문과 동일하게 작동.

*/

// 1) 함수 스코프( var구문 ) Hoisting 적용

'use strict';

console.log(n1);    // n1은 정의되지 않았으므로 ReferenceError(n1 is not defined)가 발생되어야 
n1 = 5;             // 함에도 38행의 var로 선언된 n1에 대한 var hoisting으로 인해 undefined값 반환.

var n1;             // var Hoisting : 변수의 선언부만 호이스팅.
console.log();


function varTest() {    // var는 함수 스코프(Function Scope)로써 블럭 스코프와 관계없이
    var n2 = 10;        // 함수 외부 또는 내부로 구분짓는 전역과 지역 변수로 나뉨.
}
// console.log(n2);
{
    var n3 = 15;        /* 블럭 내부에 선언된 var는 함수 내에서만 지역적인 성격을 띄며 블럭에는
                           영향을 받지 않아 블럭을 무시하고 전연 변수로 인식.                */
}
console.log(n3);
console.log();


var n4 = 20;
var n4 = 30;         // var은 이와같이 중복선언도 가능.
console.log(n4);
/*
    var은 유연한 코딩이 가능하지만 코드의 안정성을 저하시키는 요인이
    될 수 있으므로 특수한 경우를 제외하고는 사용을 지양.
*/





//2) 블럭 스코프( let, const구문 )  Hoisting 적용 x

// console.log(n1);    // ReferenceError(Cannot access 'n1' before initializationat).
let n1 = 5;            // let : ECMAScript6에 추가된 변수 선언 구문으로 선언된 시점부터 접근이 가능하며
// let n1 = 5;         // 블럭 스코프가 적용되어 블럭 외부 또는 내부를 기준으로 하여 전역과 지역으로 나뉨.
console.log(n1);       // 또한, var과 같이 중복 선언 불가.
console.log();


function letTest() {
    let n2 = 10;
}
// console.log(n2);     // ReferenceError(n2 is not defined).


{
    let n3 = 15;
}
// console.log(n3);     // ReferenceError(n3 is not defined).
console.log();


const n4 = 8;         // 변수에 대한 값부 변경 불가.(immutable)
// n4 = 9;

// const n5;          // const선언이 지정된 변수는 반드시 선언과 동시에 초기화가 강제.
// 선언 이후에 지연 초기화도 불가.