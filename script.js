// Get the navigation bar
const navbar = document.getElementById('navbar');

// Add an event listener to detect scroll
window.onscroll = function() {
    // When the user scrolls, we change the background color of the navbar
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
