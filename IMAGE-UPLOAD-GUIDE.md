# Image Upload and Optimization Guide

## Supported Image Formats

The website supports the following image formats:
- **WebP** (Recommended) - Best compression and quality
- **JPEG/JPG** - Wide compatibility
- **PNG** - For images with transparency
- **SVG** - For icons and logos

## How to Add Your Own Images

### Option 1: Replace Existing Images with CDN URLs

1. Upload your images to a CDN service:
   - **Cloudinary** (Free tier available): https://cloudinary.com
   - **Imgbb** (Free): https://imgbb.com
   - **ImageKit** (Free tier): https://imagekit.io

2. Get the image URL and replace in `index.html`:

```html
<!-- Hero Section Image -->
<picture>
    <source srcset="YOUR_WEBP_URL" type="image/webp">
    <img src="YOUR_JPG_URL" alt="Professional therapy session" loading="lazy" width="800" height="600">
</picture>

<!-- Profile Image -->
<picture>
    <source srcset="YOUR_WEBP_URL" type="image/webp">
    <img src="YOUR_JPG_URL" alt="Dr. Sarah Mitchell" loading="lazy" width="500" height="600">
</picture>
```

### Option 2: Local Images (For Self-Hosted)

1. Create an `images` folder in your project:
   ```
   therapist-landing-page/
   ├── images/
   │   ├── hero.webp
   │   ├── hero.jpg (fallback)
   │   ├── profile.webp
   │   └── profile.jpg (fallback)
   ├── index.html
   ├── style.css
   └── config.js
   ```

2. Update image paths in `index.html`:
```html
<picture>
    <source srcset="images/hero.webp" type="image/webp">
    <img src="images/hero.jpg" alt="Professional therapy session" loading="lazy">
</picture>
```

## Image Optimization Tips

### Recommended Image Sizes:
- **Hero Image**: 1600x900px (16:9 ratio) - Max 200KB
- **Profile Image**: 800x960px (5:6 ratio) - Max 150KB
- **Service Icons**: SVG format (scalable)

### Free Online Tools to Optimize Images:

1. **Convert to WebP**:
   - https://squoosh.app/ (Google's tool)
   - https://cloudconvert.com/jpg-to-webp

2. **Compress Images**:
   - https://tinypng.com/ (PNG/JPG)
   - https://compressor.io/ (All formats)
   - https://imagecompressor.com/

3. **Resize Images**:
   - https://www.birme.net/ (Batch resize)
   - https://imageresizer.com/

### WebP Conversion Commands (if you have tools installed):

**Using cwebp (Google's WebP tool)**:
```bash
# Install
# Windows: Download from https://developers.google.com/speed/webp/download
# Mac: brew install webp
# Linux: sudo apt-get install webp

# Convert with quality 85
cwebp -q 85 input.jpg -o output.webp

# Batch convert all JPGs
for file in *.jpg; do cwebp -q 85 "$file" -o "${file%.jpg}.webp"; done
```

## Performance Best Practices

1. **Always provide WebP with JPG/PNG fallback**
2. **Use lazy loading**: `loading="lazy"` attribute
3. **Specify image dimensions**: `width` and `height` attributes
4. **Optimize alt text**: Descriptive for SEO and accessibility
5. **Target file sizes**:
   - Hero images: < 200KB
   - Profile images: < 150KB
   - Thumbnails: < 50KB

## Example: Complete Image Implementation

```html
<!-- Optimized Hero Image with WebP -->
<picture>
    <!-- WebP version for modern browsers -->
    <source 
        srcset="images/hero.webp" 
        type="image/webp">
    
    <!-- Fallback for older browsers -->
    <img 
        src="images/hero.jpg" 
        alt="Comfortable therapy office with natural lighting and professional setup" 
        loading="lazy" 
        width="1600" 
        height="900"
        decoding="async">
</picture>
```

## Testing Your Images

1. **Check file sizes**: Right-click image → Properties
2. **Test loading speed**: 
   - Chrome DevTools → Network tab → Reload page
   - Check "Size" and "Time" columns
3. **Test WebP support**: 
   - Chrome/Edge: ✅ Supported
   - Firefox: ✅ Supported
   - Safari 14+: ✅ Supported
   - IE11: ❌ Falls back to JPG/PNG

## Quick Setup Checklist

- [ ] Choose between CDN or local hosting
- [ ] Optimize images (compress and resize)
- [ ] Convert to WebP format
- [ ] Update image paths in `index.html`
- [ ] Add descriptive alt text
- [ ] Test on different devices and browsers
- [ ] Verify page load speed

## Need Help?

For custom image integration or optimization issues:
1. Check file sizes are within recommended limits
2. Verify image paths are correct
3. Test WebP fallback is working
4. Ensure images load on mobile devices
