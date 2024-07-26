/*
    
     출력문  : 자바스크립트는 여러 방법을 통해 결과물을 웹 브라우저에 출력 가능하다 
              자바스크립트에서 사용할 수 있는 출력 방법은 여러가지 있다 

    - window.alert()메소드
    - dociment.write()메서드
    - console.log()메서드
    - HTML DOM 요소를 이용한 innerHTML 프로퍼피

    window.alert()메소드 : 브라우저 api 메서드 경고 대화 상자는 사용자의 확인을 제외한 다른 입력을
                         요구하지 않는 메세지를 전달할 때 사용 별도의 대화 싱자를 띄어 사용자에게 데이터를 전달 

    dociment.write()메서드 : 웹페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력 대부분 
                           테스트나 디버깅을 위해 사용
    
    console.log()메서드 : 웹페이지의 콘솔을 통해 데이터를 출력한다 대부분의 주요 웹 브라우저에서는 
                        F12 (개발자 도구)를 누른 후 메뉴에서 콘솔을 더블클릭하면 볼 수 있음
                        콘솔 화면을 통한 데이터의 출력은 좀 더 자세한 사할까지 출력되서 디버깅 하는데 도움을 준다

*/

// alert("이것은 alert 입니다");
// document.write("이것은 document.write 입니다");
// console.log("이것은 console.log 입니다.");


/*---------------------------------------------*/

/*

    string (문자열)을 표시하는 방법은 3가지 

    1) 작은따롬표 ('') 
    2) 큰 따옴표 ("")
    3) 백틱 (``)

    작은,큰 따옴표는 사용법이 같음 '로 시작하면 '로 끝나고 "로 시작하면 "로 끝난다

*/

console.log('hello!', name, 'you have', age);
console.log(`hello! ${name} you have $(age)`);
console.log("hello!" + name + "you have" + age);
console.log("hello", name, "you have", age);



