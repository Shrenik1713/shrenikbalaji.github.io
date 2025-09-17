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
    {"name": "OpenCV", "category": "ai", "icon": "fas fa-eye"},
    { "name": "Data Analysis", "level": 80, "category": "ai" }
  ],
  "projects": [
    // {
    //   "title": "AI-Powered Task Manager",
    //   "description": "Intelligent task management application using machine learning to predict task priorities and optimize scheduling. Features smart categorization and deadline prediction.",
    //   "technologies": ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    //   "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    //   "liveDemo": "#",
    //   "github": "#",
    //   "featured": true,
    //   "category": "ai"
    // },
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
      "title": "Optical Charecter Recognition",
      "description": "Data visualization dashboard for social media metrics with real-time updates and predictive analytics for engagement optimization.",
      "technologies": ["Python", "Flask", "D3.js", "PostgreSQL", "Redis"],
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "liveDemo": "#",
      "github": "#",
      "featured": false,
      "category": "ai"
    },
    {
      "title": "AI Chatbot for travel iteneary",
      "description": "Cross-platform mobile application providing detailed weather forecasts with location-based services and interactive maps.",
      "technologies": ["React Native", "JavaScript", "Weather API", "Maps API"],
      "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      "liveDemo": "#",
      "github": "#",
      "featured": false,
      "category": "web"
    },
    // {
    //   "title": "Blockchain Voting System",
    //   "description": "Secure digital voting platform using blockchain technology to ensure transparency and prevent fraud in electoral processes.",
    //   "technologies": ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    //   "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop",
    //   "liveDemo": "#",
    //   "github": "#",
    //   "featured": true,
    //   "category": "web"
    // },
    // {
    //   "title": "IoT Smart Home System",
    //   "description": "Integrated IoT solution for home automation with sensor monitoring, mobile app control, and energy optimization features.",
    //   "technologies": ["Arduino", "Raspberry Pi", "Python", "React Native", "MQTT"],
    //   "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    //   "liveDemo": "#",
    //   "github": "#",
    //   "featured": false,
    //   "category": "ai"
    // }
  ]
};

//blog Elements
const blogSearch = document.getElementById('blogSearch');
const blogCategory = document.getElementById('blogCategory');
const blogCards = document.querySelectorAll('.blog-card');

function filterBlogs() {
  const searchVal = blogSearch.value.toLowerCase();
  const categoryVal = blogCategory.value;
  blogCards.forEach(card => {
    const matchesCategory = categoryVal === "all" || card.dataset.category === categoryVal;
    const matchesSearch = card.querySelector('.blog-title').textContent.toLowerCase().includes(searchVal)
        || card.querySelector('.blog-desc').textContent.toLowerCase().includes(searchVal);
    card.style.display = matchesCategory && matchesSearch ? "block" : "none";
  });
}
blogSearch.addEventListener('input', filterBlogs);
blogCategory.addEventListener('change', filterBlogs);



// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const navbar = document.getElementById('navbar');
const loadingScreen = document.getElementById('loading-screen');
const contactForm = document.getElementById('contact-form');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');

// State
let currentTheme = 'light';
let isMenuOpen = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);

    // Initialize theme
    initializeTheme();
    
    // Setup event listeners
    setupEventListeners();
    
    // Populate dynamic content
    populateSkills();
    populateProjects();
    
    // Initialize scroll effects
    handleScroll();
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        updateThemeToggle();
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
            document.documentElement.setAttribute('data-color-scheme', 'dark');
            updateThemeToggle();
        }
    }
}

function updateThemeToggle() {
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

function setupEventListeners() {
    // Mobile menu toggle
    mobileMenu?.addEventListener('click', toggleMobileMenu);
    
    // Theme toggle
    themeToggle?.addEventListener('click', toggleTheme);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Navigation links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Contact form
    contactForm?.addEventListener('submit', handleContactForm);
    
    // Skills filter
    document.querySelectorAll('.skills-section .filter-btn').forEach(btn => {
        btn.addEventListener('click', handleSkillsFilter);
    });
    
    // Projects filter
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', handleProjectsFilter);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMobileMenu();
        }
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

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
}

function handleScroll() {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active navigation link
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

function handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
        closeMobileMenu();
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you! Your message has been sent successfully.', 'success');
    e.target.reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles for notification
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
        background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Create skill card HTML
function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}">
            <i class="${skill.icon} skill-icon"></i>
            <h4 class="skill-name">${skill.name}</h4>
        </div>
    `;
}

// Render all skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map(skill => createSkillCard(skill)).join('');
}

// Filter skills
function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Handle filter button clicks
function handleFilterClick(e) {
    if (e.target.classList.contains('filter-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Filter skills
        filterSkills(e.target.dataset.filter);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    
    // Add event listener to filter container
    document.querySelector('.skills-filter').addEventListener('click', handleFilterClick);
});

function populateSkills() {
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = `skill-item skill-${skill.category}`;
        skillElement.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-progress-bar" data-level="${skill.level}"></div>
            </div>
        `;
        
        skillsGrid.appendChild(skillElement);
    });
}

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

function handleSkillsFilter(e) {
    const filter = e.target.getAttribute('data-filter');
    const skillItems = document.querySelectorAll('.skill-item');
    const filterBtns = document.querySelectorAll('.skills-section .filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter skills
    skillItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(`skill-${filter}`)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleProjectsFilter(e) {
    const filter = e.target.getAttribute('data-filter');
    const projectItems = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter projects
    projectItems.forEach(item => {
        let shouldShow = false;
        
        if (filter === 'all') {
            shouldShow = true;
        } else if (filter === 'featured' && item.classList.contains('featured')) {
            shouldShow = true;
        } else if (item.classList.contains(`project-${filter}`)) {
            shouldShow = true;
        }
        
        if (shouldShow) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate skill progress bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.skill-progress-bar');
                    const level = progressBar.getAttribute('data-level');
                    setTimeout(() => {
                        progressBar.style.width = level + '%';
                    }, 200);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-item, .project-card, .timeline-item, .about-text').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .animate-in {
        animation: fadeIn 0.6s ease-out;
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Add typing effect to hero title
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

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1500);
    }
});

// Add smooth reveal animations for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .about-text, .timeline-item, .project-card, .skill-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Performance optimization: Throttle scroll events
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

// Apply throttling to scroll events
window.removeEventListener('scroll', handleScroll);
window.removeEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', throttle(handleScroll, 10));
window.addEventListener('scroll', throttle(revealOnScroll, 20));

// Preload images for better performance
function preloadImages() {
    portfolioData.projects.forEach(project => {
        const img = new Image();
        img.src = project.image;
    });
}

// Initialize image preloading
preloadImages();
