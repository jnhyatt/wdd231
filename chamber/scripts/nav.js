const hamburger = document.querySelector('#open-menu');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
