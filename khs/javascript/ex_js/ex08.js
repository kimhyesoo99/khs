/* 
    < 문제 >

- 입력받은 값이 숫자인지 아닌지를 평가하는 프로그램 구현.
  숫자 입력 시 입력없이 "확인" 버튼을 누르거나 "취소" 버튼을 누르는
  상황에 대한 예외 처리는 제외.
*/

'use strict';

let num;

num = prompt('숫자 입력 : ');                  // 부호(+) 붙일 필요 없음. 

if (confirm('입력된 값이 숫자가 맞습니까?')) {
    if (isNaN(num)) {
        alert('입력된 값이 숫자가 아닌거 같습니다. 프로그램을 종료합니다.');
    } else {
        alert('입력된 값이 숫자가 맞습니다.');
    }
} else {
    alert('이후 반복문을 학습한 후에는 재입력 상태를 구현 가능할 것입니다.');
}