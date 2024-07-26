
'use strict';


function calculator(num1, num2, oper) {
    let tot;                                        // tot 변수 생성
    switch (oper) {
        case '+':
            tot = num1 + num2;
            break;
        case '-':
            tot = num1 - num2;
            break;
        case '*':
            tot = num1 * num2;
            break;
        case '/':
            tot = num1 / num2;
            break;

    }

    console.log(`${num1} ${oper} ${num2} = ${tot}`);
}

calculator(10, 3, '+');
calculator(10, 3, '-');
calculator(10, 3, '*');
calculator(10, 3, '/');


/*--------------------------*/


function calculator(n1, n2, op) {
    let result;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            console.log('연산자 오입력');
            return;
    }

    console.log(`${n1} ${op} ${n2} = ${result}`);
}


calculator(10, 3, '+');
calculator(10, 3, '-');
calculator(10, 3, '*');
calculator(10, 3, '/');
calculator(10, 3, 'a');


/*-------------------------------*/



function sum(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

function calculator(n1, n2, op) {
    console.log(`${op(n1, n2)}`);
}


calculator(10, 3, sum);
calculator(10, 3, sub);
calculator(10, 3, mul);
calculator(10, 3, div);


/*------------------------*/


function calculator(n1, n2, op) {
    console.log(`${op(n1, n2)}`);
}


calculator(10, 3, (n1, n2) => n1 + n2);
calculator(10, 3, (n1, n2) => n1 - n2);
calculator(10, 3, (n1, n2) => n1 * n2);
calculator(10, 3, (n1, n2) => n1 / n2);


/*------------------------*/

function sum(n1, n2) {
    return ['+', n1 + n2];
}
function sub(n1, n2) {
    return ['-', n1 - n2];
}
function mul(n1, n2) {
    return ['*', n1 * n2];
}
function div(n1, n2) {
    return ['/', n1 / n2];
}

function calculator(n1, n2, op) {
    const result = op(n1, n2);
    console.log(`${n1} ${result[0]} ${n2} = ${result[1]}`);
}

calculator(10, 3, sum);
calculator(10, 3, sub);
calculator(10, 3, mul);
calculator(10, 3, div);
