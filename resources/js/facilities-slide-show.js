var slideIndex = 0;
var timeout;
carousel();

function plusDivs() {
    clearTimeout(timeout);
    carousel(); 
}

function currentDiv(n) {
    clearTimeout(timeout);
    slideIndex = n;
    carousel();
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
   
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    
    slideIndex++;

    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-white";
    
    timeout = setTimeout(carousel, 3000); // Change image every 3 seconds
}