document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const sections = document.querySelectorAll('section');

    // 1. Menünün arkaplanını kaydırmaya göre değiştirme
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 2. Kaydırmaya göre menüdeki aktif linki belirleme
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // 3. Bölümlerin ekrana geldikçe animasyonla belirmesi
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15 // Bölümün %15'i görününce animasyon tetiklenir
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});

// --- MOBİL MENÜ ---
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.navbar-nav');

    // Hamburger ikonuna tıklandığında
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    });

    // Menüdeki bir linke tıklandığında menüyü kapat
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        });
    });
});