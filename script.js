// Navbar scrolled
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
});

const menu = document.querySelector('header nav ul');
const toggle = document.querySelector('header nav .menu-toggle input');

toggle.addEventListener('click', function() {
    menu.classList.toggle('slide');
});