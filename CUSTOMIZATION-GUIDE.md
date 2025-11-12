# 🎨 Customization Guide for Your Therapist Website

Welcome! This guide will help you customize this professional therapist landing page to match your practice.

## 📋 Quick Start Checklist

- [ ] Update personal information (name, location, phone, email)
- [ ] Replace placeholder images with your own photos
- [ ] Modify service descriptions to match your specialties
- [ ] Add your actual testimonials
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add your own blog content

---

## 1. Personal Information Setup

### 📞 Phone Number & Location
Open `index.html` and find the `SITE_CONFIG` section (around line 68):

```javascript
const SITE_CONFIG = {
    countryCode: '1',  // Change this: 1=USA, 44=UK, 90=Turkey, 49=Germany
    phoneNumber: '5551234567',  // Your phone without country code
    email: 'dr.mitchell@example.com',  // Your email
    location: 'Los Angeles, CA',  // Your location
    doctorName: 'Dr. Sarah Mitchell'  // Your name
};
```

**Example for Turkey:**
```javascript
const SITE_CONFIG = {
    countryCode: '90',
    phoneNumber: '5321234567',
    email: 'your.email@example.com',
    location: 'Istanbul, Turkey',
    doctorName: 'Dr. Ayşe Yılmaz'
};
```

### 🏷️ Update Your Name Throughout
Search and replace "Dr. Sarah Mitchell" with your name in:
- `index.html` - All occurrences
- `blog.html` - Footer and navigation
- All blog post files - Author sections

### 📧 Update Contact Information
In `index.html`, find the contact section and update:
- Email addresses
- Business hours
- Location description

---

## 2. Image Customization

### 🖼️ Replace Placeholder Images

Current images are from Unsplash. Replace them with your own:

#### Hero Image (Main banner)
- Location: `index.html` line ~200
- Current: `https://images.unsplash.com/photo-1573497019940...`
- Recommended size: 800x600px
- Format: JPG or WebP

#### About Section Photo
- Location: `index.html` line ~240
- Your professional headshot
- Recommended size: 500x600px

#### Service Images
Optionally replace service card icons with custom images in the Services section.

### 📸 How to Optimize Your Images

1. **Resize images** to recommended dimensions using:
   - [Squoosh.app](https://squoosh.app) (free, online)
   - Photoshop, GIMP, or any image editor

2. **Convert to WebP** for faster loading:
   - Use Squoosh.app and select WebP format
   - Quality: 80-85 is perfect

3. **Upload images:**
   - Option A: Use image hosting service (ImgBB, Imgur, Cloudinary)
   - Option B: Create `images/` folder in project and use relative paths

---

## 3. Services Customization

### ✏️ Edit Service Offerings

In `index.html`, find the Services section (line ~320):

```html
<div class="service-card">
    <h3 class="service-title">Individual Counseling</h3>
    <p class="service-description">Your description here...</p>
</div>
```

**Tips:**
- Keep descriptions concise (2-3 sentences)
- Focus on benefits, not just features
- Use active voice ("I help you..." vs "Therapy helps...")

**Example Services:**
- Individual Therapy
- Couples/Marriage Counseling
- Family Therapy
- Group Therapy
- EMDR Therapy
- CBT (Cognitive Behavioral Therapy)
- Teen/Adolescent Counseling
- Trauma Therapy

---

## 4. Testimonials

### 💬 Add Real Client Reviews

Location: `index.html` line ~420

```html
<div class="testimonial-card">
    <div class="stars-rating">
        <!-- 5 star SVGs here -->
    </div>
    <p class="testimonial-text">Client quote here...</p>
    <div class="testimonial-author">
        <strong>Client Initials</strong>
        <span>Service Type</span>
    </div>
</div>
```

**Best Practices:**
- Use initials only (privacy)
- Get written permission before publishing
- Keep quotes authentic and specific
- Include variety of services
- 3-6 testimonials is ideal

---

## 5. FAQ Section

### ❓ Customize Frequently Asked Questions

Location: `index.html` line ~480

Add questions specific to your practice:
- Your therapy approach
- Insurance accepted
- Session formats (in-person/online)
- Cancellation policies
- New client process
- Pricing/payment options

---

## 6. Blog Customization

### 📝 Update Existing Blog Posts

Six blog posts are included as templates:
1. `blog-post-anxiety.html` - Anxiety coping
2. `blog-post-communication.html` - Relationship communication
3. `blog-post-selfcare.html` - Self-care practices
4. `blog-post-stress.html` - Workplace stress
5. `blog-post-depression.html` - Understanding depression
6. `blog-post-boundaries.html` - Setting boundaries

**To customize:**
1. Open each blog post file
2. Update the content with your expertise
3. Add your own insights and examples
4. Replace images if desired
5. Update dates to current

**To create new posts:**
1. Copy any existing blog post file
2. Rename it (e.g., `blog-post-your-topic.html`)
3. Update content, title, meta description
4. Add it to `blog.html` grid with matching category

---

## 7. Colors & Branding (Optional)

### 🎨 Change Color Scheme

Default colors are blue-teal gradient. To change, edit `style.css`:

**Primary colors** (search and replace):
- `#4a90e2` (main blue) → Your primary color
- `#6ac6b5` (teal) → Your secondary color
- `#2c3e50` (dark text) → Your text color

**Where colors are used:**
- Gradients: Hero section, stats, buttons
- Accent: Links, icons, hover states
- Background: Sections alternating colors

**Pro tip:** Use [Coolors.co](https://coolors.co) to generate harmonious color palettes.

---

## 8. Social Media Links

### 🔗 Add Your Social Profiles

Location: Footer in `index.html` and `blog.html`

```html
<div class="social-links">
    <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">...</a>
    <a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">...</a>
    <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">...</a>
</div>
```

Replace `#` placeholders with your actual profile URLs.

---

## 9. SEO Optimization

### 🔍 Update Meta Tags

In `<head>` section of each HTML file:

```html
<meta name="description" content="Your unique description here">
<meta name="keywords" content="your, relevant, keywords">
<title>Your Page Title - Your Name</title>
```

**Best practices:**
- Description: 150-160 characters
- Title: 50-60 characters
- Keywords: 5-10 relevant terms
- Include your location for local SEO

---

## 10. Deployment

### 🚀 Publishing Your Website

**Option 1: GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository named `your-username.github.io`
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site: `https://your-username.github.io`

**Option 2: Custom Domain**
1. Buy domain (Namecheap, GoDaddy, Google Domains)
2. Use hosting: Netlify, Vercel, or traditional web host
3. Upload files via FTP or connect GitHub
4. Configure DNS settings

**Option 3: WordPress Integration**
- Install HTML5 Blank theme
- Add files to theme folder
- Customize header/footer

---

## 11. Legal Requirements

### ⚖️ Important Pages to Add

Create these pages for compliance:

**Privacy Policy** (`privacy.html`)
- How you collect/use visitor data
- Cookie policy
- HIPAA compliance statement

**Terms of Service** (`terms.html`)
- Website usage terms
- Disclaimer about online information

**Accessibility Statement**
- Compliance with ADA/WCAG standards

*Consider using legal template generators or consulting a lawyer.*

---

## 12. Maintenance Tips

### 🔧 Keeping Your Site Fresh

**Monthly:**
- Add 1-2 new blog posts
- Update testimonials
- Check all links work
- Review contact information

**Quarterly:**
- Update images (seasonal)
- Refresh FAQ based on common questions
- Review analytics (Google Analytics)
- Test mobile responsiveness

**Annually:**
- Review entire content
- Update credentials/certifications
- Refresh design if needed

---

## 🆘 Need Help?

**Common Issues:**

**Q: Phone number not updating on all pages?**  
A: Make sure `config.js` is loaded and SITE_CONFIG is correct.

**Q: Images not showing?**  
A: Check image URLs are valid and use https:// (not http://)

**Q: Mobile menu not working?**  
A: Clear browser cache and ensure JavaScript is enabled

**Q: Want different layout?**  
A: Edit `style.css` - look for media queries for responsive design

---

## 📚 Additional Resources

- **Free Images:** Unsplash.com, Pexels.com
- **Image Optimization:** Squoosh.app, TinyPNG.com
- **Color Palettes:** Coolors.co, Adobe Color
- **Icons:** Font Awesome, Heroicons
- **Fonts:** Google Fonts
- **Testing:** Google PageSpeed Insights, GTmetrix

---

## ✅ Final Checklist Before Launch

- [ ] All personal information updated
- [ ] Images replaced with your own
- [ ] Testimonials are real (with permission)
- [ ] All links tested and working
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] Browser compatibility tested (Chrome, Firefox, Safari)
- [ ] Spelling and grammar checked
- [ ] Privacy policy added
- [ ] Google Analytics installed (optional)
- [ ] SEO meta tags optimized
- [ ] Social media links working

---

**Congratulations!** 🎉 Your professional therapist website is ready to help you connect with clients online.

For advanced customization or technical support, consider hiring a web developer on platforms like Fiverr or Upwork.
