// Smooth scroll for menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
