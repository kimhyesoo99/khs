'use strict';

let scrollTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
    if (scrollY > window.innerHeight / 3) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    let posY = parseInt(scrollY);

    let timeout = setInterval(() => {
        window.scroll(scrollX, posY -= 5);

        if (posY <= 0) {
            clearInterval(timeout);
        }
    }, 5);
});