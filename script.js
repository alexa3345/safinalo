const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-nav');
const xmark = document.querySelector('.xmark');

burger.addEventListener('click', () => {

    menu .classList.add('show');

    xmark.style.display = 'block';
    burger.style.display = 'none';

})


xmark.addEventListener('click', () => {

    menu .classList.remove('show');

    xmark.style.display = 'none';
    burger.style.display = 'block';

})
