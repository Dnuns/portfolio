//stick navbar

window.onscroll = function() {navPositionFixed()};

// Get the navbar
let navbar = document.getElementsByClassName('nav-items')[0];
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navPositionFixed() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

//btn-mobile toogle

const menuMobile = document.getElementsByClassName('fa-bars')[0];

const nav = document.getElementsByClassName('menu-items')[0];

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});

//menu toogle

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