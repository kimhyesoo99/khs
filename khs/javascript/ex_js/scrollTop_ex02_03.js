'use strict';

const scrollTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 3) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    const stopScroll = setInterval(() => {
        window.scrollBy(0, -5)

        if (window.scrollY <= 0) clearInterval(stopScroll);
    }, 5);
});