// Navbar scrolled
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
});