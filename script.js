/*==========================================
        MENU HAMBURGER
==========================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

/*==========================================
        ACTIVE NAVBAR
==========================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');

        }

    });

    /* Tutup menu saat scroll */

    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');

};

/*==========================================
        HEADER SHADOW
==========================================*/

window.addEventListener("scroll",function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(232,160,191,.25)";

    }

    else{

        header.style.boxShadow =
        "0 5px 15px rgba(232,160,191,.10)";

    }

});

/*==========================================
        BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==========================================
        FADE ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(

".about-content,.education-card,.experience-card,.project-card,.certificate-card,form"

);

hiddenElements.forEach((el)=>observer.observe(el));

/*==========================================
        TYPING EFFECT
==========================================*/

const text = [
"Fresh Graduate Sistem Informasi",
"Web Developer",
"UI/UX Designer",
"Database Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typing(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0,++index);

    document.querySelector(".home-content h2").innerHTML =
    letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(typing,1500);

    }

    else{

        setTimeout(typing,80);

    }

})();

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href && !href.startsWith("#")){

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            },500);

        }

    });

});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    navbar.classList.toggle("active");

    if(menuIcon.classList.contains("fa-bars")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

}