var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 6) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});