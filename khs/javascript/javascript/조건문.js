
/*

    if 조건문

*/


if (조건식) {
    참실행블럭;
} else {
    거짓실행블럭;
}

if (조건식) {
    참실행블럭;
} else if (조건식) {
    거짓실행블럭;
} else if (조건식) {
    거짓실행블럭;
} else {

}


// 연속적이면서 넓은 범위를 측정

/*
    정수 : 85

    당신은 A 등급
*/

let score = 85;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(` 당신은 ${grade} 등급`);

/*-------------------------------------------------------------------------------------*/



/*

    < switch문 >

*/



switch (평가할값(변수, 상수)) {
    case 선택값1:                                       //변수, 상수, 식 모두 가능
        실행문1;
        break
    case 선택값2:
        실행문2;
        break
    case 선택값3:
        실행문3;
        break
    default:                                            // ㄱ생략 가능
        실행문4
        break

}

//switch (;이 아닌: 사용)



// 비연속적이거나 좁은 범위를 측정

/*

    1 등 : 대상

    2, 3등 : 최우수상

    4, 5, 6등 : 우수상

    나머지 : 장려상

*/

let rank = 2;
let prize;

switch (rank) {
    case 1:
        prize = '대상';
        break
    case 2:
    case 3:
        prize = '최우수상';
        break
    case 4:
    case 5:
    case 6:
        prize = '우수상';
        break
    default:
        prize = '장려상';
        break
}

console.log(prize);

