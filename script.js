window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
});


const toggle = document.querySelector('header nav .menu-toggle input');

toggle.addEventListener('click', function () {
    const menu = document.querySelector('header nav ul');
    menu.classList.toggle('slide');
});


const showMore = document.querySelector('#galery .container a');

showMore.addEventListener('click', function() {
    const images = document.querySelector('#galery .container div');
    images.classList.toggle('all-images');

    const btn = document.getElementById('show-more-btn');
    if (btn.innerHTML == 'Lebih banyak') {
        btn.innerHTML = 'Lebih sedikit';
    } else {
        btn.innerHTML = 'Lebih banyak';
    }
});