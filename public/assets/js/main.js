// main.js - Sunshine School Smederevo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sunshine School JS loaded');

    // ===== MOBILE MENU TOGGLE =====
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Menu toggle clicked');
            
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Nav link clicked:', this.href);
                mainNav.classList.remove('active');
                if (navToggle) {
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                if (navToggle) {
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mainNav.classList.remove('active');
                if (navToggle) {
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('.site-header');
    if (header) {
        function updateHeader() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        updateHeader();
        window.addEventListener('scroll', updateHeader);
    }

    // ===== SET ACTIVE NAV LINK =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        console.log('Current page:', currentPage);
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            const linkPage = linkHref.split('/').pop();
            
            console.log('Checking link:', linkHref, 'Page:', linkPage);
            
            // Remove active class from all links
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            
            // Check different scenarios for active state
            if (currentPage === linkPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage.includes(linkPage.replace('.html', '')) && linkPage !== 'index.html')) {
                
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
                console.log('Set active:', linkHref);
            }
        });
    }
    
    setActiveNavLink();

    // ===== COURSE SEARCH =====
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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

    // ===== ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card, .team-member').forEach(el => {
        observer.observe(el);
    });

    // ===== CURRENT YEAR =====
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===== RESIZE HANDLER =====
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav) {
            mainNav.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // ===== CONSOLE LOG READY =====
    console.log('All JavaScript functionality loaded successfully');
});

// Simple utility functions
function debounce(func, wait) {
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

// Social Media Feed Integration - DODAJTE NA KRAJ VAŠEG main.js
class SocialFeed {
    constructor() {
        this.facebookFeed = document.getElementById('facebook-feed');
        this.instagramFeed = document.getElementById('instagram-feed');
        this.init();
    }

    init() {
        this.loadFacebookFeed();
        this.loadInstagramFeed();
    }

    async loadFacebookFeed() {
        try {
            // Simulacija učitavanja - u produkciji koristite pravi API
            setTimeout(() => {
                this.renderFacebookPosts([{
                    image: 'assets/images/facebook-demo.jpg',
                    message: 'Naši učenici uživaju na časovima engleskog! Pogledajte kako se zabavljaju dok uče.',
                    created_time: new Date().toISOString(),
                    likes: 24,
                    permalink_url: 'https://www.facebook.com/skola.sunshine/',
                    is_video: false
                }]);
            }, 1500);
            
        } catch (error) {
            console.error('Error loading Facebook feed:', error);
            this.showError(this.facebookFeed, 'facebook');
        }
    }

    async loadInstagramFeed() {
        try {
            // Simulacija učitavanja - u produkciji koristite pravi API
            setTimeout(() => {
                this.renderInstagramPosts([
                    {
                        media_url: 'assets/images/instagram-demo-1.jpg',
                        permalink: 'https://www.instagram.com/p/example1/',
                        media_type: 'IMAGE'
                    },
                    {
                        media_url: 'assets/images/instagram-demo-2.jpg', 
                        permalink: 'https://www.instagram.com/p/example2/',
                        media_type: 'IMAGE'
                    },
                    {
                        media_url: 'assets/images/instagram-demo-3.jpg',
                        permalink: 'https://www.instagram.com/p/example3/',
                        media_type: 'IMAGE'
                    },
                    {
                        media_url: 'assets/images/instagram-demo-4.jpg',
                        permalink: 'https://www.instagram.com/p/example4/',
                        media_type: 'IMAGE'
                    }
                ]);
            }, 2000);
            
        } catch (error) {
            console.error('Error loading Instagram feed:', error);
            this.showError(this.instagramFeed, 'instagram');
        }
    }

    renderFacebookPosts(posts) {
        if (!posts || posts.length === 0) {
            this.showPlaceholder(this.facebookFeed, 'facebook');
            return;
        }

        const latestPost = posts[0];
        this.facebookFeed.innerHTML = `
            <div class="social-post">
                ${latestPost.image ? `
                    <div class="post-image" style="background-image: url('${latestPost.image}')">
                        ${latestPost.is_video ? '<div class="video-indicator">📹 Video</div>' : ''}
                    </div>
                ` : ''}
                <div class="post-content">
                    <div class="post-message">${latestPost.message || 'Pogledajte našu najnoviju objavu'}</div>
                    <div class="post-meta">
                        <span class="post-date">${this.formatDate(latestPost.created_time)}</span>
                        <span class="post-stats">👍 ${latestPost.likes || 0}</span>
                    </div>
                    <a href="${latestPost.permalink_url}" target="_blank" class="view-more">Pogledaj objavu</a>
                </div>
            </div>
        `;
    }

    renderInstagramPosts(posts) {
        if (!posts || posts.length === 0) {
            this.showPlaceholder(this.instagramFeed, 'instagram');
            return;
        }

        const latestPosts = posts.slice(0, 4);
        const postsHTML = latestPosts.map(post => `
            <div class="instagram-post ${post.media_type === 'VIDEO' ? 'video' : ''}"
                 style="background-image: url('${post.media_url}')"
                 onclick="window.open('${post.permalink}', '_blank')">
                ${post.media_type === 'VIDEO' ? '<div class="video-indicator">▶️</div>' : ''}
            </div>
        `).join('');

        this.instagramFeed.innerHTML = `
            <div class="instagram-grid">
                ${postsHTML}
            </div>
            <a href="https://www.instagram.com/skola_mysunshine/" target="_blank" class="view-more">Pogledaj sve fotografije</a>
        `;
    }

    showPlaceholder(container, platform) {
        container.innerHTML = `
            <div class="social-placeholder">
                <p>Nema dostupnih objava</p>
                <a href="${this.getPlatformUrl(platform)}" target="_blank" class="btn btn-primary">
                    Posetite nas na ${platform === 'facebook' ? 'Facebooku' : 'Instagramu'}
                </a>
            </div>
        `;
    }

    showError(container, platform) {
        container.innerHTML = `
            <div class="error-message">
                <p>Trenutno nismo u mogućnosti da učitamo objave.</p>
                <a href="${this.getPlatformUrl(platform)}" target="_blank" class="btn btn-primary">
                    Pratite nas na ${platform === 'facebook' ? 'Facebooku' : 'Instagramu'}
                </a>
            </div>
        `;
    }

    getPlatformUrl(platform) {
        return platform === 'facebook' 
            ? 'https://www.facebook.com/skola.sunshine/'
            : 'https://www.instagram.com/skola_mysunshine/';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('sr-RS', {
            day: 'numeric',
            month: 'long', 
            year: 'numeric'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new SocialFeed();
});

// Social Media Integration - NOVI JavaScript
class LiveSocialFeed {
    constructor() {
        this.fbFeed = document.getElementById('facebook-feed');
        this.igFeed = document.getElementById('instagram-feed');
        this.init();
    }

    init() {
        this.loadFacebookLiveData();
        this.loadInstagramLiveData();
    }

    async loadFacebookLiveData() {
        try {
            // Pokušaj sa Facebook Graph API
            const fbData = await this.fetchFacebookAPI();
            if (fbData) {
                this.renderFacebookPost(fbData);
            } else {
                // Fallback na embed ili manual data
                this.useFacebookFallback();
            }
        } catch (error) {
            console.error('Facebook feed error:', error);
            this.useFacebookFallback();
        }
    }

    async loadInstagramLiveData() {
        try {
            // Pokušaj sa Instagram Basic Display API
            const igData = await this.fetchInstagramAPI();
            if (igData) {
                this.renderInstagramPosts(igData);
            } else {
                // Fallback
                this.useInstagramFallback();
            }
        } catch (error) {
            console.error('Instagram feed error:', error);
            this.useInstagramFallback();
        }
    }

    async fetchFacebookAPI() {
        // OVO ZAMENITE SA PRAVIM API POZIVOM
        const mockData = {
            message: "Naši učenici uživaju na časovima engleskog! 🎉 Pogledajte kako se zabavljaju dok uče kroz interaktivne aktivnosti i igre.",
            image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=300&fit=crop",
            created_time: new Date().toISOString(),
            likes: 24,
            comments: 8,
            permalink: "https://www.facebook.com/skola.sunshine/posts/123456789",
            is_video: false
        };
        
        return new Promise(resolve => {
            setTimeout(() => resolve(mockData), 1000);
        });
    }

    async fetchInstagramAPI() {
        // OVO ZAMENITE SA PRAVIM API POZIVOM
        const mockData = [
            {
                media_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/p/CjAbCdEfGhI/",
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=300&fit=crop", 
                permalink: "https://www.instagram.com/p/CjHiJkLmNoP/",
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/p/CjKlMnOpQrS/",
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/p/CjTuVwXyZzA/",
                media_type: "IMAGE"
            }
        ];
        
        return new Promise(resolve => {
            setTimeout(() => resolve(mockData), 1500);
        });
    }

    renderFacebookPost(post) {
        this.fbFeed.innerHTML = `
            <div class="live-facebook-post">
                ${post.image ? `
                    <div class="fb-post-image" style="background-image: url('${post.image}')">
                        ${post.is_video ? '<div class="video-badge">🎥 Video</div>' : ''}
                    </div>
                ` : ''}
                <div class="fb-post-content">
                    <div class="fb-post-message">${post.message}</div>
                    <div class="fb-post-meta">
                        <span class="fb-post-date">${this.formatDate(post.created_time)}</span>
                        <div class="fb-post-stats">
                            <span>👍 ${post.likes || 0}</span>
                            <span>💬 ${post.comments || 0}</span>
                        </div>
                    </div>
                    <a href="${post.permalink}" target="_blank" class="fallback-link">
                        Pogledaj objavu
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }

    renderInstagramPosts(posts) {
        const postsHTML = posts.map(post => `
            <div class="ig-post ${post.media_type === 'VIDEO' ? 'video' : ''}"
                 style="background-image: url('${post.media_url}')"
                 onclick="window.open('${post.permalink}', '_blank')">
            </div>
        `).join('');

        this.igFeed.innerHTML = `
            <div class="instagram-grid">
                ${postsHTML}
            </div>
            <a href="https://www.instagram.com/skola_mysunshine/" target="_blank" class="fallback-link">
                Pogledaj sve fotografije
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                </svg>
            </a>
        `;
    }

    useFacebookFallback() {
        this.fbFeed.innerHTML = `
            <div class="error-state">
                <p>🌐 Pratite naš Facebook za najnovije vesti</p>
                <a href="https://www.facebook.com/skola.sunshine/" target="_blank" class="fallback-link">
                    Posetite Sunshine School Facebook
                </a>
            </div>
        `;
    }

    useInstagramFallback() {
        this.igFeed.innerHTML = `
            <div class="error-state">
                <p>📸 Pratite naš Instagram za najnovije fotografije</p>
                <a href="https://www.instagram.com/skola_mysunshine/" target="_blank" class="fallback-link">
                    Posetite Sunshine School Instagram
                </a>
            </div>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('sr-RS', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    new LiveSocialFeed();
    
    // Pomeranje sekcije više gore
    const socialSection = document.getElementById('social-feed');
    if (socialSection) {
        const coursesSection = document.querySelector('.courses');
        if (coursesSection && coursesSection.previousElementSibling) {
            coursesSection.parentNode.insertBefore(socialSection, coursesSection);
        }
    }
});