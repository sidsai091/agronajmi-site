// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ==================== CERTIFICATIONS CAROUSEL ====================
const certTrack = document.getElementById('certTrack');
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');

if (certTrack && certPrev && certNext) {
  const scrollAmount = 320;

  certPrev.addEventListener('click', () => {
    certTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  certNext.addEventListener('click', () => {
    certTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// ==================== GALLERY LIGHTBOX ====================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-src');
    lightboxImage.src = src;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
    closeLightbox();
  }
});

// ==================== SCROLL TO TOP ====================
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== SCROLL ANIMATIONS (Intersection Observer) ====================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-fade-up').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// ==================== SKILL BAR ANIMATION ====================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

skillBars.forEach(bar => {
  bar.style.animationPlayState = 'paused';
  skillObserver.observe(bar);
});

// ==================== NEWSLETTER FORM (Placeholder) ====================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('.newsletter-input').value;
    if (email) {
      alert('Thank you for subscribing! You will receive updates at: ' + email);
      newsletterForm.reset();
    }
  });
}

// ==================== CERTIFICATION IMAGE LIGHTBOX ====================
const certCards = document.querySelectorAll('.cert-card');

certCards.forEach(card => {
  card.addEventListener('click', () => {
    const imageUrl = card.getAttribute('data-image');
    if (imageUrl && lightbox && lightboxImage) {
      lightboxImage.src = imageUrl;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });
});

// ==================== COMPANY BACKGROUND TOGGLE ====================
function toggleBackground(button) {
  const card = button.closest('.background-card');
  const allCards = document.querySelectorAll('.background-card');

  // Close all other cards
  allCards.forEach(otherCard => {
    if (otherCard !== card && otherCard.classList.contains('expanded')) {
      otherCard.classList.remove('expanded');
    }
  });

  // Toggle current card
  card.classList.toggle('expanded');
}
