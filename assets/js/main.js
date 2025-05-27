document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll dla linków nawigacyjnych
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });

                // Zamknij menu hamburgera po kliknięciu w link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Aktualny rok w stopce
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
