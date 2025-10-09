document.addEventListener('DOMContentLoaded', function() {
    
    // Sayfa kaydırıldığında menüdeki aktif linki güncelleyen fonksiyon
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Navbar yüksekliğini de hesaba katıyoruz
            if (pageYOffset >= sectionTop - 100) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});