// Smooth scroll for menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
function setHeroHeight() {
    const header = document.querySelector('.navbar');
    const hero = document.querySelector('.hero-section');
    if (header && hero) {
        const headerHeight = header.offsetHeight;
        hero.style.height = `calc(100vh - ${headerHeight}px)`;
    }
}

// Ustaw wysokość na starcie i przy zmianie rozmiaru okna
window.addEventListener('DOMContentLoaded', setHeroHeight);
window.addEventListener('resize', setHeroHeight);
