'use strict'

let food;

if (food = prompt('먹고싶은 음식이 무엇인가요?', '예시) 교회밥, 일식, 중식, 양식')) {
    switch (food) {
        case '교회밥':
            alert('오늘 교회밥은 하이라이스 입니다. 맛있게 드세요');
            break;
        case '일식':
            alert('초밥을 좋아하시는 군요');
            break;
        case '중식':
            alert('자장면을 좋아하시는군요');
            break;
        case '양식':
            alert('돈까스를 좋아하시는군요');
            break;
        default:
            alert('예시에 있는 것만 입력해주세요');
    }
} else {
    alert('점심을 안드실건가요?');
};
lo