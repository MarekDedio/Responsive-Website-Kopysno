const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

const stickyHeader = () => {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Enhanced Lightbox for gallery
const initLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    // Create modal elements if they don't exist
    if (!document.getElementById('lightbox-modal')) {
        const modal = document.createElement('div');
        modal.id = 'lightbox-modal';
        modal.style.cssText = `
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.95);
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
        `;

        const img = document.createElement('img');
        img.style.cssText = `
            max-width: 90%;
            max-height: 80%;
            border-radius: 5px;
            box-shadow: 0 0 40px rgba(0,0,0,0.5);
            transform: scale(0.9);
            transition: transform 0.3s;
        `;

        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            font-weight: bold;
        `;

        modal.appendChild(img);
        modal.appendChild(closeBtn);

        const closeModal = () => {
            modal.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        };

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === closeBtn) {
                closeModal();
            }
        });

        document.body.appendChild(modal);

        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const src = item.querySelector('img').src;
                img.src = src;
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 10);
            });
        });
    }
}

// Parallax Effect for Hero
const parallaxHero = () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
}

const app = () => {
    navSlide();
    stickyHeader();
    smoothScroll();
    initLightbox();
    parallaxHero();

    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
}

document.addEventListener('DOMContentLoaded', app);
