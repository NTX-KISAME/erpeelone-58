const navbar = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navbar.classList.replace('bg-transparent', 'bg-dark');
  } else {
    navbar.classList.replace('bg-dark', 'bg-transparent');
  }
  navbar.classList.toggle('scrolled', this.window.scrollY > 0);
});

const moreBtn = document.getElementById('more-btn');
const imgs = document.querySelector('section#galeri div.container div.images');

moreBtn.addEventListener('click', function () {
  imgs.classList.toggle('images-all');
  if (moreBtn.innerHTML.startsWith('Lebih banyak')) {
    moreBtn.innerHTML = 'Lebih sedikit <i class="bi bi-caret-up-fill"></i>';
  } else {
    moreBtn.innerHTML = 'Lebih banyak <i class="bi bi-caret-down-fill"></i>';
  }
});