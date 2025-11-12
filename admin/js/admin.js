// ═══════════════════════════════════════════════════════════════════
// ADMIN DASHBOARD - MAIN SCRIPT
// ═══════════════════════════════════════════════════════════════════

// Global configuration object
let config = {
    colors: {},
    contact: {},
    hero: {},
    services: [],
    stats: [],
    testimonials: [],
    faq: [],
    images: {},
    seo: {},
    analytics: {},
    settings: {},
    blog: {
        posts: [],
        categories: []
    }
};

// ═══════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin Dashboard Loaded');
    
    // Load existing config if available
    loadExistingConfig();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize theme presets
    initThemePresets();
    
    // Initialize color pickers
    initColorPickers();
    
    // Initialize form handlers
    initFormHandlers();
    
    // Initialize generate button
    document.getElementById('generateConfig').addEventListener('click', generateConfigFiles);
    
    // Initialize import/export
    initImportExport();
    
    // Initialize preview
    initPreview();
    
    showToast('Dashboard loaded successfully!', 'success');
});

// ═══════════════════════════════════════════════════════════════════
// LOAD EXISTING CONFIG
// ═══════════════════════════════════════════════════════════════════

function loadExistingConfig() {
    try {
        // Load from parent window's SITE_CONFIG if available
        if (typeof SITE_CONFIG !== 'undefined') {
            config.colors = SITE_CONFIG.colors || {};
            config.contact = SITE_CONFIG.contact || {};
            config.hero = SITE_CONFIG.hero || {};
            config.services = SITE_CONFIG.services || [];
            config.stats = SITE_CONFIG.stats || [];
            config.testimonials = SITE_CONFIG.testimonials || [];
            config.faq = SITE_CONFIG.faq || [];
            config.images = SITE_CONFIG.images || {};
            config.settings = SITE_CONFIG.settings || {};
            
            populateFormFields();
        }
        
        // Load blog config
        if (typeof BLOG_POSTS !== 'undefined') {
            config.blog.posts = BLOG_POSTS || [];
        }
        
        if (typeof BLOG_CATEGORIES !== 'undefined') {
            config.blog.categories = BLOG_CATEGORIES || [];
        }
        
        renderDynamicLists();
        
    } catch (error) {
        console.log('No existing config found, starting fresh');
    }
}

function populateFormFields() {
    // Colors
    if (config.colors.primary) {
        document.getElementById('primaryColor').value = config.colors.primary;
        document.getElementById('primaryColorText').value = config.colors.primary;
    }
    if (config.colors.primaryDark) {
        document.getElementById('primaryDark').value = config.colors.primaryDark;
        document.getElementById('primaryDarkText').value = config.colors.primaryDark;
    }
    if (config.colors.secondary) {
        document.getElementById('secondaryColor').value = config.colors.secondary;
        document.getElementById('secondaryColorText').value = config.colors.secondary;
    }
    if (config.colors.secondaryDark) {
        document.getElementById('secondaryDark').value = config.colors.secondaryDark;
        document.getElementById('secondaryDarkText').value = config.colors.secondaryDark;
    }
    
    // Contact
    if (config.contact.name) document.getElementById('contactName').value = config.contact.name;
    if (config.contact.title) document.getElementById('contactTitle').value = config.contact.title;
    if (config.contact.phone) document.getElementById('contactPhone').value = config.contact.phone;
    if (config.contact.countryCode) document.getElementById('contactCountryCode').value = config.contact.countryCode;
    if (config.contact.email) document.getElementById('contactEmail').value = config.contact.email;
    if (config.contact.location) document.getElementById('contactLocation').value = config.contact.location;
    
    // Social
    if (config.contact.social) {
        if (config.contact.social.facebook) document.getElementById('socialFacebook').value = config.contact.social.facebook;
        if (config.contact.social.instagram) document.getElementById('socialInstagram').value = config.contact.social.instagram;
        if (config.contact.social.linkedin) document.getElementById('socialLinkedin').value = config.contact.social.linkedin;
        if (config.contact.social.twitter) document.getElementById('socialTwitter').value = config.contact.social.twitter;
    }
    
    // Hero
    if (config.hero.title) document.getElementById('heroTitle').value = config.hero.title;
    if (config.hero.subtitle) document.getElementById('heroSubtitle').value = config.hero.subtitle;
    if (config.hero.description) document.getElementById('heroDescription').value = config.hero.description;
    if (config.hero.buttons) {
        if (config.hero.buttons.primary) document.getElementById('heroBtnPrimaryText').value = config.hero.buttons.primary.text;
        if (config.hero.buttons.secondary) document.getElementById('heroBtnSecondaryText').value = config.hero.buttons.secondary.text;
    }
    
    // Images
    if (config.images.hero) document.getElementById('imageHero').value = config.images.hero;
    if (config.images.about) document.getElementById('imageAbout').value = config.images.about;
    
    // Settings
    if (config.settings.showStats !== undefined) document.getElementById('showStats').checked = config.settings.showStats;
    if (config.settings.showTestimonials !== undefined) document.getElementById('showTestimonials').checked = config.settings.showTestimonials;
    if (config.settings.showFAQ !== undefined) document.getElementById('showFAQ').checked = config.settings.showFAQ;
    if (config.settings.showBlog !== undefined) document.getElementById('showBlog').checked = config.settings.showBlog;
}

// ═══════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            const sectionId = 'section-' + item.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// ═══════════════════════════════════════════════════════════════════
// THEME PRESETS
// ═══════════════════════════════════════════════════════════════════

const themePresets = {
    default: {
        primary: '#4a90e2',
        primaryDark: '#3a7bc8',
        secondary: '#6ac6b5',
        secondaryDark: '#5ab3a3'
    },
    ocean: {
        primary: '#0077b6',
        primaryDark: '#023e8a',
        secondary: '#00b4d8',
        secondaryDark: '#0096c7'
    },
    nature: {
        primary: '#2d6a4f',
        primaryDark: '#1b4332',
        secondary: '#52b788',
        secondaryDark: '#40916c'
    },
    sunset: {
        primary: '#ff6b35',
        primaryDark: '#e55527',
        secondary: '#ffaa5a',
        secondaryDark: '#ff9642'
    },
    purple: {
        primary: '#7209b7',
        primaryDark: '#560bad',
        secondary: '#b185db',
        secondaryDark: '#9d72c8'
    },
    pink: {
        primary: '#d8668c',
        primaryDark: '#c9527a',
        secondary: '#f4a6c9',
        secondaryDark: '#e98fb0'
    }
};

function initThemePresets() {
    const presetButtons = document.querySelectorAll('.theme-preset');
    
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            const colors = themePresets[theme];
            
            applyThemeColors(colors);
            showToast(`${btn.textContent.trim()} theme applied!`, 'success');
        });
    });
}

function applyThemeColors(colors) {
    document.getElementById('primaryColor').value = colors.primary;
    document.getElementById('primaryColorText').value = colors.primary;
    document.getElementById('primaryDark').value = colors.primaryDark;
    document.getElementById('primaryDarkText').value = colors.primaryDark;
    document.getElementById('secondaryColor').value = colors.secondary;
    document.getElementById('secondaryColorText').value = colors.secondary;
    document.getElementById('secondaryDark').value = colors.secondaryDark;
    document.getElementById('secondaryDarkText').value = colors.secondaryDark;
    
    // Save to config
    config.colors = colors;
    
    // Apply to preview iframe
    applyColorsToPreview();
}

// ═══════════════════════════════════════════════════════════════════
// COLOR PICKERS
// ═══════════════════════════════════════════════════════════════════

function initColorPickers() {
    const colorInputs = [
        { color: 'primaryColor', text: 'primaryColorText' },
        { color: 'primaryDark', text: 'primaryDarkText' },
        { color: 'secondaryColor', text: 'secondaryColorText' },
        { color: 'secondaryDark', text: 'secondaryDarkText' }
    ];
    
    colorInputs.forEach(input => {
        const colorPicker = document.getElementById(input.color);
        const textInput = document.getElementById(input.text);
        
        colorPicker.addEventListener('input', () => {
            textInput.value = colorPicker.value;
        });
        
        textInput.addEventListener('input', () => {
            if (/^#[0-9A-F]{6}$/i.test(textInput.value)) {
                colorPicker.value = textInput.value;
            }
        });
    });
    
    // Apply colors button
    document.getElementById('applyColors').addEventListener('click', () => {
        config.colors = {
            primary: document.getElementById('primaryColor').value,
            primaryDark: document.getElementById('primaryDark').value,
            secondary: document.getElementById('secondaryColor').value,
            secondaryDark: document.getElementById('secondaryDark').value
        };
        
        // Apply to preview iframe
        applyColorsToPreview();
        
        showToast('Colors saved and applied to preview!', 'success');
    });
}

// ═══════════════════════════════════════════════════════════════════
// FORM HANDLERS
// ═══════════════════════════════════════════════════════════════════

function initFormHandlers() {
    // Auto-save on input change
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('change', saveFormData);
    });
}

function saveFormData() {
    // Contact
    config.contact = {
        name: document.getElementById('contactName').value,
        title: document.getElementById('contactTitle').value,
        phone: document.getElementById('contactPhone').value,
        countryCode: document.getElementById('contactCountryCode').value,
        email: document.getElementById('contactEmail').value,
        location: document.getElementById('contactLocation').value,
        social: {
            facebook: document.getElementById('socialFacebook').value,
            instagram: document.getElementById('socialInstagram').value,
            linkedin: document.getElementById('socialLinkedin').value,
            twitter: document.getElementById('socialTwitter').value
        }
    };
    
    // Hero
    config.hero = {
        title: document.getElementById('heroTitle').value,
        subtitle: document.getElementById('heroSubtitle').value,
        description: document.getElementById('heroDescription').value,
        buttons: {
            primary: {
                text: document.getElementById('heroBtnPrimaryText').value,
                link: '#contact',
                icon: '📅'
            },
            secondary: {
                text: document.getElementById('heroBtnSecondaryText').value,
                link: '#about',
                icon: 'ℹ️'
            }
        }
    };
    
    // Images
    config.images = {
        hero: document.getElementById('imageHero').value,
        about: document.getElementById('imageAbout').value
    };
    
    // Settings
    config.settings = {
        showStats: document.getElementById('showStats').checked,
        showTestimonials: document.getElementById('showTestimonials').checked,
        showFAQ: document.getElementById('showFAQ').checked,
        showBlog: document.getElementById('showBlog').checked
    };
    
    console.log('Config updated:', config);
}

// ═══════════════════════════════════════════════════════════════════
// DYNAMIC LISTS (Services, Testimonials, FAQ, Blog)
// ═══════════════════════════════════════════════════════════════════

function renderDynamicLists() {
    renderServices();
    renderTestimonials();
    renderFAQ();
    renderBlogPosts();
    renderCategories();
}

function renderServices() {
    const container = document.getElementById('servicesList');
    if (!config.services || config.services.length === 0) {
        container.innerHTML = '<p style="color: #6b7280;">No services yet. Click "Add Service" to create one.</p>';
        return;
    }
    
    container.innerHTML = config.services.map((service, index) => `
        <div class="item-card">
            <div class="item-card-header">
                <div class="item-card-title">${service.icon} ${service.title}</div>
                <div class="item-card-actions">
                    <button class="btn-icon" onclick="editService(${index})">✏️</button>
                    <button class="btn-icon" onclick="deleteService(${index})">🗑️</button>
                </div>
            </div>
            <p>${service.description}</p>
            <p><strong>${service.price}</strong> • ${service.duration}</p>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsList');
    if (!config.testimonials || config.testimonials.length === 0) {
        container.innerHTML = '<p style="color: #6b7280;">No testimonials yet. Click "Add Testimonial".</p>';
        return;
    }
    
    container.innerHTML = config.testimonials.map((item, index) => `
        <div class="item-card">
            <div class="item-card-header">
                <div class="item-card-title">${'⭐'.repeat(item.rating)} ${item.name}</div>
                <div class="item-card-actions">
                    <button class="btn-icon" onclick="editTestimonial(${index})">✏️</button>
                    <button class="btn-icon" onclick="deleteTestimonial(${index})">🗑️</button>
                </div>
            </div>
            <p>${item.text}</p>
            <p><em>${item.role}</em></p>
        </div>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!config.faq || config.faq.length === 0) {
        container.innerHTML = '<p style="color: #6b7280;">No FAQ items yet. Click "Add Question".</p>';
        return;
    }
    
    container.innerHTML = config.faq.map((item, index) => `
        <div class="item-card">
            <div class="item-card-header">
                <div class="item-card-title">Q: ${item.question}</div>
                <div class="item-card-actions">
                    <button class="btn-icon" onclick="editFAQ(${index})">✏️</button>
                    <button class="btn-icon" onclick="deleteFAQ(${index})">🗑️</button>
                </div>
            </div>
            <p><strong>A:</strong> ${item.answer}</p>
        </div>
    `).join('');
}

function renderBlogPosts() {
    const container = document.getElementById('blogPostsList');
    if (!config.blog.posts || config.blog.posts.length === 0) {
        container.innerHTML = '<p style="color: #6b7280;">No blog posts yet. Click "New Blog Post".</p>';
        return;
    }
    
    container.innerHTML = config.blog.posts.map((post, index) => `
        <div class="item-card">
            <div class="item-card-header">
                <div class="item-card-title">${post.title}</div>
                <div class="item-card-actions">
                    <button class="btn-icon" onclick="editBlogPost(${index})">✏️</button>
                    <button class="btn-icon" onclick="deleteBlogPost(${index})">🗑️</button>
                </div>
            </div>
            <p>${post.excerpt}</p>
            <p><strong>${post.category}</strong> • ${post.readTime} min read • ${post.date}</p>
        </div>
    `).join('');
}

function renderCategories() {
    const container = document.getElementById('categoriesList');
    if (!config.blog.categories || config.blog.categories.length === 0) {
        container.innerHTML = '<p style="color: #6b7280;">No categories yet. Click "Add Category".</p>';
        return;
    }
    
    container.innerHTML = config.blog.categories.map((cat, index) => `
        <div class="item-card">
            <div class="item-card-header">
                <div class="item-card-title">${cat.icon} ${cat.name}</div>
                <div class="item-card-actions">
                    <button class="btn-icon" onclick="deleteCategory(${index})">🗑️</button>
                </div>
            </div>
            <p>Slug: ${cat.slug}</p>
        </div>
    `).join('');
}

// Placeholder functions (will implement modal dialogs in next version)
window.editService = (index) => alert('Edit Service: Feature coming soon! For now, regenerate config and edit manually.');
window.deleteService = (index) => {
    if (confirm('Delete this service?')) {
        config.services.splice(index, 1);
        renderServices();
        showToast('Service deleted', 'success');
    }
};

window.editTestimonial = (index) => alert('Edit Testimonial: Feature coming soon!');
window.deleteTestimonial = (index) => {
    if (confirm('Delete this testimonial?')) {
        config.testimonials.splice(index, 1);
        renderTestimonials();
        showToast('Testimonial deleted', 'success');
    }
};

window.editFAQ = (index) => alert('Edit FAQ: Feature coming soon!');
window.deleteFAQ = (index) => {
    if (confirm('Delete this FAQ?')) {
        config.faq.splice(index, 1);
        renderFAQ();
        showToast('FAQ deleted', 'success');
    }
};

window.editBlogPost = (index) => alert('Edit Blog Post: Feature coming soon!');
window.deleteBlogPost = (index) => {
    if (confirm('Delete this blog post?')) {
        config.blog.posts.splice(index, 1);
        renderBlogPosts();
        showToast('Blog post deleted', 'success');
    }
};

window.deleteCategory = (index) => {
    if (confirm('Delete this category?')) {
        config.blog.categories.splice(index, 1);
        renderCategories();
        showToast('Category deleted', 'success');
    }
};

// ═══════════════════════════════════════════════════════════════════
// GENERATE CONFIG FILES
// ═══════════════════════════════════════════════════════════════════

function generateConfigFiles() {
    saveFormData();
    
    const siteConfigCode = generateSiteConfigJS();
    const blogConfigCode = generateBlogConfigJS();
    
    // Display in export section
    const container = document.getElementById('generatedCode');
    container.innerHTML = `
        <div class="code-block">
            <div class="code-header">
                <span class="code-label">site-config.js</span>
                <button class="copy-btn" onclick="copyToClipboard('siteConfig')">📋 Copy</button>
            </div>
            <pre id="siteConfig">${escapeHtml(siteConfigCode)}</pre>
        </div>
        
        <div class="code-block">
            <div class="code-header">
                <span class="code-label">blog-config.js</span>
                <button class="copy-btn" onclick="copyToClipboard('blogConfig')">📋 Copy</button>
            </div>
            <pre id="blogConfig">${escapeHtml(blogConfigCode)}</pre>
        </div>
    `;
    
    // Switch to export section
    document.querySelector('[data-section="export"]').click();
    
    showToast('Config files generated! Copy and paste into your files.', 'success');
}

function generateSiteConfigJS() {
    return `// Auto-generated by Admin Dashboard
const SITE_CONFIG = ${JSON.stringify(config, null, 4)};

// Apply theme colors
function applyTheme() {
    const root = document.documentElement;
    const colors = SITE_CONFIG.colors;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-dark', colors.primaryDark);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--secondary-dark', colors.secondaryDark);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}`;
}

function generateBlogConfigJS() {
    return `// Auto-generated by Admin Dashboard
const BLOG_POSTS = ${JSON.stringify(config.blog.posts, null, 4)};

const BLOG_CATEGORIES = ${JSON.stringify(config.blog.categories, null, 4)};

// Helper functions remain the same...`;
}

// ═══════════════════════════════════════════════════════════════════
// IMPORT/EXPORT
// ═══════════════════════════════════════════════════════════════════

function initImportExport() {
    document.getElementById('importBtn').addEventListener('click', importConfiguration);
    document.getElementById('downloadBackup').addEventListener('click', downloadBackup);
}

function importConfiguration() {
    const jsonText = document.getElementById('importConfig').value;
    try {
        const imported = JSON.parse(jsonText);
        config = imported;
        populateFormFields();
        renderDynamicLists();
        showToast('Configuration imported successfully!', 'success');
    } catch (error) {
        showToast('Invalid JSON format!', 'error');
    }
}

function downloadBackup() {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `therapist-website-config-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showToast('Backup downloaded!', 'success');
}

// ═══════════════════════════════════════════════════════════════════
// PREVIEW
// ═══════════════════════════════════════════════════════════════════

function initPreview() {
    const deviceButtons = document.querySelectorAll('.preview-device');
    const frameContainer = document.querySelector('.preview-frame-container');
    const iframe = document.getElementById('previewFrame');
    
    // Apply colors when iframe loads
    iframe.addEventListener('load', () => {
        setTimeout(() => {
            applyColorsToPreview();
        }, 500);
    });
    
    deviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            deviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            frameContainer.classList.remove('desktop', 'tablet', 'mobile');
            frameContainer.classList.add(btn.dataset.device);
        });
    });
    
    document.getElementById('refreshPreview').addEventListener('click', () => {
        document.getElementById('previewFrame').src = document.getElementById('previewFrame').src;
        showToast('Preview refreshed!', 'success');
    });
}

function applyColorsToPreview() {
    // Since iframe access might be blocked, inject colors via localStorage and reload
    localStorage.setItem('previewColors', JSON.stringify(config.colors));
    
    // Reload the iframe to apply new colors
    const iframe = document.getElementById('previewFrame');
    const timestamp = new Date().getTime();
    iframe.src = `../index.html?t=${timestamp}`;
    
    console.log('Preview reloaded with new colors:', config.colors);
}

// ═══════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

window.copyToClipboard = function(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy', 'error');
    });
};
