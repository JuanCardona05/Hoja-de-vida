// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de proyectos y secciones importantes
document.querySelectorAll('.project-card, .cloud-project, .education-item, .highlight, .formation-item, .personal-info-content, .section-header, .skills-category').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Efecto de scroll suave en la navegación
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (navToggle && navMenu) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navToggle && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// Efecto parallax en el fondo
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgroundAnimation = document.querySelector('.background-animation');
    
    if (backgroundAnimation) {
        backgroundAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animación del indicador de scroll
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// Efecto de hover en los enlaces de proyectos
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        link.style.setProperty('--x', x + 'px');
        link.style.setProperty('--y', y + 'px');
    });
});

// Animación de escritura para el subtítulo
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Iniciar después de que cargue la página
    setTimeout(typeWriter, 1500);
}

// Efecto de luz en los botones
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        btn.style.setProperty('--mouse-x', x + 'px');
        btn.style.setProperty('--mouse-y', y + 'px');
    });
});

// Navegación activa según scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log('%cHecho por Juan Gabriel Cardona', 'background: #111827; color: #f8fafc; padding: 12px 14px; border-radius: 10px 10px 0 0; font-size: 15px; font-weight: 700;');
console.log('%cGitHub: https://github.com/JuanCardona05', 'color: #60a5fa; font-size: 13px; font-weight: 600;');
console.log('%cDiseño elegante creado con cuidado y atención al detalle.', 'color: #a1a1aa; font-size: 12px; padding: 10px 14px; border: 1px solid #334155; border-radius: 0 0 10px 10px; background: #0f172a;');

const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

window.addEventListener('mousemove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});

window.addEventListener('mousedown', () => {
    customCursor.classList.add('cursor-click');
});

window.addEventListener('mouseup', () => {
    customCursor.classList.remove('cursor-click');
});

const hoverTargets = document.querySelectorAll('a, button, .btn, .project-link, .nav-link, input, textarea');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursor-active');
    });
    target.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursor-active');
    });
});
