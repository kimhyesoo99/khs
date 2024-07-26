
let a, korean, english, math, average, grades;

a = prompt("이름 : ");
korean = +prompt("국어 점수 : ");
english = +prompt("영어 점수 : ");
math = +prompt("수학 점수 : ");


average = (korean + english + math) / 3;

if (average >= 90) {
    grades = "A";
} else if (average >= 80) {
    grades = "B";
} else if (average >= 70) {
    grades = "C";
} else {
    grades = "F";
}



alert(
    `<성적>
학생명 : ${a}, 힉점 : ${grades}, 평균 : ${average}`
);

/*

let stName;
let kor, eng, math;
let avg;
let grade;

stName = prompt('이름 : ');
kor = +prompt('국어 점수 :');
eng = +prompt('영어 점수 :');
math = +prompt('수학 점수 :');

avg = (kor + eng + math) / 3;

if (avg >= 90) {
    grade = 'A';
} else if (avg >= 80) {
    grade = 'B';
} else if (avg >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

alert(`< 성적 >\n학생명 : ${stName}, 학점 : ${grade}, 평균 : ${avg}`);

*/