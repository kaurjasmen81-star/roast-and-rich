# ☕ Roast & Rich — Artisan Coffee Landing Page

A single-page, responsive landing page for a fictional artisan coffee brand, built with plain **HTML, CSS, and JavaScript** (no frameworks, no build step).


![Roast & Rich preview](about.jpg)

## ✨ Features

- **Animated preloader** — an SVG coffee cup fills up (and steams) while the page loads
- **Ambient coffee-bean particles** drifting through the hero section
- **Scroll-reveal animations** for sections as you scroll down the page
- **Responsive design** with a mobile hamburger menu
- **Interactive toasts** for "Order Now" and newsletter subscribe actions
- **Accordion FAQ** using native <details>/<summary>
- Respects prefers-reduced-motion for accessibility

## 🗂️ Project Structure

```
.
├── index.html      # Page markup
├── style.css        # All styling + animations
├── script.js        # Preloader, nav toggle, scroll reveal, toasts
├── assets/          # Images, icons, and GIFs (single flat folder)
└── README.md


## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox, keyframe animations, `clip-path`, media queries)
- Vanilla JavaScript (`IntersectionObserver`, no libraries)
- Google Fonts: Playfair Display & Lato

## 📌 Notes

- All images were resized/compressed for the web, so the whole project is under ~1.5 MB.
- Section content (About, Products, Experiences, FAQ) is placeholder copy for a fictional brand — feel free to replace it with your own.

## 📄 License

This is a personal/college minor project, free to use as a learning reference.
