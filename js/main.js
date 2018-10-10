// burger menu function

function menu() {
	var menu = document.getElementById("nav");
	if (menu.style.right == "-58px") {
		menu.style.right = "-378px";
	} else {
		menu.style.right = "-58px";
	}
}


// scroll to section function

$(document).ready(function() {
	$("header a").mPageScroll2id();
});


// "our works" section modal window

var a, b;
var mod = document.querySelectorAll(".works-item img");

for (a = 0; a < mod.length; a++) {
	mod[a].onclick = function () {
		var openModal = this.parentElement.querySelector(".modal");
		openModal.classList.add("show");
	}
}

var closeMod = document.querySelectorAll(".modal");

for (b = 0; b < closeMod.length; b++) {
	closeMod[b].onclick = function () {
		var closeModal = this.parentElement.querySelector(".modal");
		closeModal.classList.remove("show");
	}
}


// "our services" section item overlay function

var i, j;
var over = document.querySelectorAll(".more_button-overlay");

for (i = 0; i < over.length; i++) {
	over[i].onclick = function () {
		var openOverlay = this.parentElement.querySelector(".si-overlay");
		var hideBgText = this.parentElement.querySelector(".si_text-wrapper");
		var hideBtn = this.parentElement.querySelector(".more_button-overlay");
		openOverlay.classList.add("show");
		hideBgText.classList.add("hide");
		hideBtn.classList.add("hide");
	}
}

var closeOver = document.querySelectorAll(".close_button-overlay");

for (j = 0; j < closeOver.length; j++) {
	closeOver[j].onclick = function () {
		var closeOverlay = this.parentElement.parentElement.querySelector(".si-overlay");
		var showBgText = this.parentElement.parentElement.querySelector(".si_text-wrapper");
		var showBtn = this.parentElement.parentElement.querySelector(".more_button-overlay");
		closeOverlay.classList.remove("show");
		showBgText.classList.remove("hide");
		showBtn.classList.remove("hide");
	}
}


// slider functions "about us" and "testimonial" slider section

var slideIndex = 1;
var slideTestiIndex = 1;
showSlides(slideIndex);
showTestiSlides(slideTestiIndex);

function plusSlides(n) {
	showTestiSlides(slideTestiIndex += n);
}

function currentAboutUsSlide(n) {
	showSlides(slideIndex = n);
}

function currentTestimonialSlide(n) {
	showTestiSlides(slideTestiIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("about_us-info");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");		
		}
	slides[slideIndex - 1].style.display = "inline-block";
	dots[slideIndex - 1].className += " active";
}

function showTestiSlides(n) {
	var i;
	var testiSlides = document.getElementsByClassName("testi_content-wrapper");
	var dots = document.getElementsByClassName("testi_dot");
	if (n > testiSlides.length) {slideTestiIndex = 1}
	if (n < 1) {slideTestiIndex = testiSlides.length}
		for (i = 0; i < testiSlides.length; i++) {
			testiSlides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");		
		}
	testiSlides[slideTestiIndex - 1].style.display = "inline-block";
	dots[slideTestiIndex - 1].className += " active";
}
