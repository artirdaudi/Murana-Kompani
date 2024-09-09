// Toggle the navbar on mobile view
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    // Store the slide indexes for each slideshow
    const slideshows = {};

    // Initialize the slideshows
    document.querySelectorAll('.slideshow-container').forEach((container) => {
        const slideshowId = container.id;
        slideshows[slideshowId] = {
            currentIndex: 0,
            slides: container.getElementsByClassName('slide')
        };
        showSlides(slideshowId, slideshows[slideshowId].currentIndex);
    });

    // Function to show the slides
    function showSlides(slideshowId, n) {
        const slideshow = slideshows[slideshowId];
        const slides = slideshow.slides;
        if (n >= slides.length) slideshow.currentIndex = 0;
        if (n < 0) slideshow.currentIndex = slides.length - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideshow.currentIndex].style.display = 'block';
    }

    // Function to handle next and previous controls
    window.plusSlides = function(n, slideshowId) {
        slideshows[slideshowId].currentIndex += n;
        showSlides(slideshowId, slideshows[slideshowId].currentIndex);
    };

   
});