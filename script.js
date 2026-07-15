// =============================================================
// Roast & Rich — interactions
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Preloader: hide once the page has finished loading ----
    const preloader = document.getElementById('preloader');
    const hidePreloader = () => preloader && preloader.classList.add('hide');
    window.addEventListener('load', () => setTimeout(hidePreloader, 1400));
    // Safety net in case the load event is delayed by a slow asset
    setTimeout(hidePreloader, 3500);

    // ---- Mobile nav toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        // Close the menu after tapping a link (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---- Scroll reveal ----
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('reveal-visible'));
    }

    // ---- Toast notifications for order / subscribe actions ----
    const toast = document.getElementById('toast');
    let toastTimer;
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }
    document.querySelectorAll('.js-toast').forEach(btn => {
        btn.addEventListener('click', () => {
            showToast(btn.dataset.toast || 'Done!');
        });
    });

    // ---- Newsletter form (static site — no backend, just friendly feedback) ----
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("You're on the list — welcome to Roast & Rich! ☕");
            newsletterForm.reset();
        });
    }

    // ---- Footer year ----
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
