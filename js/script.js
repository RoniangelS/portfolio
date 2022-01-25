/*
window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})*/



/*
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var sliderbttns = document.getElementsByClassName("sliderbttn");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        sliderbttns[i].className = sliderbttns[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    sliderbttns[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds

    

}

*/
var sliderIndex = 1;
showSlide(sliderIndex);

function currentSlide(n){
    showSlide(sliderIndex = n)
}
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    var sliderbttns = document.getElementsByClassName("sliderbttn");

    if (n > slides.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slides.length}
    for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none"}
    for (i = 0; i < sliderbttns.length; i++) {
        sliderbttns[i].className = sliderbttns[i].className.replace(" active", "");
    }
    slides[sliderIndex-1].style.display = "flex";
    sliderbttns[sliderIndex-1].className += " active"

}
function switchMenu() {
    var x = document.getElementById("navbarmenu");
    if(x.style.right === "1000px"){
        console.log(x)
        x.style.right = "20px";
    } else {3
        x.style.right = "1000px";
    }
}