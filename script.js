let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const pageNumber = document.getElementById("pageNumber");
const progress = document.querySelector(".progress");


function showSlide(index) {

    if (index >= slides.length) {
        index = 0;
    }

    if (index < 0) {
        index = slides.length - 1;
    }

    currentSlide = index;

    slides.forEach((slide, i) => {

        slide.classList.remove("active");

        if (i === currentSlide) {
            slide.classList.add("active");
        }

    });

    pageNumber.textContent =
        `${currentSlide + 1} / ${slides.length}`;

    progress.style.width =
        `${((currentSlide + 1) / slides.length) * 100}%`;
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function prevSlide() {
    showSlide(currentSlide - 1);
}


/* DÙNG PHÍM MŨI TÊN */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        prevSlide();
    }

});


/* CHẠM / VUỐT TRÊN ĐIỆN THOẠI */

let startX = 0;

document.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;

});


document.addEventListener("touchend", function(event) {

    let endX = event.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextSlide();
    }

    if (endX - startX > 50) {
        prevSlide();
    }

});


showSlide(0);
