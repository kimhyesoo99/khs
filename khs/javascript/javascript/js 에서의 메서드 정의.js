'use strict';

/* 
  < js 에서의 메서드 정의 >

- js 에서는 자바에서의 필드와 메서드를 모두 통칭하여 프로퍼티로 정의.
  따라서 프로퍼티 key 에 데이터 값(value)을 할당한 형태가 필드 프로퍼티로 평가되며,
  프로퍼티 key 에 함수를 할당한 형태를 메서드로 정의.
*/

const option = {
    hiPass: true,
    sunRoof: false
}

const car = {
    carName: 'poter',
    color: 'blue',
    typeOfFuel: 'diesel',
    'car type': 'truck',
    performance: {             // 값(value)에는 리터럴 객체를 직접 지정 가능.                                
        speed: 100,
        breakCapability: 10    // 제동력.                                                                     
    },
    carOption: option,          // 값(value)에는 외부 객체나 외부 함수의 참조도 포함 가능.

    inforCar: function () {     // 객체 메서드.

        console.log(`차명 : ${this.carName}, 색상 : ${this.color}, 종류 : ${this["car type"]}`)
        // 메서드 내에서 객체 속성(필드, 메서드) 접근시에는 반드시 this키워드를 통해서 접근 가능.
        // ( this 대신 car 를 통해서도 접근 가능하지만 권장되지 않음 )
        // VSCODE에서는 속성명만 입력해도 this키워드 자동 로딩.
    },

    run() {                     // 객체 메서드 축약.
        console.log("부릉 부릉");
    },

    /* 
      리터럴 객체 정의 후에도 외부에서 객체의 프로퍼티를 추가할 수 있듯이,
      객체내 별도의 필드 정의 없이도 객체에 포함된 메서드 내에서도 this
      키워드를 이용해 필드 추가 정의 가능.
    */
    add(props, value) {
        this[props] = value;
        // car[props] = value;
    }
};

console.log(car.performance.speed);
console.log(car.performance.breakCapability);
console.log("하이패스 " + ((car.carOption.hiPass) ? "" : "미") + "장착");
console.log("선루프 " + ((car.carOption.sunRoof) ? "" : "미") + "설치");
console.log(car);
console.log('------------------------');


car.inforCar();
car.run();
car.add('num', 119);
console.log(car);
console.log('------------------------');


function convey() {
    console.log('짐을 실어 나르기.');
}

car.stop = function () {        // 함수 표현식을 활용한 객체 메서드 추가.
    console.log('끼이익');
};

car.convey = convey;            // 외부 함수의 참조 전달을 통한 메서드 추가.

car.stop();
car.convey();
car['convey']();     // 계산된 프로퍼티를 활용한 메서드 호출도 가능.
console.log('------------------------');


// car.attack();    // 존재하지 않는 필드에 대한 접근은 undefined 를 반환하지만,
//                  // 존재하지 않는 메서드에 대한 접근은 컴파일 에러가 발생됨에 주의.


/*------------------------------------------------------------*/

let name = '박성연';
let age = 22;

const teacher1 = {
    name: name,         // key부분의 name은 내부적으로 문자열로 변환된 'name'으로 변환되어 처리되므로
    age: age,           // 외부 전역 변수(name)에 영향을 받지 않지만,   value 부분의 name은 외부 전역
};                      // 변수 name에 저장된 값을 읽어들이고 age도 동일하게 적용.
//                      // ( js에서는 string도 참조형이 아닌 기본형임에 주의. )
console.log(teacher1);
console.log();



// 프로퍼티 단축.
const teacher2 = {
    name,               // 위와 같이 key와 value가 동일한 경우 당행과 같이 단축 문법 제공.
    age,
};

console.log(teacher2);


const car1 = {
    carName: '소나타',
};

const car2 = {
    carName: '아반떼',
};

function viewCarName() {
    console.log(this.carName);      // this를 활용한 외부함수에 대한 동적 객체 할당(메서드화). 함수 내에서 this는 기본적으로
}                                 // 값이 할당되지 않은 상태(undefined)를 유지하다가  객체에 포함되어 호출되는 시점에서
//                                // 해당 객체를 참조.

// viewCarName();                 // 객체가 할당되지 않은 상태에서의 this 는 undefined 를 반환하고 undefined 에 대한
//                                // 속성 참조 연산(.)을 하므로 컴파일 에러.

car1.viewCarName = viewCarName;
car2.viewCarName = viewCarName;

car1.viewCarName();
car2.viewCarName();