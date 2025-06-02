// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const letters = document.querySelectorAll('.letter');
    
    // Animation des lettres
    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.animation = 'none';
                setTimeout(() => {
                    letter.style.animation = 'bounce 0.75s ease infinite alternate';
                }, 50);
            }, index * 100);
        });
    }, 500);
    
    // Disparition du loader
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }, 1500);
});

// Curseur personnalisé
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Effets sur le curseur
const hoverElements = document.querySelectorAll('a, button, .skill, .project-card, .filter-btn, .navbar-toggle, .close-lightbox, .dot, .scroll-top');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-follower-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-follower-hover');
    });
});

// Mode sombre/clair
const themeSwitch = document.querySelector('.theme-switch input');
themeSwitch.addEventListener('change', (e) => {
    if(e.target.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});

// Navigation
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.navbar-links').forEach(link => {
    link.addEventListener('click', () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

// Changement de style de la navbar au scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation de texte typé
const typedTextSpan = document.querySelector('.typed-text');
const cursorBlinkSpan = document.querySelector('.cursor-blink');
const textArray = ['Mohamed SARE', 'Exigeant', 'Développeur', 'Designer', 'Créatif'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Démarrer l'animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay + 250);
});

// Animation au scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .skill-bar, .circle-progress, .section-title, .about-img, .about-text, .skill-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.classList.add('show');
            
            // Animer les barres de compétences
            if(element.classList.contains('skill-bar')) {
                const progressBar = element.querySelector('.progress-bar');
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
            }
            
            // Animer les cercles de compétences
            if(element.classList.contains('circle-progress')) {
                const circleFill = element.querySelector('.circle-fill');
                const value = element.getAttribute('data-value');
                circleFill.style.strokeDasharray = '0, 100';
                setTimeout(() => {
                    circleFill.style.strokeDasharray = value + ', 100';
                }, 200);
            }
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Projets
const projects = [
    {
        title: "Site E-commerce",
        category: "web",
        image: "ecom4.jpeg",
        description: "Un site e-commerce complet avec panier, paiement et système d'authentification."

    },
    {
        title: "Site E-commerce",
        category: "web",
        image: "ecom1.jpeg",
        description: "Un site e-commerce complet avec panier, paiement et système d'authentification et sécurisé."
    },
    {
        title: "Site d'apprentissage de'AI",
        category: "web",
        image: "ecom2.jpeg",
        description: "Un site d'apprentissage de l'IA avec des cours et des exercices pratiques qui vous permettra de realiser tous ce que vous voulez avec l'IA, rentabiliser votre entreprise et gagner du temps."
    },
    {
        title: "Site E-commerce",
        category: "web",
        image: "ecom3.jpeg",
        description: "Un site e-commerce complet pour l'immobilier."
    },
    {
        title: "Application de gestion de   Tontine",
        category: "web",
        image: "ecom6.jpeg",
        description: "Application de gestion de Tontine simple, efficace et sécurisée, qui permet de gérer les tontines et les cotisations des membres, et de recevoir des notifications pour les cotisations."
    },
    {
        title: "UI Dashboard",
        category: "ui",
        image: "bac.png",
        description: "Interface utilisateur moderne pour un tableau de bord analytique d'un site e-commerce."
    },
    {
        title: "FasoAide",
        category: "perso",
        image: "ecom5.jpeg",
        description: "Une plateforme Moderne d'apprentissage d'entraide pour les jeunes Burkinabé, qui permet de partager des connaissances et des expériences entre les jeunes, et de se connecter avec des personnes qui ont les mêmes intérêts."
    },
    {
        title: "Jeu en C",
        category: "perso",
        image: "pendu.png",
        description: "Jeu du pendu développé en C avec interface console. Ce projet s'inscrit dans le cadre de mon apprentissage du langage C, C'est un projet choisi par notre Prof."
    },
    {
        title: "Mon portfolio",
        category: "perso",
        image: "portfolio.png",
        description: "Portfolio  tres interactif et responsive (ce site)."
    }
];

const projectsContainer = document.querySelector('.projects-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Gestion des erreurs d'images
function handleImageError(img) {
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/600x400?text=Image+non+disponible';
    };
}

// Afficher les projets
function displayProjects(filter = 'all') {
    projectsContainer.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img" onerror="handleImageError(this)">
            <div class="project-overlay">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-category">${project.category.toUpperCase()}</p>
                <a href="#" class="project-link" data-title="${project.title}" data-image="${project.image}" data-description="${project.description}">Voir plus</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
    
    // Lightbox
    setupLightbox();
}

// Filtrage des projets
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProjects(button.getAttribute('data-filter'));
    });
});

// Lightbox
function setupLightbox() {
    const projectLinks = document.querySelectorAll('.project-link');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImg.src = link.getAttribute('data-image');
            lightboxImg.alt = link.getAttribute('data-title');
            lightboxTitle.textContent = link.getAttribute('data-title');
            lightboxDescription.textContent = link.getAttribute('data-description');
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialisation des projets
displayProjects();

// Citations
const quoteSlides = document.querySelectorAll('.quote-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    quoteSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + quoteSlides.length) % quoteSlides.length;
    quoteSlides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Rotation automatique des citations
setInterval(nextSlide, 5000);

// Formulaire de contact
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.querySelector('.submit-btn');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        submitBtn.classList.add('loading');
        const formData = new FormData(form);
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formMessage.textContent = "Votre message a bien été envoyé ! Je vous répondrai dans les plus brefs délais.";
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                form.reset();
                
                // Scroll to the message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
            }
        }).catch(() => {
            formMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
        }).finally(() => {
            submitBtn.classList.remove('loading');
        });
    }
});

function validateForm() {
    let isValid = true;
    
    // Validation du nom
    if(nameInput.value.trim() === '') {
        setError(nameInput, 'Le nom est requis');
        isValid = false;
    } else {
        setSuccess(nameInput);
    }
    
    // Validation de l'email
    if(emailInput.value.trim() === '') {
        setError(emailInput, 'L\'email est requis');
        isValid = false;
    } else if(!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, 'Veuillez entrer un email valide');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }
    
    // Validation du sujet
    if(subjectInput.value.trim() === '') {
        setError(subjectInput, 'Le sujet est requis');
        isValid = false;
    } else {
        setSuccess(subjectInput);
    }
    
    // Validation du message
    if(messageInput.value.trim() === '') {
        setError(messageInput, 'Le message est requis');
        isValid = false;
    } else {
        setSuccess(messageInput);
    }
    
    return isValid;
}

function setError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.opacity = '1';
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Bouton remonter
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation de particules
const canvas = document.getElementById('particles-js');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(108, 99, 255, ${Math.random() * 0.6 + 0.1})`;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
for(let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Optimisation : ne vérifier que les particules suivantes
        for(let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if(distance < 100) {
                ctx.strokeStyle = `rgba(108, 99, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();