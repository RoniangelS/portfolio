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