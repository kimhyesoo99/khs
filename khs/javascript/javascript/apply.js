'use strict';

/* 객체에 동적으로 할당될 메서드로 가정 */
function test(n1, n2) {
    console.log(this.name);
    console.log(n1);
    console.log(n2);
    console.log('====================================');
}

const person = { name: 'Alice' };
person.test = test;                 // person 객체에 test 메서드를 동적으로 할당.

person.test(1, 2);

/* ================================================================================= */

/*
    setTimeout 메서드에 콜백 함수의 참조(test)를 전달했을 때,
    this 는 test 함수의 주체가 되는 person 이 아니라, setTimeout
    메서드의 주체가 되는 Timeout 객체가 됨에 주의.
    따라서 test 함수의 주체가 되는 person 을 전달하기 위해서는
    setTimeout 메서드의 3번째 인수가 되는 ...arguments 에 직접
    person 을 전달할 수 있지만, 이렇게 되면 person 을 받기 위한
    test 함수의 매개변수를 추가로 재지정해야 하는 문제점 발생.

    ※ 아래의 경우에는 test 함수의 참조를 전달함으로써, setTimeout 의
       주체가 되는 Timeout 객체가 반환되고 Timeout 객체에는 name 필드가
       존재하지 않아 undefined 반환.
*/
setTimeout(test, 2000, 5, 10);


/*
    < apply >

- js 객체에 기본적으로 제공되는 메서드로써, 첫 번째 인자에 this 로 참조할
  객체의 참조를 전달하고 두 번째 인자에 전달할 다른 인수들을 배열 형태로
  전달함으로써, 해당 함수 내에서 this 를 이용하여 전달받은 객체를 참조
  가능하고 전달된 배열 인자들은 매개변수로 1:1 매칭시켜, 원하는 객체의
  this 를 참조하면서 별도의 인수들을 전달하고자 하는 경우 유용.

  ex>
    DOM요소.addEventListener(  'click', () => test.apply(person, [5, 10])  )
*/
setTimeout(() => test.apply(person, [5, 10]), 2000);