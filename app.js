const mobileNav = document.querySelector('.mobile__menu');
const closeBtn = document.querySelector('.close__btn');
const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});