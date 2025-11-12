// ═══════════════════════════════════════════════════════════════════
// 📝 BLOG MANAGEMENT SYSTEM - ADD/REMOVE BLOG POSTS EASILY!
// ═══════════════════════════════════════════════════════════════════
// Simply add or remove entries from this array to manage your blog!

const BLOG_POSTS = [
    {
        // Unique ID (use lowercase, no spaces)
        id: "anxiety",
        
        // Post title
        title: "Understanding and Coping with Anxiety",
        
        // Short excerpt (2-3 sentences)
        excerpt: "Anxiety affects millions worldwide. Learn practical strategies to manage anxious thoughts, reduce physical symptoms, and regain control of your life.",
        
        // Category (must match one of the categories below)
        category: "Mental Health",
        
        // Author info
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        
        // Reading time (in minutes)
        readTime: 8,
        
        // Publication date (YYYY-MM-DD format)
        date: "2024-01-15",
        
        // Featured image (1200x600px recommended)
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=600&fit=crop",
        
        // HTML file name (must exist in your directory)
        filename: "blog-post-anxiety.html",
        
        // SEO keywords (comma separated)
        keywords: "anxiety, mental health, coping strategies, anxiety management",
        
        // Is this a featured post? (shows at top)
        featured: true,
        
        // Show on homepage? (only works if featured: true)
        showOnHomepage: true
    },
    {
        id: "communication",
        title: "7 Golden Rules for Healthy Communication in Relationships",
        excerpt: "Strong relationships are built on effective communication. Master these seven essential techniques to deepen connections and resolve conflicts peacefully.",
        category: "Relationships",
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        readTime: 7,
        date: "2024-01-20",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop",
        filename: "blog-post-communication.html",
        keywords: "communication, relationships, couples therapy, healthy relationships",
        featured: true,
        showOnHomepage: true
    },
    {
        id: "selfcare",
        title: "The Essential Guide to Self-Care and Mental Wellness",
        excerpt: "Self-care isn't selfish—it's essential. Discover the four dimensions of self-care and create a personalized wellness plan that fits your lifestyle.",
        category: "Personal Growth",
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        readTime: 6,
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
        filename: "blog-post-selfcare.html",
        keywords: "self-care, mental wellness, personal growth, wellness routine",
        featured: false,
        showOnHomepage: false
    },
    {
        id: "stress",
        title: "Managing Workplace Stress: Evidence-Based Strategies",
        excerpt: "Workplace stress doesn't have to control your life. Learn practical, science-backed techniques to manage stress and maintain work-life balance.",
        category: "Stress Management",
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        readTime: 6,
        date: "2024-02-10",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=600&fit=crop",
        filename: "blog-post-stress.html",
        keywords: "workplace stress, stress management, work-life balance, burnout",
        featured: false,
        showOnHomepage: false
    },
    {
        id: "depression",
        title: "Understanding Depression: Signs, Symptoms, and Getting Help",
        excerpt: "Depression is more than just feeling sad. Learn to recognize the signs, understand the causes, and discover effective treatment options for recovery.",
        category: "Mental Health",
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        readTime: 8,
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=600&fit=crop",
        filename: "blog-post-depression.html",
        keywords: "depression, mental health, depression treatment, therapy",
        featured: false,
        showOnHomepage: false
    },
    {
        id: "boundaries",
        title: "Setting Healthy Boundaries: A Complete Guide",
        excerpt: "Healthy boundaries protect your wellbeing and strengthen relationships. Learn what boundaries are, why they matter, and how to set them effectively.",
        category: "Personal Growth",
        author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
        },
        readTime: 5,
        date: "2024-02-20",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=600&fit=crop",
        filename: "blog-post-boundaries.html",
        keywords: "boundaries, healthy relationships, personal growth, self-care",
        featured: false,
        showOnHomepage: false
    }
];

// ═══════════════════════════════════════════════════════════════════
// 📁 BLOG CATEGORIES
// ═══════════════════════════════════════════════════════════════════
// Categories used for filtering. Add more as needed!

const BLOG_CATEGORIES = [
    {
        name: "All Posts",
        slug: "all",
        icon: "📚"
    },
    {
        name: "Mental Health",
        slug: "mental-health",
        icon: "🧠"
    },
    {
        name: "Relationships",
        slug: "relationships",
        icon: "💑"
    },
    {
        name: "Personal Growth",
        slug: "personal-growth",
        icon: "🌱"
    },
    {
        name: "Stress Management",
        slug: "stress-management",
        icon: "🧘"
    }
];

// ═══════════════════════════════════════════════════════════════════
// 🎯 HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

// Get all blog posts
function getAllPosts() {
    return BLOG_POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get featured posts
function getFeaturedPosts() {
    return BLOG_POSTS.filter(post => post.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get posts by category
function getPostsByCategory(category) {
    if (category === 'all') return getAllPosts();
    
    // Convert category name to match post category
    const categoryMap = {
        'mental-health': 'Mental Health',
        'relationships': 'Relationships',
        'personal-growth': 'Personal Growth',
        'stress-management': 'Stress Management'
    };
    
    const matchCategory = categoryMap[category] || category;
    return BLOG_POSTS.filter(post => post.category === matchCategory)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get homepage posts (featured + showOnHomepage)
function getHomepagePosts(limit = 3) {
    return BLOG_POSTS
        .filter(post => post.featured && post.showOnHomepage)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

// Get related posts (same category, exclude current)
function getRelatedPosts(currentPostId, limit = 3) {
    const currentPost = BLOG_POSTS.find(post => post.id === currentPostId);
    if (!currentPost) return [];
    
    return BLOG_POSTS
        .filter(post => post.id !== currentPostId && post.category === currentPost.category)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Generate blog card HTML
function generateBlogCard(post) {
    // Convert category to slug for data-attribute
    const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
    
    return `
        <article class="blog-card" data-category="${categorySlug}">
            <a href="${post.filename}" class="blog-card-link">
                <div class="blog-card-image">
                    <picture>
                        <source srcset="${post.image}&fm=webp&q=85" type="image/webp">
                        <img src="${post.image}&q=85" alt="${post.title}" loading="lazy" width="800" height="500">
                    </picture>
                    <div class="blog-card-category">${post.category}</div>
                </div>
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-date">📅 ${formatDate(post.date)}</span>
                        <span class="blog-read-time">⏱️ ${post.readTime} min read</span>
                    </div>
                    <h2 class="blog-card-title">${post.title}</h2>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                </div>
            </a>
        </article>
    `;
}

// ═══════════════════════════════════════════════════════════════════
// 🚀 AUTO-INITIALIZE BLOG PAGE
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on blog.html
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return; // Not on blog page
    
    // Render all blog posts
    function renderPosts(posts) {
        blogGrid.innerHTML = posts.map(post => generateBlogCard(post)).join('');
        
        // Add fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.blog-card').forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'all 0.5s ease';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
        }, 100);
    }
    
    // Initial render
    renderPosts(getAllPosts());
    
    // Setup category filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            const category = this.dataset.category;
            const filteredPosts = getPostsByCategory(category);
            renderPosts(filteredPosts);
        });
    });
    
    // Setup search
    const searchInput = document.querySelector('.blog-search input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const posts = getAllPosts().filter(post => 
                post.title.toLowerCase().includes(searchTerm) ||
                post.excerpt.toLowerCase().includes(searchTerm) ||
                post.keywords.toLowerCase().includes(searchTerm)
            );
            renderPosts(posts);
        });
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BLOG_POSTS, BLOG_CATEGORIES, getAllPosts, getFeaturedPosts, getPostsByCategory, getHomepagePosts, getRelatedPosts };
}
