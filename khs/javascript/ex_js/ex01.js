
let a, b, min, max;

a = +prompt("정수 1 : ");
b = +prompt("정수 2 : ");

if (a > b) {
    min = b, max = a;
} else {
    min = a, max = b;
}

alert(`${a}과 ${b}의 차는 ${max - min}입니다.`);

confirm(`창을 닫을 까요?`)



let n1, n2;

n1 = +prompt('정수1 : ', 0);
n2 = +prompt('정수2 : ', 0);

alert(`${n1}과(와) ${n2}의 차는 ${(n1 > n2) ? n1 - n2 : n2 - n1}입니다.`);

if (confirm('창을 닫을 까요?')) {
    close();
}

