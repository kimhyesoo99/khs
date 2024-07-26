
/*

 < 문제 >

다음과 같이 email 변수에 이메일 주소가 저장되어 있을 때,
메일주소의 처음과 @ 앞에 "_" 를 삽입하고 @ 뒤의 도메인명은
개별 도메인명의 뒤에 ".kr"이 삽입되어 email 변수에 저장하도록
프로그램을 구현.
단, 아래 메일주소와 도메인명은 예시일뿐 다른 모든 메일주소와
도메인명에 대하여 적용되야함에 주의.( replace 사용 불가 )

    < 변환 예시 >

    psy1234@daum.net       ->      psy1234@daum.kr.net

    ysk999990@naver.com    ->      ysk999990@naver.kr.com

'use strict';

let email = 'psy1234@daum.net';

*/



'use strict';

let email = 'ysk999990@naver.com ';
let a = email.substring(0, email.indexOf("@"));
let b = email.substring(email.indexOf("@"), email.indexOf('.'));
let c = email.substring(email.indexOf('.'));

// let b = email.indexOf('@');
// console.log(b);

console.log(a);
console.log(b);

email = `_${a}_${b}.kr${c}`

console.log(email);


// let email = 'psy1234@daum.net';

/* ======================================================================== */

// let atIdx = email.indexOf('@');
// let dotIdx = email.indexOf('.');

// email = `_${email.slice(0, atIdx)}_@${email.slice(atIdx + 1, dotIdx)}.kr.${email.slice(dotIdx + 1)}`;
// console.log(email);

/* ======================================================================== */

// let emailAt = email.split('@');
// let domainDot = emailAt[1].split('.');

// email = `_${emailAt[0]}_@${domainDot[0]}.kr.${domainDot[1]}`;

// console.log(email);

