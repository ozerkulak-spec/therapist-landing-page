# 🎨 Super Easy Customization Guide

## 🚀 Quick Start - Change Everything in 5 Minutes!

All your customization is now in **ONE FILE**: `site-config.js`

No need to hunt through HTML or CSS files anymore!

---

## 📝 Step-by-Step Instructions

### 1. 🎨 Change All Colors (30 seconds!)

Open `site-config.js` and find the `colors:` section (around line 50).

**Want a new color scheme?**

1. Go to **[Coolors.co](https://coolors.co/generate)** and generate a palette
2. Click on any color to copy the HEX code
3. Paste into `site-config.js`

```javascript
colors: {
    primary: "#4a90e2",      // 👈 Change this!
    secondary: "#6ac6b5",    // 👈 And this!
    // ... rest stays the same
}
```

**🎨 Pre-made Color Schemes:**

<details>
<summary><strong>🌊 Ocean Blue (Professional)</strong></summary>

```javascript
primary: "#0077b6",
primaryDark: "#023e8a",
secondary: "#00b4d8",
secondaryDark: "#0096c7",
gradientStart: "#0077b6",
gradientEnd: "#00b4d8"
```
</details>

<details>
<summary><strong>🌿 Nature Green (Calming)</strong></summary>

```javascript
primary: "#2d6a4f",
primaryDark: "#1b4332",
secondary: "#52b788",
secondaryDark: "#40916c",
gradientStart: "#2d6a4f",
gradientEnd: "#52b788"
```
</details>

<details>
<summary><strong>🌸 Soft Pink (Warm & Welcoming)</strong></summary>

```javascript
primary: "#d8668c",
primaryDark: "#c9527a",
secondary: "#f4a6c9",
secondaryDark: "#e98fb0",
gradientStart: "#d8668c",
gradientEnd: "#f4a6c9"
```
</details>

<details>
<summary><strong>🌅 Sunset Orange (Energetic)</strong></summary>

```javascript
primary: "#ff6b35",
primaryDark: "#e55527",
secondary: "#ffaa5a",
secondaryDark: "#ff9642",
gradientStart: "#ff6b35",
gradientEnd: "#ffaa5a"
```
</details>

<details>
<summary><strong>💜 Royal Purple (Sophisticated)</strong></summary>

```javascript
primary: "#7209b7",
primaryDark: "#560bad",
secondary: "#b185db",
secondaryDark: "#9d72c8",
gradientStart: "#7209b7",
gradientEnd: "#b185db"
```
</details>

<details>
<summary><strong>🌊 Teal & Turquoise (Modern)</strong></summary>

```javascript
primary: "#06a19f",
primaryDark: "#048a87",
secondary: "#4fc3c1",
secondaryDark: "#38b0ae",
gradientStart: "#06a19f",
gradientEnd: "#4fc3c1"
```
</details>

**After changing colors:**
- Save the file
- Refresh your browser
- 🎉 All colors update automatically!

---

### 2. ✏️ Change Your Text Content (2 minutes!)

Everything is labeled clearly in `site-config.js`:

**Change your name and contact:**
```javascript
contact: {
    name: "Dr. Sarah Johnson",        // 👈 Your name here
    title: "Licensed Therapist",      // 👈 Your title
    phone: "5551234567",              // 👈 Your phone
    email: "hello@therapist.com",     // 👈 Your email
    // ... etc
}
```

**Change hero text:**
```javascript
hero: {
    title: "Your Path to Mental Wellness Starts Here",  // 👈 Main heading
    subtitle: "Professional Therapy Services",           // 👈 Subheading
    description: "Licensed therapist specializing...",   // 👈 Description
}
```

**Change services:**
```javascript
services: [
    {
        icon: "👤",
        title: "Individual Therapy",              // 👈 Service name
        description: "One-on-one sessions...",    // 👈 Description
        price: "$150",                            // 👈 Your price
        duration: "50 min"                        // 👈 Session length
    },
    // Add more services or remove unwanted ones!
]
```

**Everything updates automatically!** No HTML editing needed!

---

### 3. 🖼️ Change Images (1 minute!)

Find the `images:` section in `site-config.js`:

```javascript
images: {
    hero: "https://your-image-url.com/hero.jpg",     // 👈 Main background
    about: "https://your-image-url.com/about.jpg",   // 👈 About section
    // ... etc
}
```

**Where to upload your images:**

**Option 1: Use Image Hosting (Free)**
- [Imgur.com](https://imgur.com) - Free, easy upload
- [ImgBB.com](https://imgbb.com) - No account needed
- [Cloudinary.com](https://cloudinary.com) - Professional (free tier)

**Option 2: Use Your Web Hosting**
- Upload to your server
- Use the full URL: `https://yoursite.com/images/hero.jpg`

**Option 3: Keep in Project Folder**
- Save images in project folder
- Use relative path: `./images/hero.jpg`

**Recommended Image Sizes:**
- Hero: 1920x1080px
- About: 800x600px
- Services: 400x300px each
- Blog posts: 1200x600px

**Free Stock Photos:**
- [Unsplash.com](https://unsplash.com) - Best quality
- [Pexels.com](https://pexels.com) - Great variety
- [Pixabay.com](https://pixabay.com) - Free commercial use

---

### 4. 📝 Add or Remove Blog Posts (30 seconds!)

Open `blog-config.js` - this is your blog management center!

**To Add a New Blog Post:**

1. Copy this template:
```javascript
{
    id: "your-post-name",  // Use lowercase, no spaces
    title: "Your Blog Post Title",
    excerpt: "Short 2-3 sentence description...",
    category: "Mental Health",  // Must match existing categories
    author: {
        name: "Your Name",
        avatar: "https://your-photo.jpg"
    },
    readTime: 5,  // Minutes
    date: "2024-03-15",  // YYYY-MM-DD format
    image: "https://your-blog-image.jpg",
    filename: "blog-post-your-name.html",  // Must create this file!
    keywords: "keyword1, keyword2, keyword3",
    featured: true,  // true = shows at top
    showOnHomepage: true  // true = shows on main page
}
```

2. Add a comma after the last blog post
3. Paste your new post entry
4. Save the file
5. Create the actual blog post HTML file (or copy an existing one and modify it)

**To Remove a Blog Post:**

1. Find the post in `BLOG_POSTS` array
2. Delete the entire `{ }` block
3. Remove the comma if it's the last item
4. Save!

**Your blog updates automatically!** No need to edit blog.html!

---

### 5. ⚙️ Show/Hide Sections (10 seconds!)

At the bottom of `site-config.js`, find `settings:`:

```javascript
settings: {
    showStats: true,         // 👈 false = hide stats section
    showTestimonials: true,  // 👈 false = hide testimonials
    showFAQ: true,           // 👈 false = hide FAQ
    showBlog: true,          // 👈 false = hide blog link
    // ... etc
}
```

Change `true` to `false` to hide any section!

---

## 🎨 Advanced Customization

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Choose your font (e.g., "Montserrat")
3. Click "Get embed code"
4. Copy the `<link>` code
5. Replace the existing Google Fonts link in `index.html` (in the `<head>` section)
6. In `style.css`, search for `font-family: 'Poppins'` and replace with your font name

### Change Button Styles

Edit `style.css` and search for `.cta-button` to customize button appearance.

### Add More Services

In `site-config.js`, just copy an existing service block and add to the array:

```javascript
services: [
    { /* existing service 1 */ },
    { /* existing service 2 */ },
    { /* existing service 3 */ },
    { 
        icon: "🎯",
        title: "Your New Service",
        description: "Description here...",
        price: "$100",
        duration: "45 min"
    }  // 👈 Your new service!
]
```

### Change Stats Numbers

In `site-config.js`, find the `stats:` array:

```javascript
stats: [
    {
        icon: "👥",
        number: 1500,  // 👈 Change this number!
        suffix: "+",
        label: "Clients Helped"
    },
    // ... more stats
]
```

---

## 🔧 Troubleshooting

### Colors not changing?
- Make sure you saved `site-config.js`
- Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check browser console (F12) for errors

### Blog posts not showing?
- Make sure `filename:` matches your actual HTML file name
- Check that the HTML file exists in your project folder
- Refresh browser after making changes

### Images not loading?
- Check image URL is correct (copy-paste it in browser address bar to test)
- Make sure URLs start with `https://` or `http://`
- For local images, use `./images/your-image.jpg`

### Section not hiding?
- Make sure you're editing `site-config.js` (not `config.js`)
- Check spelling: `showStats: false` (lowercase true/false)
- Save file and refresh browser

---

## 📚 Quick Reference

### File Structure
```
therapist-landing-page/
├── site-config.js       ← 🎨 CUSTOMIZE EVERYTHING HERE!
├── blog-config.js       ← 📝 MANAGE BLOG POSTS HERE!
├── index.html           ← Main page (rarely need to edit)
├── blog.html            ← Blog page (auto-generates from blog-config.js)
├── style.css            ← Styles (advanced customization only)
└── blog-post-*.html     ← Individual blog posts
```

### What to Edit Where

| What You Want to Change | File to Edit | How Long |
|-------------------------|--------------|----------|
| Colors | `site-config.js` | 30 sec |
| Text content | `site-config.js` | 2 min |
| Images | `site-config.js` | 1 min |
| Add/remove blog posts | `blog-config.js` | 30 sec |
| Hide sections | `site-config.js` | 10 sec |
| Fonts | `index.html` + `style.css` | 5 min |
| Advanced styling | `style.css` | Varies |

---

## 🎯 Common Customization Scenarios

### Scenario 1: "I want a completely different color theme"
1. Go to [Coolors.co](https://coolors.co/generate)
2. Generate palettes until you find one you love
3. Copy the 2 main colors (primary & secondary)
4. Paste into `site-config.js` → `colors` section
5. Save & refresh!

### Scenario 2: "I want to add my 7th blog post"
1. Open `blog-config.js`
2. Copy an existing blog post entry
3. Paste at the end of the array (before `]`)
4. Update all fields with your post info
5. Create the HTML file for your post (copy an existing one as template)
6. Save both files & refresh blog page!

### Scenario 3: "I want to remove testimonials"
1. Open `site-config.js`
2. Find `settings:` section
3. Change `showTestimonials: true` to `showTestimonials: false`
4. Save & refresh!

### Scenario 4: "I want different service prices"
1. Open `site-config.js`
2. Find `services:` array
3. Change `price: "$150"` to your price
4. Save & refresh!

---

## 🆘 Need Help?

### Can't find something?
- Press `Ctrl + F` (Windows) or `Cmd + F` (Mac) in your text editor
- Search for the text you want to change
- It's probably in `site-config.js`!

### Made a mistake?
- Keep a backup copy of `site-config.js` before making changes
- Or use Git to revert: `git checkout site-config.js`

### Want to start fresh?
- Delete your modified `site-config.js`
- The original is always in your download/repository

---

## 🎉 You're Done!

Customizing your site is now as easy as:
1. Open `site-config.js`
2. Find what you want to change
3. Change it
4. Save & refresh!

**No HTML or CSS knowledge required for 90% of customizations!**

---

## 🔗 Helpful Resources

- **Color Picker:** [Coolors.co](https://coolors.co)
- **Free Images:** [Unsplash.com](https://unsplash.com)
- **Image Hosting:** [Imgur.com](https://imgur.com)
- **Google Fonts:** [fonts.google.com](https://fonts.google.com)
- **Compress Images:** [Squoosh.app](https://squoosh.app)

---

**Happy Customizing!** 🎨🚀

If you found this helpful, consider leaving a review! ⭐⭐⭐⭐⭐
