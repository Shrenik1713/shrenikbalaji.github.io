// Portfolio Data
const portfolioData = {
  "personalInfo": {
    "name": "Shrenik Balaji Sirimilla",
    "tagline": "Computer Science Student",
    "subtitle": "AI & ML Enthusiast",
    "bio": "Passionate Computer Science student graduating in 2025, specializing in Artificial Intelligence and Machine Learning. Experienced in building scalable web applications and exploring cutting-edge technologies. Always eager to learn, collaborate, and contribute to meaningful projects that solve real-world problems.",
    "email": "work.shrenikbalaji@gmail.com",
    "phone": "+91 8919627590",
    "location": "Hyderabad, Telangana, India"
  },
  "skills": [
    {"name": "JavaScript", "category": "programming", "icon": "fab fa-js-square"},
    {"name": "Python", "category": "programming", "icon": "fab fa-python"},
    {"name": "Java", "category": "programming", "icon": "fab fa-java"},
    {"name": "C++", "category": "programming", "icon": "fas fa-code"},
    {"name": "TypeScript", "category": "programming", "icon": "fas fa-file-code"},
    {"name": "React", "category": "frontend", "icon": "fab fa-react"},
    {"name": "Vue.js", "category": "frontend", "icon": "fab fa-vuejs"},
    {"name": "Angular", "category": "frontend", "icon": "fab fa-angular"},
    {"name": "HTML5", "category": "frontend", "icon": "fab fa-html5"},
    {"name": "CSS3", "category": "frontend", "icon": "fab fa-css3-alt"},
    {"name": "Sass", "category": "frontend", "icon": "fab fa-sass"},
    {"name": "Node.js", "category": "backend", "icon": "fab fa-node-js"},
    {"name": "Express", "category": "backend", "icon": "fas fa-server"},
    {"name": "Django", "category": "backend", "icon": "fas fa-database"},
    {"name": "MongoDB", "category": "backend", "icon": "fas fa-leaf"},
    {"name": "PostgreSQL", "category": "backend", "icon": "fas fa-database"},
    {"name": "TensorFlow", "category": "ai", "icon": "fas fa-brain"},
    {"name": "PyTorch", "category": "ai", "icon": "fas fa-fire"},
    {"name": "scikit-learn", "category": "ai", "icon": "fas fa-chart-line"},
    {"name": "OpenCV", "category": "ai", "icon": "fas fa-eye"}
  ],

  blogs: [
    {
      title: "Building Responsive Layouts",
      description: "Tips and patterns for mobile-first web design using CSS Grid and Flexbox.",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", // Replace with your image file
      date: "Aug 2025",
      link: "blog-post-1.html"
    },
    {
      title: "Intro to Neural Networks",
      description: "Demystifying the basics of neural networks for CS students.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      date: "Aug 2025",
      link: "blog-post-2.html"
    },
    {
      title: "Landing Your First Tech Job",
      description: "Strategies and resources for students seeking their first developer position.",
      category: "career",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "Sep 2025",
      link: "blog-post-3.html"
    }
  ],

  "projects": [
    {
      "title": "Product Recommendation System",
      "description": "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Responsive design with modern UI/UX principles.",
      "technologies": ["React", "Node.js", "Express", "MySQL", "Stripe API"],
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "liveDemo": "#",
      "github": "#",
      "featured": true,
      "category": "web"
    },
    {
      "title": "Optical Character Recognition",
      "description": "Data visualization dashboard for social media metrics with real-time updates and predictive analytics for engagement optimization.",
      "technologies": ["Python", "Flask", "D3.js", "PostgreSQL", "Redis"],
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "liveDemo": "#",
      "github": "#",
      "featured": false,
      "category": "ai"
    },
    {
      "title": "AI Chatbot for Travel Itinerary",
      "description": "Cross-platform mobile application providing detailed weather forecasts with location-based services and interactive maps.",
      "technologies": ["React Native", "JavaScript", "Weather API", "Maps API"],
      "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      "liveDemo": "#",
      "github": "#",
      "featured": false,
      "category": "web"
    }
  ]
};

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const navbar = document.getElementById('navbar');
const loadingScreen = document.getElementById('loading-screen');
const contactForm = document.querySelector('.contact-form');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const blogSearch = document.getElementById('blogSearch');
const blogCategory = document.getElementById('blogCategory');
// const blogCards = document.querySelectorAll('.blog-card');

// State
let currentTheme = 'light';
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  initializeApp();

const timelineItems = document.querySelectorAll('.timeline-item');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScrollReveal() {
  timelineItems.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('resize', handleScrollReveal); // For responsive designs

// Optionally call once on load to set initial state
document.addEventListener('DOMContentLoaded', handleScrollReveal);
});

function initializeApp() {
  setTimeout(() => loadingScreen.classList.add('hidden'), 1000);
  initializeTheme();
  setupEventListeners();
  populateSkills();
  populateProjects();
  populateBlogs();
  handleScroll();
  setupIntersectionObserver();
}

// === THEME TOGGLE ===
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateThemeToggle();
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currentTheme = 'dark';
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    updateThemeToggle();
  }
}
function updateThemeToggle() {
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeToggle();
}

// === EVENT LISTENERS ===
function setupEventListeners() {
  mobileMenu?.addEventListener('click', toggleMobileMenu);
  themeToggle?.addEventListener('click', toggleTheme);
  window.addEventListener('scroll', handleScroll);

  // Robust handler for all in-page anchor links, including 'Get In Touch' button
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        const offsetTop = target.offsetTop - 70; // adjust for fixed navbar
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        if (isMenuOpen) closeMobileMenu();
      }
    });
  });

  contactForm?.addEventListener('submit', handleContactForm);

  document.querySelectorAll('.skills-section .filter-btn').forEach(btn => {
    btn.addEventListener('click', handleSkillsFilter);
  });
  document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', handleProjectsFilter);
  });
  if (blogSearch && blogCategory) {
    blogSearch.addEventListener('input', filterBlogs);
    blogCategory.addEventListener('change', filterBlogs);
  }
  document.addEventListener('click', function(e) {
    if (isMenuOpen && !navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && isMenuOpen) closeMobileMenu();
  });
}

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  navMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
function closeMobileMenu() {
  isMenuOpen = false;
  navMenu.classList.remove('active');
  mobileMenu.classList.remove('active');
}

// === SCROLL EFFECTS + NAV ===
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
}
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// === SKILLS SECTION DYNAMIC CARDS ===
function populateSkills() {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = '';
  portfolioData.skills.forEach(skill => {
    if (!skill.icon) return;
    const skillCard = document.createElement('div');
    skillCard.className = `skill-card skill-${skill.category}`;
    skillCard.setAttribute('data-category', skill.category);
    skillCard.innerHTML = `
      <i class="${skill.icon} skill-icon" aria-hidden="true"></i>
      <span class="skill-name">${skill.name}</span>
    `;
    skillsGrid.appendChild(skillCard);
  });
}
function handleSkillsFilter(e) {
  const filter = e.target.getAttribute('data-filter');
  const skillCards = document.querySelectorAll('.skill-card');
  document.querySelectorAll('.skills-section .filter-btn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  skillCards.forEach(card => {
    if (filter === 'all' || card.classList.contains(`skill-${filter}`)) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease-out';
    } else {
      card.style.display = 'none';
    }
  });
}

// === PROJECTS SECTION ===
function populateProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  portfolioData.projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = `project-card project-${project.category} ${project.featured ? 'featured' : ''}`;
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.liveDemo}" class="project-link project-link--primary" target="_blank">Live Demo</a>
          <a href="${project.github}" class="project-link project-link--secondary" target="_blank">GitHub</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectElement);
  });
}
function handleProjectsFilter(e) {
  const filter = e.target.getAttribute('data-filter');
  const projectItems = document.querySelectorAll('.project-card');
  document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  projectItems.forEach(item => {
    let shouldShow = false;
    if (filter === 'all') shouldShow = true;
    else if (filter === 'featured' && item.classList.contains('featured')) shouldShow = true;
    else if (item.classList.contains(`project-${filter}`)) shouldShow = true;
    item.style.display = shouldShow ? 'block' : 'none';
    if (shouldShow) item.style.animation = 'fadeIn 0.3s ease-out';
  });
}

// === BLOG SECTION FILTER/SUBJECT SEARCH ===
function filterBlogs() {
  const searchVal = blogSearch.value.toLowerCase();
  const categoryVal = blogCategory.value;
  document.querySelectorAll('.blog-card').forEach(card => {
    const matchesCategory = categoryVal === "all" || card.dataset.category === categoryVal;
    const matchesSearch = card.querySelector('.blog-title').textContent.toLowerCase().includes(searchVal)
      || card.querySelector('.blog-desc').textContent.toLowerCase().includes(searchVal);
    card.style.display = matchesCategory && matchesSearch ? "block" : "none";
  });
}

function populateBlogs() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) return;
  blogGrid.innerHTML = '';
  portfolioData.blogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.setAttribute('data-category', blog.category);
    blogCard.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" class="blog-img" loading="lazy">
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-desc">${blog.description}</p>
      <span class="blog-meta">${capitalize(blog.category)} • ${blog.date}</span>
      <a href="${blog.link}" class="blog-read">Read More</a>
    `;
    blogGrid.appendChild(blogCard);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// === CONTACT FORM ===
function handleContactForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  if (!data.name || !data.email || !data.message) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }
  if (!isValidEmail(data.email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }
  showNotification('Thank you! Your message has been sent successfully.', 'success');
  e.target.reset();
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    padding: 16px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
    background: ${type === 'success' ? '#22c55e' : '#ef4444'};
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    if (notification.parentElement) notification.remove();
  }, 5000);
}

// === SECTION REVEAL ANIMATIONS & INTERSECTION ===
function setupIntersectionObserver() {
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate-in');
    });
  }, observerOptions);
  document.querySelectorAll('.skill-card, .project-card, .timeline-item, .about-text').forEach(el => {
    observer.observe(el);
  });
}

// === TYPING EFFECT ===
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
window.addEventListener('load', function() {
  const heroTitle = document.querySelector('.hero-title .highlight');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150);
    }, 1500);
  }
});

// TYPING EFFECT (for hero "highlight" text)
const heroPhrases = ["Shrenik", "a Developer", "an AI Enthusiast", "a Learner"];
const typingText = document.querySelector('.hero-title .highlight');
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeCycle() {
  if (!typingText) return;
  const currentPhrase = heroPhrases[phraseIndex];
  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex++);
    if (letterIndex > currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1000;
    } else {
      typingSpeed = 150;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % heroPhrases.length;
      typingSpeed = 500;
    } else {
      typingSpeed = 50;
    }
  }
  setTimeout(typeCycle, typingSpeed);
}

window.addEventListener('load', () => {
  typeCycle();
});


// === PAGE REVEAL ON SCROLL ===
function revealOnScroll() {
  const reveals = document.querySelectorAll('.section-title, .about-text, .timeline-item, .project-card, .skill-card');
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('animate-in');
    }
  });
}
window.addEventListener('scroll', throttle(revealOnScroll, 20));

// === SCROLL PERFORMANCE THROTTLING ===
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', throttle(handleScroll, 10));

// === IMAGE PRELOAD FOR PERFORMANCE ===
function preloadImages() {
  portfolioData.projects.forEach(project => {
    const img = new Image();
    img.src = project.image;
  });
}
preloadImages();
