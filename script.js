//btn-mobile toogle

const menuMobile = document.getElementsByClassName('fa-bars')[0];

menuMobile.addEventListener('click', () => {

    const nav = document.getElementsByClassName('menu-items')[0];
    nav.classList.toggle('active');
});