# 🧠 Professional Therapist Landing Page

A modern, SEO-optimized, high-performance single-page website template for therapists and mental health professionals. Fully customizable for any country with easy configuration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Performance](https://img.shields.io/badge/performance-optimized-green.svg)
![Mobile](https://img.shields.io/badge/mobile-friendly-brightgreen.svg)

## ✨ Features

### 🎨 Modern Design
- **Sticky Navigation** with mobile hamburger menu
- **Gradient Color Scheme** (blue to teal)
- **Floating Action Buttons** for phone and WhatsApp
- **Responsive Grid Layouts** (mobile, tablet, desktop)
- **Smooth Animations** and hover effects

### 🚀 Performance Optimized
- **WebP Image Support** with fallbacks (25-35% smaller files)
- **Lazy Loading** for images
- **Deferred JavaScript** loading
- **Font Optimization** with display swap
- **Core Web Vitals** optimized
- **Target Page Load**: < 2 seconds

### 🔍 SEO Ready
- **Comprehensive Meta Tags** (title, description, keywords)
- **Open Graph Tags** for social media
- **Twitter Cards** for rich previews
- **Schema.org JSON-LD** structured data
- **Semantic HTML5** markup
- **Optimized Alt Text** on all images
- **Mobile-First** indexing ready

### 🌍 International Ready
- **Easy Country Configuration** - One-file config for any country
- **Auto-Updated Phone/WhatsApp Links** across entire site
- **Country Code Reference** included (US, UK, Turkey, Germany, etc.)
- **Localization Ready** - Easy to translate

### 📱 Mobile Optimized
- **Responsive Design** for all screen sizes
- **Touch-Friendly** buttons (48x48px minimum)
- **Hamburger Menu** for mobile navigation
- **Sticky Contact Buttons** for easy access

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - No dependencies
- **Google Fonts** - Poppins font family
- **WebP Images** - Modern image format

## 📋 Sections Included

1. **Hero Section** - Eye-catching introduction with dual CTAs
2. **About Section** - Professional credentials and experience
3. **Services Section** - 4 service cards (Individual, Couples, Online, Stress Management)
4. **Why Choose Section** - 4 unique value propositions
5. **Testimonials Section** - Client reviews with privacy protection
6. **Contact Section** - Form + contact info cards
7. **Footer** - 4-column layout with links, services, hours, social media

## 🚀 Quick Start

### 1. Download or Clone
```bash
git clone https://github.com/ozerkulak-spec/therapist-landing-page.git
cd therapist-landing-page
```

### 2. Customize Your Information

Open `index.html` and find the `SITE_CONFIG` section (around line 80):

```javascript
const SITE_CONFIG = {
    countryCode: '1',              // Your country code (see reference below)
    phoneNumber: '5551234567',     // Your phone without country code
    email: 'your.email@example.com',
    location: 'Your City, State',
    doctorName: 'Your Name Here'
};
```

### 3. Replace Images

See `IMAGE-UPLOAD-GUIDE.md` for detailed instructions on:
- Converting images to WebP
- Optimizing file sizes
- Using CDN or local images

### 4. Deploy

**Option A: GitHub Pages (Free)**
1. Push to GitHub
2. Go to Settings → Pages
3. Select source branch (main)
4. Your site will be live at: `https://yourusername.github.io/your-repo-name/`

**Option B: Other Hosting**
- Upload all files to your hosting provider
- Ensure HTTPS is enabled

## 🌍 Country Code Reference

Update `countryCode` in `SITE_CONFIG`:

| Country | Code | Country | Code |
|---------|------|---------|------|
| 🇺🇸 USA | 1 | 🇩🇪 Germany | 49 |
| 🇬🇧 UK | 44 | 🇫🇷 France | 33 |
| 🇹🇷 Turkey | 90 | 🇪🇸 Spain | 34 |
| 🇨🇦 Canada | 1 | 🇮🇹 Italy | 39 |
| 🇦🇺 Australia | 61 | 🇧🇷 Brazil | 55 |

[Full list](https://en.wikipedia.org/wiki/List_of_country_calling_codes)

## 📂 File Structure

```
therapist-landing-page/
├── index.html                  # Main HTML file
├── style.css                   # All styles
├── config.js                   # Auto-configuration script
├── README.md                   # This file
├── IMAGE-UPLOAD-GUIDE.md       # Image optimization guide
├── PERFORMANCE-SEO-GUIDE.md    # Performance & SEO tips
└── LICENSE.txt                 # MIT License
```

## 📊 Performance Metrics

Target metrics (test with [PageSpeed Insights](https://pagespeed.web.dev/)):
- ✅ **LCP**: < 2.5s (Largest Contentful Paint)
- ✅ **FID**: < 100ms (First Input Delay)
- ✅ **CLS**: < 0.1 (Cumulative Layout Shift)
- ✅ **Page Size**: ~350KB (with optimizations)

## 🎨 Customization Guide

### Change Colors
Edit `style.css` - Search for color values:
- Primary Blue: `#4a90e2`
- Accent Teal: `#6ac6b5`
- Text: `#2c3e50`
- Background: `#f8f9fa`

### Add More Services
Copy a service card in `index.html` and modify:
```html
<div class="service-card">
    <div class="service-icon">
        <!-- Add your SVG icon -->
    </div>
    <h3>Service Name</h3>
    <p>Description</p>
</div>
```

### Change Font
Replace Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Update CSS:
```css
body {
    font-family: 'YOUR-FONT', sans-serif;
}
```

## 📚 Documentation

- **[IMAGE-UPLOAD-GUIDE.md](IMAGE-UPLOAD-GUIDE.md)** - Complete image optimization guide
- **[PERFORMANCE-SEO-GUIDE.md](PERFORMANCE-SEO-GUIDE.md)** - Advanced performance and SEO tips

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari 14+
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema.org structured data
- [x] Semantic HTML
- [x] Alt text on images
- [x] Mobile-friendly
- [x] Fast loading speed
- [x] HTTPS ready
- [x] Sitemap ready

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Credits

- **Images**: [Unsplash](https://unsplash.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Icons**: Custom SVG icons

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Open an issue on GitHub
3. Review browser console for errors (F12)

## 🌟 Live Demo

View the live site: [https://ozerkulak-spec.github.io/therapist-landing-page/](https://ozerkulak-spec.github.io/therapist-landing-page/)

---

**Made with ❤️ for mental health professionals worldwide**
