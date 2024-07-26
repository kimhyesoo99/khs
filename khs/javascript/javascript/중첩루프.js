
// 중첩루프 특성 : 외곽구조가 고정되어 있는 상태에서 내곽구조변수 값이 변하는 특성 

// // out:
// for (let i = 1; i <= 9; i++) {        // 구구단 (9번 반복)
//     // if (i >= 4) continue;          // for : 증감식부분으로 점핑
//     //                                // while, do~while : 조건식부분으로 점핑

//     for (let j = 1, space, result; j <= 9; j++) {
//         space = ' ';                                              // 공백

//         result = String(i + j);
//         for (let k = 0; k < 2 - result.length; k++) {
//             space += '&nbsp';
//         }

//         document.write(`${i} X ${j} = ${space}${result} `);

//         // if (j >= 7) break out;

//     }
//     document.write('<br/>');             // br 사용 X,  P태그안에서만 사용 예시닌깐 잠시 사용

//     // if (i >= 4) continue;               // 바보코드
// }

/*----------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1, space, result; j <= 5; j++) {
//         space = '';

//         result = String(v++);
//         for (let k = 0; k < 2 - result.length; k++) {
//             space += '&nbsp;';
//         }
//         document.write('${space}${result} ');
//     }
//     document.write('</br>');
// }

/*--------------------------------------------------------*/


/*
    중첩루프 행열 구하기
*/

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1, space, result; j <= 6 - i; j++) {
//         space = '';

//         result = String(v++);
//         for (let k = 0; k < 2 - result.length; k++) {
//             space += '&nbsp;';
//         }
//         document.write('${space}${result} ');
//     }
//     document.write('</br>');
// }

/*--------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1, space, result; j <= 5; j++) {
//         space = '';

//         if (j < i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             result = String(v++);
//             for (let k = 0; k < 2 - result.length; k++) {
//                 space += '&nbsp;';
//             }

//         }

//         document.write(`${space}${space} `);
//     }
//     document.write('</br>');
// }

/*--------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1, space, result; j <= 5; j++) {
//         space = '';

//         if (j < 6 - i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             result = String(v++);
//             for (let k = 0; k < 2 - result.length; k++) {
//                 space += '&nbsp;';
//             }

//         }

//         document.write(`${space}${space} `);
//     }
//     document.write('</br>');
// }

/*--------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

// for (let i = 1, v = 1; i <= 3; i++) {
//     for (let j = 1, space, result; j <= i + 2; j++) {
//         space = '';

//         if (j < 4 - i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             result = String(v++);
//             for (let k = 0; k < 2 - result.length; k++) {
//                 space += '&nbsp;';
//             }

//         }

//         document.write(`${space}${space} `);
//     }
//     document.write('</br>');
// }

/*--------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

let line, maxNum;

line = +prompt('줄수 : ');
maxNum = String(line * line).length;

for (let i = 1, v = 1; i <= line; i++) {
    for (let j = 1, space, result; j <= i + line - 1; j++) {
        space = '';

        if (j < line + 1 - i) {
            for (let k = 0; k < maxNum; k++) {
                space += '&nbsp;';
            }

            document.write(`${space} `);
        } else {
            result = String(v++);
            for (let k = 0; k < maxNum - result.length; k++) {
                space += '&nbsp;';
            }

            document.write(`${space}${result} `);
        }
    }
    document.write('<br/>');
}

/*--------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/


let line, maxNum;

// line = +prompt('줄수 : ');
// maxNum = String(line * line).length;

for (let i = 1, v = 1; i <= 3; i++) {
    for (let j = 1, space, result; j <= 6 - i; j++) {
        space = '';

        if (j < i) {
            for (let k = 0; k < 2; k++) {
                space += '&nbsp;';
            }

            document.write(`${space} `);
        } else {
            result = String(v++);
            for (let k = 0; k < 2 - result.length; k++) {
                space += '&nbsp;';
            }

            document.write(`${space}${result} `);
        }
    }
    document.write('<br/>');
}

/*-----------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/


// let line, maxNum;

// line = +prompt('줄수 : ');
// maxNum = String(line * line).length;

// for (let i = 1, v = 1; i <= line; i++) {
//     for (let j = 1, space, result; j <= line * 2 - i; j++) {
//         space = '';

//         if (j < i) {
//             for (let k = 0; k < maxNum; k++) {
//                 space += '&nbsp;';
//             }

//             document.write(`${space} `);
//         } else {
//             result = String(v++);
//             for (let k = 0; k < maxNum - result.length; k++) {
//                 space += '&nbsp;';
//             }

//             document.write(`${space}${result} `);
//         }
//     }
//     document.write('<br/>');
// }

/*-----------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/


let linem maxNum;

line = +prompt('줄수 : ');
maxNum = String(line * line).length;

for (let i = 1, v = 1; i <= line; i++) {
    for (let j = 1, space, result; j <= line * 2 - i; j++) {
        space = '';

        if (i < j) {
            for (let k = 0; k < maxNum k++) {
                space += '&nbsp;';
            }

            document.write(`${space} `);

        } else {
            result = String(v++);
            for (let k = 0; k < maxNum - result.length; k++) {
                space += '&nbsp;';
            }

            document.write(`&{space}${result} `);

        }

    }

    document.write('<br/>')
}

/*-----------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

let line, maxNum;

for (let i = 1, v = 1, st, ed; i <= 5; i++) {
    if (i <= 3) {
        st = 4 - i, ed = i - 2
    } else {
        st = i - 2, ed = 8 - i;
    }

    for (let j = 1, space, result; j <= ed; j++) {
        space = '';

        if (j < st) {
            for (let k = 0; k < 2; k++) {
                space += '&nbsp;';
            }

            document.write(`${space} `);

        } else {
            result = String(v++);
            for (let k = 0; k < 2 - result.length; k++) {
                space += '&nbsp;';
            }

            document.write(`${space}${result} `);

        }
    }

    document.write('<br/>');
}

/*-----------------------------------------------------------*/

/*
    중첩루프 행열 구하기
*/

let line, maxNum;
let m;

line = +prompt('줄수  : ');
m = (line + 1) / 2
maxNum = Srting(line * line / 2 + 1).length;

for (let i = 1, v = 1, st, ed; i <= line; i++) {
    if (i <= m) {
        st = m + 1 - i, ed = i + line - m;
    } else {
        st = i - (line - m), ed = line + m - i;
    }

    for (let j = 1, space, result; j <= ed; j++) {
        space = '';

        if (j < st) {
            for (let k = 0; k < maxNum; k++) {
                space += '&nbsp:';
            }

            document.write(`${space} `);

        } else {
            result = String(v++)
            for (let k = 0; k < maxNum - result.length; k++) {
                space += '&nbsp'
            }
        }

        document.write(`&{space}&{result} `);
    }

    document.write('<br/>');
}