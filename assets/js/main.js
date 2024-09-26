// SCROLL BUTTON START
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'; // Show button
    } else {
        backToTopBtn.style.display = 'none'; // Hide button
    }
};

// Scroll to top on button click
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

$(document).ready(function(){
    $(".partner-slider").owlCarousel({
        items: 12,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin:20 ,
        autoplayTimeout: 1000,
        autoplaySpeed: 1500,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});
