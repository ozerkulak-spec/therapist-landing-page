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
    console.log('🚀 Admin Dashboard Initializing...');
    
    // Load existing config if available
    loadExistingConfig();
    
    // Initialize all modules
    initNavigation();
    initThemePresets();
    initColorPickers();
    initFormHandlers();
    initSaveButtons();
    initBlogManagement();
    initImportExport();
    initPreview();
    
    // Initialize publish button (MAIN BUTTON)
    const publishBtn = document.getElementById('generateConfig');
    if (publishBtn) {
        publishBtn.addEventListener('click', publishChanges);
    }
    
    console.log('✅ Dashboard initialized successfully');
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
    // Helper function for safe value setting
    const setValue = (id, value) => {
        const el = document.getElementById(id);
        if (el && value !== undefined && value !== null) {
            el.value = value;
        }
    };
    
    const setChecked = (id, value) => {
        const el = document.getElementById(id);
        if (el && value !== undefined) {
            el.checked = value;
        }
    };
    
    // Colors
    setValue('primaryColor', config.colors.primary);
    setValue('primaryColorText', config.colors.primary);
    setValue('primaryDark', config.colors.primaryDark);
    setValue('primaryDarkText', config.colors.primaryDark);
    setValue('secondaryColor', config.colors.secondary);
    setValue('secondaryColorText', config.colors.secondary);
    setValue('secondaryDark', config.colors.secondaryDark);
    setValue('secondaryDarkText', config.colors.secondaryDark);
    
    // Contact
    setValue('contactName', config.contact.name);
    setValue('contactTitle', config.contact.title);
    setValue('contactPhone', config.contact.phone);
    setValue('contactCountryCode', config.contact.countryCode);
    setValue('contactEmail', config.contact.email);
    setValue('contactLocation', config.contact.location);
    
    // Social
    if (config.contact.social) {
        setValue('socialFacebook', config.contact.social.facebook);
        setValue('socialInstagram', config.contact.social.instagram);
        setValue('socialLinkedin', config.contact.social.linkedin);
        setValue('socialTwitter', config.contact.social.twitter);
    }
    
    // Hero
    setValue('heroTitle', config.hero.title);
    setValue('heroSubtitle', config.hero.subtitle);
    setValue('heroDescription', config.hero.description);
    if (config.hero.buttons) {
        setValue('heroBtnPrimaryText', config.hero.buttons.primary?.text);
        setValue('heroBtnSecondaryText', config.hero.buttons.secondary?.text);
    }
    
    // Images
    setValue('imageHero', config.images.hero);
    setValue('imageAbout', config.images.about);
    
    // Settings
    setChecked('showStats', config.settings.showStats);
    setChecked('showTestimonials', config.settings.showTestimonials);
    setChecked('showFAQ', config.settings.showFAQ);
    setChecked('showBlog', config.settings.showBlog);
    
    console.log('✅ Form fields populated');
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
    pastel: {
        // Pastel Natural palette
        primary: '#7FB2A8',      // Sage green
        primaryDark: '#5F8F85',  // Deeper sage
        secondary: '#EADBC8',    // Sand/linen
        secondaryDark: '#D7C1A7' // Deeper sand
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
            try { localStorage.setItem('selectedTheme', theme); } catch (e) {}
            showToast(`${btn.textContent.trim()} theme applied!`, 'success');
        });
    });

    // Auto-apply previously selected theme if available
    try {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme && themePresets[savedTheme]) {
            applyThemeColors(themePresets[savedTheme]);
        }
    } catch (e) {}
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
        
        // Sync color picker and text input (but don't apply to preview yet)
        colorPicker.addEventListener('input', () => {
            textInput.value = colorPicker.value;
        });
        
        textInput.addEventListener('input', () => {
            if (/^#[0-9A-F]{6}$/i.test(textInput.value)) {
                colorPicker.value = textInput.value;
            }
        });
    });
    
    // Apply colors button handled in initSaveButtons()
}

// ═══════════════════════════════════════════════════════════════════
// FORM HANDLERS & SAVE BUTTONS
// ═══════════════════════════════════════════════════════════════════

function initFormHandlers() {
    // Remove auto-save, only save when button clicked
}

function initSaveButtons() {
    // Save Colors button (already exists in HTML)
    const applyColorsBtn = document.getElementById('applyColors');
    if (applyColorsBtn) {
        applyColorsBtn.addEventListener('click', saveColors);
    }
    
    // Save Contact button - check if already exists
    let saveContactBtn = document.querySelector('#saveContactBtn');
    if (!saveContactBtn) {
        saveContactBtn = document.createElement('button');
        saveContactBtn.id = 'saveContactBtn';
        saveContactBtn.className = 'btn-primary btn-block';
        saveContactBtn.textContent = '💾 Save Contact Info';
        saveContactBtn.style.marginTop = '20px';
        const contactCard = document.querySelector('#section-content .card');
        if (contactCard) contactCard.appendChild(saveContactBtn);
    }
    saveContactBtn.onclick = saveContactInfo;
    
    // Save Hero button
    let saveHeroBtn = document.querySelector('#saveHeroBtn');
    if (!saveHeroBtn) {
        saveHeroBtn = document.createElement('button');
        saveHeroBtn.id = 'saveHeroBtn';
        saveHeroBtn.className = 'btn-primary btn-block';
        saveHeroBtn.textContent = '💾 Save Hero Section';
        saveHeroBtn.style.marginTop = '20px';
        const heroCards = document.querySelectorAll('#section-content .card');
        if (heroCards[1]) heroCards[1].appendChild(saveHeroBtn);
    }
    saveHeroBtn.onclick = saveHeroSection;
    
    // Save Images button
    let saveImagesBtn = document.querySelector('#saveImagesBtn');
    if (!saveImagesBtn) {
        saveImagesBtn = document.createElement('button');
        saveImagesBtn.id = 'saveImagesBtn';
        saveImagesBtn.className = 'btn-primary btn-block';
        saveImagesBtn.textContent = '💾 Save Images';
        saveImagesBtn.style.marginTop = '20px';
        const imagesCard = document.querySelector('#section-images .card');
        if (imagesCard) imagesCard.appendChild(saveImagesBtn);
    }
    saveImagesBtn.onclick = saveImages;
    
    // Save Settings button
    let saveSettingsBtn = document.querySelector('#saveSettingsBtn');
    if (!saveSettingsBtn) {
        saveSettingsBtn = document.createElement('button');
        saveSettingsBtn.id = 'saveSettingsBtn';
        saveSettingsBtn.className = 'btn-primary btn-block';
        saveSettingsBtn.textContent = '💾 Save Settings';
        saveSettingsBtn.style.marginTop = '20px';
        const settingsCard = document.querySelector('#section-settings .card');
        if (settingsCard) settingsCard.appendChild(saveSettingsBtn);
    }
    saveSettingsBtn.onclick = saveSettings;
    
    console.log('✅ Save buttons initialized');
}

function saveColors() {
    const primaryEl = document.getElementById('primaryColor');
    const primaryDarkEl = document.getElementById('primaryDark');
    const secondaryEl = document.getElementById('secondaryColor');
    const secondaryDarkEl = document.getElementById('secondaryDark');
    
    if (!primaryEl || !secondaryEl) {
        showToast('❌ Color pickers not found!', 'error');
        return;
    }
    
    config.colors = {
        primary: primaryEl.value,
        primaryDark: primaryDarkEl ? primaryDarkEl.value : primaryEl.value,
        secondary: secondaryEl.value,
        secondaryDark: secondaryDarkEl ? secondaryDarkEl.value : secondaryEl.value
    };
    
    // Apply to preview iframe
    applyColorsToPreview();
    
    console.log('Colors saved:', config.colors);
    showToast('✅ Colors saved! Click PUBLISH to apply to website.', 'success');
}

function saveContactInfo() {
    const nameEl = document.getElementById('contactName');
    const titleEl = document.getElementById('contactTitle');
    const phoneEl = document.getElementById('contactPhone');
    const countryCodeEl = document.getElementById('contactCountryCode');
    const emailEl = document.getElementById('contactEmail');
    const locationEl = document.getElementById('contactLocation');
    
    if (!nameEl || !emailEl) {
        showToast('❌ Contact form fields not found!', 'error');
        return;
    }
    
    config.contact = {
        name: nameEl.value,
        title: titleEl ? titleEl.value : '',
        phone: phoneEl ? phoneEl.value : '',
        countryCode: countryCodeEl ? countryCodeEl.value : '1',
        email: emailEl.value,
        location: locationEl ? locationEl.value : '',
        social: {
            facebook: document.getElementById('socialFacebook')?.value || '',
            instagram: document.getElementById('socialInstagram')?.value || '',
            linkedin: document.getElementById('socialLinkedin')?.value || '',
            twitter: document.getElementById('socialTwitter')?.value || ''
        }
    };
    
    console.log('Contact saved:', config.contact);
    showToast('✅ Contact info saved! Click PUBLISH to apply.', 'success');
}

function saveHeroSection() {
    const titleEl = document.getElementById('heroTitle');
    const subtitleEl = document.getElementById('heroSubtitle');
    const descriptionEl = document.getElementById('heroDescription');
    const btn1El = document.getElementById('heroBtnPrimaryText');
    const btn2El = document.getElementById('heroBtnSecondaryText');
    
    if (!titleEl) {
        showToast('❌ Hero form fields not found!', 'error');
        return;
    }
    
    config.hero = {
        title: titleEl.value,
        subtitle: subtitleEl ? subtitleEl.value : '',
        description: descriptionEl ? descriptionEl.value : '',
        buttons: {
            primary: {
                text: btn1El ? btn1El.value : 'Book Appointment',
                link: '#contact',
                icon: '📅'
            },
            secondary: {
                text: btn2El ? btn2El.value : 'Learn More',
                link: '#about',
                icon: 'ℹ️'
            }
        }
    };
    
    console.log('Hero saved:', config.hero);
    showToast('✅ Hero section saved! Click PUBLISH to apply.', 'success');
}

function saveImages() {
    const heroImgEl = document.getElementById('imageHero');
    const aboutImgEl = document.getElementById('imageAbout');
    
    if (!heroImgEl) {
        showToast('❌ Image form fields not found!', 'error');
        return;
    }
    
    config.images = {
        hero: heroImgEl.value,
        about: aboutImgEl ? aboutImgEl.value : ''
    };
    
    // Show previews
    const heroPreview = document.getElementById('heroImagePreview');
    const aboutPreview = document.getElementById('aboutImagePreview');
    
    if (config.images.hero && heroPreview) {
        heroPreview.innerHTML = `<img src="${config.images.hero}" alt="Hero" style="max-width: 100%; border-radius: 8px; margin-top: 10px;">`;
        heroPreview.classList.add('show');
    }
    
    if (config.images.about && aboutPreview) {
        aboutPreview.innerHTML = `<img src="${config.images.about}" alt="About" style="max-width: 100%; border-radius: 8px; margin-top: 10px;">`;
        aboutPreview.classList.add('show');
    }
    
    console.log('Images saved:', config.images);
    showToast('✅ Images saved! Click PUBLISH to apply.', 'success');
}

function saveSettings() {
    const statsEl = document.getElementById('showStats');
    const testimonialsEl = document.getElementById('showTestimonials');
    const faqEl = document.getElementById('showFAQ');
    const blogEl = document.getElementById('showBlog');
    
    config.settings = {
        showStats: statsEl ? statsEl.checked : true,
        showTestimonials: testimonialsEl ? testimonialsEl.checked : true,
        showFAQ: faqEl ? faqEl.checked : true,
        showBlog: blogEl ? blogEl.checked : true
    };
    
    console.log('Settings saved:', config.settings);
    showToast('✅ Settings saved! Click PUBLISH to apply.', 'success');
}

function saveFormData() {
    // Deprecated - now using individual save buttons
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
                    <button class="btn-icon" data-action="edit-service" data-index="${index}">✏️</button>
                    <button class="btn-icon" data-action="delete-service" data-index="${index}">🗑️</button>
                </div>
            </div>
            <p>${service.description}</p>
            <p><strong>${service.price}</strong> • ${service.duration}</p>
        </div>
    `).join('');
    
    // Add event listeners
    container.querySelectorAll('[data-action="delete-service"]').forEach(btn => {
        btn.addEventListener('click', () => deleteService(parseInt(btn.dataset.index)));
    });
    container.querySelectorAll('[data-action="edit-service"]').forEach(btn => {
        btn.addEventListener('click', () => editService(parseInt(btn.dataset.index)));
    });
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
                    <button class="btn-icon" data-action="edit-testimonial" data-index="${index}">✏️</button>
                    <button class="btn-icon" data-action="delete-testimonial" data-index="${index}">🗑️</button>
                </div>
            </div>
            <p>${item.text}</p>
            <p><em>${item.role}</em></p>
        </div>
    `).join('');
    
    container.querySelectorAll('[data-action="delete-testimonial"]').forEach(btn => {
        btn.addEventListener('click', () => deleteTestimonial(parseInt(btn.dataset.index)));
    });
    container.querySelectorAll('[data-action="edit-testimonial"]').forEach(btn => {
        btn.addEventListener('click', () => editTestimonial(parseInt(btn.dataset.index)));
    });
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
                    <button class="btn-icon" data-action="edit-faq" data-index="${index}">✏️</button>
                    <button class="btn-icon" data-action="delete-faq" data-index="${index}">🗑️</button>
                </div>
            </div>
            <p><strong>A:</strong> ${item.answer}</p>
        </div>
    `).join('');
    
    container.querySelectorAll('[data-action="delete-faq"]').forEach(btn => {
        btn.addEventListener('click', () => deleteFAQ(parseInt(btn.dataset.index)));
    });
    container.querySelectorAll('[data-action="edit-faq"]').forEach(btn => {
        btn.addEventListener('click', () => editFAQ(parseInt(btn.dataset.index)));
    });
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
                    <button class="btn-icon" data-action="edit-post" data-index="${index}">✏️</button>
                    <button class="btn-icon" data-action="delete-post" data-index="${index}">🗑️</button>
                </div>
            </div>
            <p>${post.excerpt}</p>
            <p><strong>${post.category}</strong> • ${post.readTime} min read • ${post.date}</p>
        </div>
    `).join('');
    
    container.querySelectorAll('[data-action="delete-post"]').forEach(btn => {
        btn.addEventListener('click', () => deleteBlogPost(parseInt(btn.dataset.index)));
    });
    container.querySelectorAll('[data-action="edit-post"]').forEach(btn => {
        btn.addEventListener('click', () => editBlogPost(parseInt(btn.dataset.index)));
    });
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
                    <button class="btn-icon" data-action="delete-category" data-index="${index}">🗑️</button>
                </div>
            </div>
            <p>Slug: ${cat.slug}</p>
        </div>
    `).join('');
    
    container.querySelectorAll('[data-action="delete-category"]').forEach(btn => {
        btn.addEventListener('click', () => deleteCategory(parseInt(btn.dataset.index)));
    });
}

// Edit/Delete functions
function editService(index) {
    showToast('Edit feature coming soon! Use PUBLISH button to regenerate config and edit manually.', 'error');
}

function deleteService(index) {
    if (confirm('Delete this service?')) {
        config.services.splice(index, 1);
        renderServices();
        showToast('Service deleted. Click PUBLISH to apply changes.', 'success');
    }
}

function editTestimonial(index) {
    showToast('Edit feature coming soon!', 'error');
}

function deleteTestimonial(index) {
    if (confirm('Delete this testimonial?')) {
        config.testimonials.splice(index, 1);
        renderTestimonials();
        showToast('Testimonial deleted. Click PUBLISH to apply.', 'success');
    }
}

function editFAQ(index) {
    showToast('Edit feature coming soon!', 'error');
}

function deleteFAQ(index) {
    if (confirm('Delete this FAQ?')) {
        config.faq.splice(index, 1);
        renderFAQ();
        showToast('FAQ deleted. Click PUBLISH to apply.', 'success');
    }
}

function editBlogPost(index) {
    showToast('Edit feature coming soon!', 'error');
}

function deleteBlogPost(index) {
    if (confirm('Delete this blog post?')) {
        config.blog.posts.splice(index, 1);
        renderBlogPosts();
        showToast('Post deleted. Click PUBLISH to apply.', 'success');
    }
}

function deleteCategory(index) {
    if (confirm('Delete this category?')) {
        config.blog.categories.splice(index, 1);
        renderCategories();
        showToast('Category deleted. Click PUBLISH to apply.', 'success');
    }
}

// ═══════════════════════════════════════════════════════════════════
// PUBLISH CHANGES (MAIN BUTTON)
// ═══════════════════════════════════════════════════════════════════

function publishChanges() {
    if (!confirm('🚀 PUBLISH CHANGES?\n\nThis will generate the config files with all your changes.\n\nYou will need to copy and paste the code into your site-config.js and blog-config.js files.')) {
        return;
    }
    
    const siteConfigCode = generateSiteConfigJS();
    const blogConfigCode = generateBlogConfigJS();
    
    // Display in export section
    const container = document.getElementById('generatedCode');
    container.innerHTML = `
        <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #16a34a; margin: 0 0 10px 0;">✅ Changes Published Successfully!</h3>
            <p style="color: #15803d; margin: 0;">Copy the code blocks below and paste into your config files.</p>
        </div>
        
        <div class="code-block">
            <div class="code-header">
                <span class="code-label">📄 site-config.js</span>
                <button class="copy-btn" onclick="copyCode('siteConfig')">📋 Copy Code</button>
            </div>
            <pre id="siteConfig">${escapeHtml(siteConfigCode)}</pre>
        </div>
        
        <div class="code-block">
            <div class="code-header">
                <span class="code-label">📄 blog-config.js</span>
                <button class="copy-btn" onclick="copyCode('blogConfig')">📋 Copy Code</button>
            </div>
            <pre id="blogConfig">${escapeHtml(blogConfigCode)}</pre>
        </div>
        
        <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 20px; margin-top: 20px;">
            <h4 style="color: #1d4ed8; margin: 0 0 10px 0;">📝 Next Steps:</h4>
            <ol style="color: #1e40af; margin: 0; padding-left: 20px;">
                <li>Click "Copy Code" on each section</li>
                <li>Open <code>site-config.js</code> and <code>blog-config.js</code> in your editor</li>
                <li>Replace the entire file content with the copied code</li>
                <li>Save the files</li>
                <li>Refresh your website - changes are live! 🎉</li>
            </ol>
        </div>
    `;
    
    // Switch to export section
    document.querySelector('[data-section="export"]').click();
    
    showToast('✅ Config files generated! Copy and paste into your files.', 'success');
}

function generateSiteConfigJS() {
    // Build complete config object
    const fullConfig = {
        contact: config.contact,
        colors: config.colors,
        images: config.images,
        hero: config.hero,
        about: SITE_CONFIG.about || {},
        services: config.services,
        stats: config.stats,
        testimonials: config.testimonials,
        faq: config.faq,
        hours: SITE_CONFIG.hours || {},
        footerLinks: SITE_CONFIG.footerLinks || {},
        settings: config.settings
    };
    
    return `// ═══════════════════════════════════════════════════════════════════
// 🎨 THERAPIST WEBSITE CONFIGURATION
// Generated by Admin Dashboard - ${new Date().toLocaleString()}
// ═══════════════════════════════════════════════════════════════════

const SITE_CONFIG = ${JSON.stringify(fullConfig, null, 4)};

// ═══════════════════════════════════════════════════════════════════
// 🎨 APPLY THEME COLORS
// ═══════════════════════════════════════════════════════════════════

function applyTheme() {
    const root = document.documentElement;
    const colors = SITE_CONFIG.colors;
    
    // Check if admin dashboard has set preview colors via localStorage
    const previewColors = localStorage.getItem('previewColors');
    const activeColors = previewColors ? JSON.parse(previewColors) : colors;
    
    root.style.setProperty('--primary-color', activeColors.primary);
    root.style.setProperty('--primary-dark', activeColors.primaryDark);
    root.style.setProperty('--secondary-color', activeColors.secondary);
    root.style.setProperty('--secondary-dark', activeColors.secondaryDark);
    root.style.setProperty('--text-dark', colors.textDark);
    root.style.setProperty('--text-muted', colors.textMuted);
    root.style.setProperty('--text-light', colors.textLight);
    root.style.setProperty('--bg-light', colors.bgLight);
    root.style.setProperty('--bg-white', colors.bgWhite);
    root.style.setProperty('--bg-dark', colors.bgDark);
    root.style.setProperty('--success-color', colors.success);
    root.style.setProperty('--error-color', colors.error);
    root.style.setProperty('--gradient-start', colors.gradientStart);
    root.style.setProperty('--gradient-end', colors.gradientEnd);
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}`;
}

function generateBlogConfigJS() {
    return `// ═══════════════════════════════════════════════════════════════════
// 📝 BLOG CONFIGURATION
// Generated by Admin Dashboard - ${new Date().toLocaleString()}
// ═══════════════════════════════════════════════════════════════════

const BLOG_POSTS = ${JSON.stringify(config.blog.posts, null, 4)};

const BLOG_CATEGORIES = ${JSON.stringify(config.blog.categories, null, 4)};

// Helper functions
function getAllPosts() {
    return BLOG_POSTS;
}

function getFeaturedPosts() {
    return BLOG_POSTS.filter(post => post.featured);
}

function getPostsByCategory(category) {
    if (category === 'all') return BLOG_POSTS;
    return BLOG_POSTS.filter(post => post.category === category);
}

function getHomepagePosts() {
    return BLOG_POSTS.filter(post => post.showOnHomepage).slice(0, 3);
}

function getRelatedPosts(currentPostId, category, limit = 3) {
    return BLOG_POSTS
        .filter(post => post.id !== currentPostId && post.category === category)
        .slice(0, limit);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function generateBlogCard(post) {
    return \`
        <article class="blog-card">
            <img src="\${post.image}" alt="\${post.title}">
            <div class="blog-card-content">
                <span class="blog-category">\${post.category}</span>
                <h3>\${post.title}</h3>
                <p>\${post.excerpt}</p>
                <div class="blog-meta">
                    <span>👤 \${post.author}</span>
                    <span>📖 \${post.readTime} min read</span>
                    <span>📅 \${post.date}</span>
                </div>
                <a href="\${post.filename}" class="read-more">Read More →</a>
            </div>
        </article>
    \`;
}

// Auto-initialize on blog page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlog);
} else {
    initBlog();
}

function initBlog() {
    const categoryFilters = document.getElementById('categoryFilters');
    const blogGrid = document.getElementById('blogGrid');
    
    if (!categoryFilters || !blogGrid) return;
    
    // Render category buttons
    categoryFilters.innerHTML = BLOG_CATEGORIES.map(cat => 
        \`<button class="category-btn \${cat.slug === 'all' ? 'active' : ''}" data-category="\${cat.slug}">
            \${cat.icon} \${cat.name}
        </button>\`
    ).join('');
    
    // Render all posts initially
    blogGrid.innerHTML = BLOG_POSTS.map(post => generateBlogCard(post)).join('');
    
    // Add filter functionality
    categoryFilters.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilters.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const filteredPosts = getPostsByCategory(category);
            blogGrid.innerHTML = filteredPosts.map(post => generateBlogCard(post)).join('');
        });
    });
}`;
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
    
    // Apply colors only on manual refresh, not on every load
    let isFirstLoad = true;
    iframe.addEventListener('load', () => {
        if (isFirstLoad) {
            // First load - apply current colors if any
            const previewColors = localStorage.getItem('previewColors');
            if (previewColors) {
                // Colors already set, no need to reload again
                isFirstLoad = false;
            }
        }
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
        const timestamp = new Date().getTime();
        iframe.src = `../index.html?t=${timestamp}`;
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

function copyCode(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ Copied to clipboard!', 'success');
    }).catch(() => {
        showToast('❌ Failed to copy', 'error');
    });
}

// Make copyCode available globally for onclick
window.copyCode = copyCode;

// ═══════════════════════════════════════════════════════════════════
// BLOG MANAGEMENT
// ═══════════════════════════════════════════════════════════════════

function initBlogManagement() {
    const addBlogBtn = document.getElementById('addBlogPost');
    const addCategoryBtn = document.getElementById('addCategory');
    
    if (addBlogBtn) {
        addBlogBtn.addEventListener('click', openAddBlogModal);
        console.log('✅ Add Blog Post button initialized');
    } else {
        console.warn('⚠️ Add Blog Post button not found');
    }
    
    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', openAddCategoryModal);
        console.log('✅ Add Category button initialized');
    } else {
        console.warn('⚠️ Add Category button not found');
    }
}

// Blog Post Modal Functions
function openAddBlogModal() {
    document.getElementById('editBlogIndex').value = '-1';
    document.getElementById('blogModalTitle').textContent = 'Add Blog Post';
    
    // Clear form
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogExcerpt').value = '';
    document.getElementById('blogCategory').value = '';
    document.getElementById('blogAuthor').value = 'Dr. Sarah Mitchell';
    document.getElementById('blogReadTime').value = '5';
    document.getElementById('blogDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('blogImage').value = '';
    document.getElementById('blogFilename').value = '';
    document.getElementById('blogKeywords').value = '';
    document.getElementById('blogFeatured').checked = false;
    document.getElementById('blogShowOnHomepage').checked = false;
    
    // Populate categories
    const categorySelect = document.getElementById('blogCategory');
    categorySelect.innerHTML = '<option value="">Select category...</option>' +
        config.blog.categories
            .filter(cat => cat.slug !== 'all')
            .map(cat => `<option value="${cat.name}">${cat.icon} ${cat.name}</option>`)
            .join('');
    
    document.getElementById('blogPostModal').classList.add('show');
}

function openEditBlogModal(index) {
    const post = config.blog.posts[index];
    
    document.getElementById('editBlogIndex').value = index;
    document.getElementById('blogModalTitle').textContent = 'Edit Blog Post';
    
    document.getElementById('blogTitle').value = post.title;
    document.getElementById('blogExcerpt').value = post.excerpt;
    document.getElementById('blogCategory').value = post.category;
    document.getElementById('blogAuthor').value = post.author;
    document.getElementById('blogReadTime').value = post.readTime;
    document.getElementById('blogDate').value = post.date;
    document.getElementById('blogImage').value = post.image;
    document.getElementById('blogFilename').value = post.filename;
    document.getElementById('blogKeywords').value = post.keywords.join(', ');
    document.getElementById('blogFeatured').checked = post.featured;
    document.getElementById('blogShowOnHomepage').checked = post.showOnHomepage;
    
    // Populate categories
    const categorySelect = document.getElementById('blogCategory');
    categorySelect.innerHTML = '<option value="">Select category...</option>' +
        config.blog.categories
            .filter(cat => cat.slug !== 'all')
            .map(cat => `<option value="${cat.name}">${cat.icon} ${cat.name}</option>`)
            .join('');
    
    document.getElementById('blogPostModal').classList.add('show');
}

window.closeBlogModal = function() {
    document.getElementById('blogPostModal').classList.remove('show');
};

window.saveBlogPost = function() {
    const title = document.getElementById('blogTitle').value.trim();
    const excerpt = document.getElementById('blogExcerpt').value.trim();
    const category = document.getElementById('blogCategory').value;
    
    if (!title || !excerpt || !category) {
        showToast('Please fill required fields (Title, Excerpt, Category)', 'error');
        return;
    }
    
    const post = {
        id: Date.now(),
        title: title,
        excerpt: excerpt,
        category: category,
        author: document.getElementById('blogAuthor').value || 'Dr. Sarah Mitchell',
        readTime: parseInt(document.getElementById('blogReadTime').value) || 5,
        date: document.getElementById('blogDate').value || new Date().toISOString().split('T')[0],
        image: document.getElementById('blogImage').value || 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800',
        filename: document.getElementById('blogFilename').value || `${title.toLowerCase().replace(/\s+/g, '-')}.html`,
        keywords: document.getElementById('blogKeywords').value.split(',').map(k => k.trim()).filter(k => k),
        featured: document.getElementById('blogFeatured').checked,
        showOnHomepage: document.getElementById('blogShowOnHomepage').checked
    };
    
    const editIndex = parseInt(document.getElementById('editBlogIndex').value);
    
    if (editIndex >= 0) {
        // Update existing post
        config.blog.posts[editIndex] = post;
        showToast('✅ Blog post updated! Click PUBLISH to apply.', 'success');
    } else {
        // Add new post
        config.blog.posts.unshift(post);
        showToast('✅ Blog post added! Click PUBLISH to apply.', 'success');
    }
    
    closeBlogModal();
    renderBlogPosts();
};

// Category Modal Functions
function openAddCategoryModal() {
    document.getElementById('categoryName').value = '';
    document.getElementById('categorySlug').value = '';
    document.getElementById('categoryIcon').value = '';
    
    document.getElementById('categoryModal').classList.add('show');
}

window.closeCategoryModal = function() {
    document.getElementById('categoryModal').classList.remove('show');
};

window.saveCategory = function() {
    const name = document.getElementById('categoryName').value.trim();
    const slug = document.getElementById('categorySlug').value.trim();
    const icon = document.getElementById('categoryIcon').value.trim();
    
    if (!name || !slug) {
        showToast('Please fill required fields (Name, Slug)', 'error');
        return;
    }
    
    const category = {
        name: name,
        slug: slug,
        icon: icon || '📄'
    };
    
    config.blog.categories.push(category);
    showToast('✅ Category added! Click PUBLISH to apply.', 'success');
    
    closeCategoryModal();
    renderCategories();
};

// Update editBlogPost function
function editBlogPost(index) {
    openEditBlogModal(index);
}
