# 🎛️ Admin Dashboard User Guide

## Quick Start (30 seconds)

1. Open `admin/index.html` in your browser (double-click the file)
2. Edit any content you want
3. Click **"Generate Config Files"** button
4. Copy the generated code
5. Paste into your `site-config.js` and `blog-config.js` files
6. Refresh your website - done! ✅

## Features Overview

### 🎨 Theme & Colors
- **6 Quick Presets**: One-click color schemes (Ocean Blue, Nature Green, Sunset Orange, Royal Purple, Soft Pink)
- **Custom Colors**: Pick any color with visual color pickers
- **Live Preview**: See changes in real-time

### ✏️ Content Management
- **Contact Info**: Name, title, phone, email, location
- **Social Media**: Facebook, Instagram, LinkedIn, Twitter URLs
- **Hero Section**: Main headline, subtitle, description, button texts
- **Services**: View/edit your therapy services (edit feature coming soon)
- **Testimonials**: Client reviews (edit feature coming soon)
- **FAQ**: Questions and answers (edit feature coming soon)

### 📝 Blog Management
- **Blog Posts**: View all posts, delete posts
- **Categories**: Manage blog categories (Mental Health, Relationships, etc.)
- Note: Full blog editor coming in next version

### 🖼️ Image Management
- **Hero Image**: Main homepage background
- **About Image**: Your profile photo
- Simply paste image URLs (from Imgur, ImgBB, etc.)

### 📊 SEO & Analytics
**All Major Tracking Codes Supported:**
- Google Analytics (GA4) - Format: `G-XXXXXXXXXX`
- Google Tag Manager - Format: `GTM-XXXXXXX`
- Facebook Pixel - Your pixel ID
- Google Ads Conversion - Format: `AW-XXXXXXXXX`
- Instagram Business Tag
- TikTok Pixel
- LinkedIn Insight Tag
- Hotjar Tracking
- Microsoft Clarity

### ⚙️ Settings
- Toggle sections on/off:
  - Show/Hide Stats section
  - Show/Hide Testimonials
  - Show/Hide FAQ
  - Show/Hide Blog

### 💾 Export/Import
- **Generate Config**: Creates code to copy-paste
- **JSON Backup**: Download full configuration as JSON file
- **Import Config**: Upload JSON to restore settings

### 👁️ Live Preview
- **Device Toggle**: View as Desktop / Tablet / Mobile
- **Refresh**: Update preview with latest changes

## Step-by-Step: Change Colors (30 seconds)

1. Open `admin/index.html`
2. Click **"🎨 Theme & Colors"** in sidebar
3. Choose a quick preset (e.g., "Ocean Blue") OR use color pickers
4. Click **"Apply Colors"**
5. Click **"Generate Config Files"** (top button)
6. Copy the `site-config.js` code
7. Open your actual `site-config.js` file
8. Paste and save
9. Refresh your website ✅

## Step-by-Step: Change Text Content (2 minutes)

1. Open `admin/index.html`
2. Click **"✏️ Content"** in sidebar
3. Edit any field:
   - Contact Name: Your name
   - Hero Title: Main headline
   - Hero Description: Intro text
   - Button texts, etc.
4. Changes auto-save as you type
5. Click **"Generate Config Files"**
6. Copy `site-config.js` code
7. Paste into your actual file
8. Refresh website ✅

## Step-by-Step: Add Tracking Codes (1 minute)

1. Open `admin/index.html`
2. Click **"📊 SEO & Analytics"** in sidebar
3. Paste your tracking codes:
   - Google Analytics: `G-XXXXXXXXXX`
   - Facebook Pixel: Your pixel ID
   - TikTok Pixel: Your pixel ID
   - etc.
4. Click **"Generate Config Files"**
5. Copy and paste `site-config.js`
6. Deploy website - tracking is live! ✅

## Backup & Restore

### Create Backup
1. Open dashboard
2. Click **"💾 Export/Import"**
3. Click **"Download Full Backup"**
4. JSON file downloads with date stamp
5. Keep safe!

### Restore from Backup
1. Open dashboard
2. Click **"💾 Export/Import"**
3. Open your backup JSON in notepad
4. Copy all text
5. Paste into "Import Configuration" box
6. Click **"Import Configuration"**
7. All settings restored! ✅

## Troubleshooting

### Dashboard won't load
- **Solution**: Make sure `site-config.js` and `blog-config.js` are in the parent folder
- **Workaround**: Dashboard works even without existing config, start fresh

### Generated code doesn't work
- **Check**: Did you copy the ENTIRE code block?
- **Check**: Did you paste into the correct file?
- **Check**: Did you save the file after pasting?

### Colors don't apply to website
- **Solution**: Make sure you copied `site-config.js` code, not `blog-config.js`
- **Solution**: Hard refresh your website: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Preview not updating
- **Solution**: Click the "Refresh Preview" button
- **Alternative**: Use device toggle to reload

### Can't edit services/testimonials/FAQ
- **Current Status**: Edit feature coming in next version
- **Workaround**: Use "Generate Config Files" and edit the JSON manually
- **Workaround**: Delete item and re-add with correct info

## Advanced Tips

### Custom Color Palettes
- Use [Coolors.co](https://coolors.co/) to generate palettes
- Copy hex codes into color pickers
- Save as JSON backup for future use

### Image Hosting
Best free options:
- **Imgur**: Easy, fast, no account needed
- **ImgBB**: Good for long-term hosting
- **Cloudinary**: Professional, great free tier

### SEO Best Practices
1. Fill in Meta Title (60 characters max)
2. Meta Description (160 characters max)
3. Add tracking codes AFTER website launch
4. Use Google Tag Manager for multiple tags

### Workflow Recommendations
1. **Always backup first**: Download JSON before major changes
2. **Test locally**: Generate config, test on local file before deploying
3. **Version control**: Keep old JSON backups dated
4. **Preview check**: Use device toggle to check mobile appearance

## File Structure

```
therapist-landing-page/
├── admin/
│   ├── index.html         ← Open this file
│   ├── css/
│   │   └── admin.css
│   ├── js/
│   │   └── admin.js
│   └── README.md          ← You are here
├── site-config.js         ← Paste generated code here
├── blog-config.js         ← Paste blog code here
└── index.html             ← Your actual website
```

## What's Coming Next

**Version 2.0 Features:**
- ✅ Full modal editors for services/testimonials/FAQ
- ✅ Drag & drop blog post reordering
- ✅ Image uploader (no need for external hosting)
- ✅ One-click publish to GitHub Pages
- ✅ Undo/Redo functionality
- ✅ Auto-save to cloud

## Support

**Need help?**
- Check `EASY-CUSTOMIZATION.md` in root folder
- All features auto-save - don't worry about losing work
- Dashboard works offline - no internet needed

---

**Made with ❤️ for easy website management**

*Last Updated: January 2025*
