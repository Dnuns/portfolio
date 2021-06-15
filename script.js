//btn-mobile toogle

const menuMobile = document.getElementsByClassName('fa-bars')[0];

const nav = document.getElementsByClassName('menu-items')[0];

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
});

//typing effect

let i = 0, welcomeText;

welcomeText = "I'm a junior full stack developer" ;

function typing(){   

    if(i < welcomeText.length){

        document.getElementsByClassName('wel-cont-txt')[0].innerHTML += welcomeText.charAt(i);
        
        i++;
    }

    setTimeout(typing,50);

}

typing();