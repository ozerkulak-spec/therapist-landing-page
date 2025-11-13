// ═══════════════════════════════════════════════════════════════════
// 🎨 EASY THEME CUSTOMIZATION - CHANGE EVERYTHING FROM HERE!
// ═══════════════════════════════════════════════════════════════════
// Copy this file before making changes, so you can revert if needed!

const SITE_CONFIG = {
    
    // ════════════════════════════════════════════════════════════════
    // 📞 CONTACT INFORMATION
    // ════════════════════════════════════════════════════════════════
    contact: {
        // Your name (appears everywhere)
        name: "Dr. Sarah Johnson",
        title: "Licensed Therapist & Counselor",
        
        // Phone (without country code)
        phone: "5551234567",
        countryCode: "1",  // US: 1, UK: 44, Turkey: 90, Germany: 49, etc.
        
        // Email and location
        email: "hello@therapist.com",
        location: "New York, NY",
        
        // Social media links (leave empty "" to hide)
        social: {
            facebook: "https://facebook.com/yourpage",
            instagram: "https://instagram.com/yourpage",
            linkedin: "https://linkedin.com/in/yourpage",
            twitter: "https://twitter.com/yourpage"
        }
    },

    // ════════════════════════════════════════════════════════════════
    // 🎨 COLOR THEME
    // ════════════════════════════════════════════════════════════════
    // Use this site to pick colors: https://coolors.co/
    // Or use this palette generator: https://mycolor.space/
    
    colors: {
        // Pastel Natural palette
        primary: "#7CB9A3",         // Sage green (primary)
        primaryDark: "#63A28C",     // Hover/darker sage

        secondary: "#F7C9A9",       // Pastel peach (secondary)
        secondaryDark: "#E6B691",   // Hover/darker peach

        // Text colors
        textDark: "#2B2D31",        // Deep neutral for good contrast
        textMuted: "#6B7280",       // Muted gray for secondary text
        textLight: "#ffffff",       // For light-on-dark areas

        // Backgrounds
        bgLight: "#FAFAF9",         // Warm off-white
        bgWhite: "#ffffff",
        bgDark: "#1F2937",          // Footer / dark areas

        // Semantic
        success: "#84CC16",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#38BDF8",

        // Gradients
        gradientStart: "#7CB9A3",
        gradientEnd: "#F7C9A9",
    },

    // ════════════════════════════════════════════════════════════════
    // 🖼️ IMAGES
    // ════════════════════════════════════════════════════════════════
    // Replace these with your own image URLs
    // Recommended sizes included in comments
    
    images: {
    // Hero section (1920x1080px recommended) - soft pastel workspace
    hero: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&h=1080&fit=crop&q=85",
        
    // About section (800x600px recommended) - warm, professional portrait vibe
    about: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=85",
        
        // Service cards (400x300px recommended each)
        services: {
            individual: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
            couples: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
            online: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
            stress: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
        },
        
        // Logo (optional, 200x60px recommended)
        logo: "",  // Leave empty to show text logo instead
        
        // Favicon (32x32px recommended)
        favicon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>"
    },

    // ════════════════════════════════════════════════════════════════
    // 📝 HERO SECTION
    // ════════════════════════════════════════════════════════════════
    
    hero: {
        title: "Your Path to Mental Wellness Starts Here",
        subtitle: "Professional, Compassionate Therapy Services",
        description: "Licensed therapist specializing in anxiety, depression, and relationship counseling. Book your first session today.",
        
        buttons: {
            primary: {
                text: "Book Consultation",
                link: "#contact",
                icon: "📅"
            },
            secondary: {
                text: "Learn More",
                link: "#about",
                icon: "ℹ️"
            }
        }
    },

    // ════════════════════════════════════════════════════════════════
    // 👤 ABOUT SECTION
    // ════════════════════════════════════════════════════════════════
    
    about: {
        title: "About Me",
        subtitle: "Your Partner in Mental Health",
        
        paragraphs: [
            "With over 15 years of experience in mental health counseling, I'm dedicated to helping individuals and couples navigate life's challenges with compassion and evidence-based therapeutic approaches.",
            "I specialize in cognitive behavioral therapy (CBT), mindfulness-based practices, and solution-focused therapy. My goal is to create a safe, non-judgmental space where you can explore your thoughts, feelings, and behaviors.",
            "Whether you're dealing with anxiety, depression, relationship issues, or simply seeking personal growth, I'm here to support you on your journey to wellness."
        ],
        
        credentials: [
            "Licensed Clinical Psychologist (LCP)",
            "Master's in Clinical Psychology - Columbia University",
            "15+ Years of Clinical Experience",
            "Specialized in CBT and Mindfulness Therapy"
        ]
    },

    // ════════════════════════════════════════════════════════════════
    // 💼 SERVICES
    // ════════════════════════════════════════════════════════════════
    
    services: [
        {
            icon: "👤",
            title: "Individual Therapy",
            description: "One-on-one sessions focused on your personal mental health goals, anxiety management, depression treatment, and personal growth.",
            price: "$150",
            duration: "50 min"
        },
        {
            icon: "💑",
            title: "Couples Counseling",
            description: "Strengthen your relationship through improved communication, conflict resolution, and building deeper emotional connections.",
            price: "$200",
            duration: "60 min"
        },
        {
            icon: "💻",
            title: "Online Therapy",
            description: "Convenient virtual sessions via secure video call. Get professional support from the comfort of your home.",
            price: "$140",
            duration: "50 min"
        },
        {
            icon: "🧘",
            title: "Stress Management",
            description: "Learn practical techniques to manage stress, build resilience, and maintain work-life balance in demanding times.",
            price: "$150",
            duration: "50 min"
        }
    ],

    // ════════════════════════════════════════════════════════════════
    // ⭐ STATS SECTION
    // ════════════════════════════════════════════════════════════════
    
    stats: [
        {
            icon: "👥",
            number: 1500,
            suffix: "+",
            label: "Clients Helped"
        },
        {
            icon: "📅",
            number: 15,
            suffix: "+",
            label: "Years Experience"
        },
        {
            icon: "💯",
            number: 98,
            suffix: "%",
            label: "Success Rate"
        },
        {
            icon: "⭐",
            number: 20,
            suffix: "+",
            label: "Sessions/Week"
        }
    ],

    // ════════════════════════════════════════════════════════════════
    // 💬 TESTIMONIALS
    // ════════════════════════════════════════════════════════════════
    
    testimonials: [
        {
            name: "Jennifer M.",
            rating: 5,
            text: "Dr. Johnson helped me overcome my anxiety and build confidence I never knew I had. Her approach is both professional and deeply caring.",
            role: "Individual Therapy Client"
        },
        {
            name: "Michael & Lisa R.",
            rating: 5,
            text: "Our marriage was struggling, but through couples counseling, we learned to communicate better and reconnect. We're so grateful!",
            role: "Couples Counseling Clients"
        },
        {
            name: "David K.",
            rating: 5,
            text: "The online therapy option was perfect for my busy schedule. Professional, convenient, and truly life-changing. Highly recommend!",
            role: "Online Therapy Client"
        }
    ],

    // ════════════════════════════════════════════════════════════════
    // ❓ FAQ
    // ════════════════════════════════════════════════════════════════
    
    faq: [
        {
            question: "How long is each therapy session?",
            answer: "Individual sessions are typically 50 minutes, while couples counseling sessions are 60 minutes. This allows enough time for meaningful discussion while respecting your schedule."
        },
        {
            question: "How many sessions will I need?",
            answer: "This varies by individual and their goals. Some clients see improvement in 6-8 sessions, while others benefit from longer-term therapy. We'll discuss your progress regularly and adjust as needed."
        },
        {
            question: "Do you offer online/virtual sessions?",
            answer: "Yes! I offer secure video therapy sessions for clients who prefer the convenience of meeting from home or have scheduling constraints."
        },
        {
            question: "Is everything I share confidential?",
            answer: "Absolutely. Confidentiality is a cornerstone of therapy. Everything discussed in sessions is private, with only a few legal exceptions (risk of harm to self/others, child abuse, court orders)."
        },
        {
            question: "What should I expect in the first session?",
            answer: "The first session is about getting to know each other. We'll discuss what brings you to therapy, your goals, your history, and create a treatment plan tailored to your needs."
        },
        {
            question: "Do you accept insurance?",
            answer: "I'm an out-of-network provider, but I can provide you with a superbill to submit to your insurance for potential reimbursement. Many clients receive partial reimbursement."
        },
        {
            question: "Can we switch between in-person and online?",
            answer: "Yes, you have flexibility! We can alternate between in-person and online sessions based on your schedule and preferences."
        },
        {
            question: "What's your cancellation policy?",
            answer: "I require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be charged the full session fee."
        }
    ],

    // ════════════════════════════════════════════════════════════════
    // 🏢 OFFICE HOURS
    // ════════════════════════════════════════════════════════════════
    
    hours: {
        weekday: "Monday - Friday: 9:00 AM - 7:00 PM",
        weekend: "Saturday: 10:00 AM - 4:00 PM",
        closed: "Sunday: Closed"
    },

    // ════════════════════════════════════════════════════════════════
    // 🔗 FOOTER QUICK LINKS
    // ════════════════════════════════════════════════════════════════
    
    footerLinks: {
        company: [
            { text: "About", link: "#about" },
            { text: "Services", link: "#services" },
            { text: "Testimonials", link: "#testimonials" },
            { text: "FAQ", link: "#faq" }
        ],
        resources: [
            { text: "Blog", link: "blog.html" },
            { text: "Contact", link: "#contact" },
            { text: "Privacy Policy", link: "#" },
            { text: "Terms of Service", link: "#" }
        ]
    },

    // ════════════════════════════════════════════════════════════════
    // ⚙️ ADVANCED SETTINGS
    // ════════════════════════════════════════════════════════════════
    
    settings: {
        // Show/hide sections
        showStats: true,
        showTestimonials: true,
        showFAQ: true,
        showBlog: true,
        
        // Animation speeds (milliseconds)
        animationSpeed: 300,
        scrollOffset: 80,
        
        // Form settings
        formSubmitUrl: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your form service
        
        // Google Analytics (optional)
        googleAnalyticsId: "", // e.g., "G-XXXXXXXXXX"
        
        // Enable/disable features
        enableBackToTop: true,
        enableSmoothScroll: true,
        enableLazyLoading: true
    }
};

// ═══════════════════════════════════════════════════════════════════
// 🚀 APPLY CONFIGURATION (Don't edit below unless you know what you're doing!)
// ═══════════════════════════════════════════════════════════════════

// Apply theme colors to CSS
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
}
