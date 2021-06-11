let menuMobile = document.getElementsByClassName('btn-mobile');

function toogleMenu () {
    let nav = document.getElementsByClassName('nav-items');
    nav.classList.toggle('active');
}

menuMobile.addEventListener('click', toogleMenu);