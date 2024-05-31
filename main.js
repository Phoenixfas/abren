

// JavaScript to hide the loader and show the main content
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Delay for the loader to display before hiding
    setTimeout(function() {
        // Fade out loader
        loader.classList.add("animate-fadeOut");

        // Fade in main content after loader fades out
        setTimeout(function() {
            loader.style.display = "none"; // Ensure loader is hidden after fade out
            mainContent.classList.remove("opacity-0"); // Remove initial opacity
            mainContent.classList.add("animate-fadeIn");
        }, 1000); // Duration of the fade-out animation
    }, 3000); // Adjust the timeout duration as needed
})

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');


    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }


    }

}


// TOGGLE SHOW MENU

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// SHOW MENU
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// HIDE MENU
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// BLUR TO HEADER ON SCROLL

const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



var nav = document.getElementById("mobile-nav")
var openNav = document.getElementById("nav-toggle")
var closeNav = document.getElementById("nav-close")

openNav.addEventListener("click", () => {
    nav.style.transform = "translateX(0)"
})

closeNav.addEventListener("click", () => {
    nav.style.transform = "translateX(100%)"
})