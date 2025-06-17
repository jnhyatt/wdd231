const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
