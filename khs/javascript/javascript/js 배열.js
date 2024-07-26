/*
    < js 배열 >

- 자바스크립트의 배열은 자바와 동일하게 동적할당이 적용되며, 자바의 컬렉션 프레임워크와 같이
  요소값 추가에 따라 자동 확장.

  ---------------------------------------------------------------------------------------------------

    < 리터럴 배열 생성 > - 리터럴 초기화 블럭을 이용한 배열 생성

참조변수 = [요소값1, 요소값2, 요소값3, ....];

*/

'use strict';

let ar1 = [];            //배열 리터럴에 요소값을 넣지 않으면 기본적으로 공간을 할당하지 않음.
let ar2 = ar1;  // 자바의 동시 참조 개념과 같음.

console.log(ar1.length);
console.log(ar1[0]);          // 공간이 할당되지 않은 영역이나 배열 범위를 벗어난 접근은 'undefined'값 반환.
console.log(ar1);   // 배열의 참조를 지정하면 자바의 컬렉션 프레임워크와 같이 배열 요소값을
//                  //  '[요소값1, 요소값2, 요소값3, ....]'형태로 반환.
console.log('---------------------------');


ar1[0] = 1;     // 인덱스를 통해서 배열에 요소값을 넣으면 자동으로 공간 할당 및 확장.
ar1[1] = 2;

console.log(ar1.length);
console.log(ar1);
console.log(ar2);
console.log('---------------------------');


ar2[4] = 5;     // 이와 같이 중간에 요소값이 비어 있는 상태로도 공간 확장 가능.

console.log(ar1.length);
console.log(ar1);         // [ 1, 2, <2 empty items>, 5 ]
console.log('---------------------------');


let ar3 = [11, 22, 33, 44, 55];

console.log(ar3);

ar3[1] = 'a';       // 이와 같이 타입이 다른 요소값도 저장 가능. 함수도 가능.
ar3[2] = 'psy';
ar3[3] = 4.15;

console.log(ar3);
console.log('---------------------------');


delete ar3[4];      // delete 연산자를 통해 요소값 삭제 가능. 단, 배열 안의 값을 삭제 할뿐
console.log(ar3);   // 배열이 할당되어 있는 크기에는 영향을 주지 않음.
console.log(ar3.length);

ar3[5] = 66;
console.log(ar3);
console.log('---------------------------');


console.log(ar3.toString());    // 11,a,psy,4.15,,66
//                              // 자바와 동일하게 Object의 메서드 toString은 배열도 문자열로 변환한 값을 반환.

console.log([] + 5);            // 배열 요소에 대한 +연산은 당연히 요소값에 대한 산술연산을 처리하지만, 이와같이
console.log([1] + 5);           // 배열 자체에 대한 +연산은 배열에 대하여 toString메서드를 호출한후 연산 처리를
console.log([1, 2] + 5);        // 하는 것과 동일하게 문자열로 자동 형변환후 연산.
console.log('---------------------------');


ar3.value = 'add';        // 배열은 객체형에 속하므로 이와같이 멤버 연산자를 통한 요소 추가도 가능하지만
//                        // 이렇게 하면 특수한 형태의 자료구조인 배열에 최적화 기법이 적용되지 않아
//                        // 배열에 적용되는 이점들이 적용되지 않음. 즉, length필드로 배열의 크기조사를
//                        // 하는 경우 그 크기에 포함되지 않으며, 배열 순회를 위한 for~of나 forEach를 통한
//                        // 접근에서도 배제됨.(forEach의 콜백함수 array인수를 통한 배열 전체 참조는 예외)
//                        // 단, 배열 접근시 권장되지 않는 for~in은 객체 접근을 위한 용도이므로 배제되지 않음.

console.log(ar3.value);   // 객체형에 속하는 배열의 특성으로 인해 배열의 인덱스는 정수형 프로퍼티에 해당되고
//                        // 멤버 연사자를 통해 추가한 value프로퍼티는 정수형이 아니므로 배열의 맨 끝에 위치.
console.log(ar3);
console.log(ar3[ar3.length - 1]);   // 66
console.log();

for (const key of ar3) {                    // 읽기전용
    console.log(key);
}
console.log();

ar3.forEach((v, i, a) => {                 // 읽기전용이지만 변경이 가능 (a)를 통해

    console.log(v, i);
});
console.log();

for (const key in ar3) {
    console.log(ar3[key]);
}


