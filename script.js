document.addEventListener('DOMContentLoaded', () => {

    // 1. MAGNETIC REFLEX EFFECT
    // This makes buttons and cards "lean" towards your cursor
    const interactiveElements = document.querySelectorAll('.btn, .feature-card, .logo, .step');

    interactiveElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Moves the element 15% towards the mouse and scales it up
            el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.03)`;
        });

        el.addEventListener('mouseleave', () => {
            // Smoothly snaps back to center
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

    // 2. SMOOTH HEADER TRANSITION
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. SMOOTH FORM RESPONSE
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        
        // Sudden change prevention: animate the text and color
        btn.style.opacity = "0.7";
        btn.innerHTML = "ID_VERIFYING...";
        
        setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.background = "#28a745"; // Success green
            btn.style.boxShadow = "0 0 20px rgba(40, 167, 69, 0.4)";
            btn.innerHTML = "ENROLLMENT GRANTED ✓";
        }, 1500);
    });

    // 4. SMOOTH SCROLL REVEAL
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE LOGIC ---
    const body = document.documentElement;
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-switch';
    themeBtn.innerHTML = '🌓'; // Icon for toggle
    document.body.appendChild(themeBtn);

    // Set default theme to Dark
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }
    body.setAttribute('data-theme', localStorage.getItem('theme'));

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Sudden change prevention: CSS transition handles the fade
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Visual feedback on the button
        themeBtn.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => themeBtn.style.transform = 'scale(1) rotate(0deg)', 200);
    });

    // --- MAGNETIC REFLEX (Updated for dynamic colors) ---
    const magneticElements = document.querySelectorAll('.btn, .feature-card, .theme-switch');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });
});