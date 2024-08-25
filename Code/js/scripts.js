// Add interactivity and behaviors to your site here

// Example: Smooth scroll to section when clicking on a link in the navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Add a simple alert on button click
document.querySelector('.btn').addEventListener('click', function() {
    alert('Welcome to Murana Kompany!');
});
