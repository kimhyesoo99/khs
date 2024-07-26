'use strict';

let a;

a = prompt("주민번호 : ");

if (a.includes('-')) {
    if (confirm("하이폰(-)을 공백으로 변경을 원하십니까?")) {
        alert(a.replace('-', ' '));
    } else {
        alert(a);
    }
} else {
    alert(a);
}



/*

let regidentNum;

regidentNum = prompt('주민번호 : ');

if (regidentNum.includes('-')) {
    if (confirm('하이픈(-)을 공백으로 변경을 원하십니까?')) {
        regidentNum = regidentNum.replace('-', ' ');
    }
}

alert(regidentNum);


*/