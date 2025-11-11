# 🏠 Evde Projeye Devam Etme Rehberi

## 📋 Proje Durumu ve Devam Noktası

### ✅ Tamamlanan Çalışmalar

1. **Ana Sayfa (index.html)** ✓
   - Hero, About, Services, Why Choose, Testimonials, Contact, Footer
   - Sticky navigation + hamburger menü
   - Floating phone ve WhatsApp butonları
   - WebP resim desteği + lazy loading
   - Ülke bazlı konfigürasyon sistemi

2. **Blog Sayfası (blog.html)** ✓
   - Kategori filtreleme sistemi
   - 6 blog kartı
   - Newsletter bölümü
   - Responsive tasarım

3. **Blog Yazısı (blog-post-anxiety.html)** ✓
   - Tam makale içeriği (Anxiety konulu)
   - Paylaşım butonları
   - İlgili yazılar bölümü

4. **Stil Dosyaları** ✓
   - style.css (Ana stil)
   - blog.css (Blog stil)

5. **SEO & Performance** ✓
   - Meta tags, Open Graph, Schema.org
   - WebP + fallback
   - Lazy loading
   - Preconnect optimizasyonu

### ⏳ Devam Edilecek İşler

**YÜKSECONKÜLİK:**
1. Kalan 5 blog yazısını oluştur:
   - blog-post-communication.html (İlişkilerde İletişim)
   - blog-post-selfcare.html (Öz Bakım)
   - blog-post-stress.html (İş Stresi)
   - blog-post-depression.html (Depresyon)
   - blog-post-boundaries.html (Sınırlar)

**ORTA ÖNCELİK:**
2. Testimonials bölümüne daha fazla referans ekle
3. Services sayfası detaylandır
4. Contact form backend entegrasyonu (EmailJS veya Formspree)

**DÜŞÜK ÖNCELİK:**
5. Sitemap.xml oluştur
6. robots.txt ekle
7. 404 hata sayfası
8. Blog pagination (sayfalama)

---

## 🚀 Evde Kurulum Adımları

### 1. Git Repository'yi Clone Et

```bash
# Terminal veya Git Bash'te şunu çalıştır:
cd C:\Users\YourUsername\Documents
git clone https://github.com/ozerkulak-spec/therapist-landing-page.git
cd therapist-landing-page
```

### 2. VS Code'da Aç

```bash
# Terminal'den:
code .

# Veya VS Code'u aç ve File > Open Folder > therapist-landing-page klasörünü seç
```

### 3. Live Server Uzantısını Kur (Yoksa)

1. VS Code'da Extensions (Ctrl+Shift+X)
2. "Live Server" ara
3. Ritwick Dey'in Live Server'ını kur
4. index.html'e sağ tık > "Open with Live Server"

---

## 💬 GitHub Copilot'a Vereceğin Prompt

```
Merhaba! Ben bir therapist landing page projesi üzerinde çalışıyorum. 
Projenin GitHub adresi: https://github.com/ozerkulak-spec/therapist-landing-page

PROJE DURUMU:
✅ Ana sayfa (index.html) - Tamamlandı
✅ Blog listing sayfası (blog.html) - Tamamlandı  
✅ 1 adet blog post (blog-post-anxiety.html) - Tamamlandı
✅ CSS dosyaları (style.css, blog.css) - Tamamlandı
✅ SEO optimizasyonu, WebP desteği, lazy loading - Tamamlandı
✅ Ülke bazlı telefon numarası konfigürasyonu (config.js) - Tamamlandı

KALDI:
⏳ Kalan 5 blog yazısını oluşturmalıyım (aynı blog-post-anxiety.html gibi profesyonel):
   1. blog-post-communication.html - "7 Golden Rules of Healthy Communication in Relationships"
   2. blog-post-selfcare.html - "What is Self-Care and Why is it So Important?"
   3. blog-post-stress.html - "Stress Management Techniques in the Workplace"  
   4. blog-post-depression.html - "Understanding Depression: Symptoms and Getting Support"
   5. blog-post-boundaries.html - "Learning to Set Healthy Boundaries"

TEKNIK DETAYLAR:
- HTML5, CSS3, Vanilla JavaScript (framework yok)
- Responsive design (mobile-first)
- Google Fonts: Poppins
- Color scheme: #4a90e2 (mavi) ve #6ac6b5 (teal) gradient
- WebP görsel formatı + JPG fallback
- Blog yazıları 2000-2500 kelime uzunluğunda
- Her yazıda: Hero, featured image, içerik bölümleri, paylaşım butonları, ilgili yazılar
- Unsplash'tan profesyonel görseller kullanılıyor

ŞİMDİ YAPMAK İSTEDİĞİM:
[Buraya yapmak istediğin işi yaz]

Örnek:
- "blog-post-communication.html dosyasını oluştur"
- "Contact form'a EmailJS entegrasyonu ekle"
- "Sitemap.xml oluştur"
- "Blog kartlarındaki görselleri değiştir"

LÜTFEN:
1. Mevcut dosya yapısını ve stil tutarlılığını koru
2. SEO best practices'leri uygula
3. Responsive tasarımı koru
4. Değişiklik yaptıktan sonra Git commit mesajı öner
```

---

## 📁 Proje Dosya Yapısı

```
therapist-landing-page/
├── index.html                  # Ana sayfa
├── blog.html                   # Blog listing
├── blog-post-anxiety.html      # Anxiety yazısı (✓)
├── blog-post-communication.html # TODO
├── blog-post-selfcare.html     # TODO
├── blog-post-stress.html       # TODO
├── blog-post-depression.html   # TODO
├── blog-post-boundaries.html   # TODO
├── style.css                   # Ana CSS
├── blog.css                    # Blog CSS
├── config.js                   # Telefon konfigürasyonu
├── README.md                   # Proje dokümantasyonu
├── IMAGE-UPLOAD-GUIDE.md       # Görsel rehberi
├── PERFORMANCE-SEO-GUIDE.md    # SEO rehberi
├── LICENSE.txt                 # MIT License
└── .git/                       # Git repository
```

---

## 🔧 Sık Kullanılacak Git Komutları

### Değişiklikleri Çekmek (Pull)
```bash
git pull origin main
```

### Değişiklikleri Görmek
```bash
git status
git diff
```

### Commit Yapmak
```bash
git add .
git commit -m "Add blog post about communication"
git push origin main
```

### Branch Oluşturmak (Opsiyonel)
```bash
git checkout -b feature/blog-posts
git push -u origin feature/blog-posts
```

---

## 🎨 Tasarım Referansları

### Renk Paleti
```css
/* Primary Colors */
--primary-blue: #4a90e2;
--accent-teal: #6ac6b5;
--dark-text: #2c3e50;
--light-bg: #f8f9fa;
--white: #ffffff;

/* Gradient */
background: linear-gradient(135deg, #4a90e2 0%, #6ac6b5 100%);
```

### Typography
```css
font-family: 'Poppins', sans-serif;
/* Weights: 300, 400, 500, 600, 700 */

/* Heading Sizes */
h1: 3rem (48px)
h2: 2rem (32px)
h3: 1.5rem (24px)
p: 1.1rem (17.6px)
```

### Spacing
```css
/* Container max-width: 1200px */
/* Padding: 20px */
/* Section padding: 80px 0 */
```

---

## 📝 Blog Yazısı Template'i

Yeni blog yazısı oluştururken blog-post-anxiety.html'i kopyala ve şunları değiştir:

1. **Meta tags** (title, description, keywords)
2. **Hero section** (başlık, kategori, tarih)
3. **Featured image** (Unsplash URL)
4. **Article içeriği** (H2, H3, paragraflar, listeler)
5. **Related posts** (3 ilgili yazı)
6. **Share buttons** (URL'leri güncelle)

---

## 🌐 Unsplash Görsel Arama İpuçları

Blog yazıları için:
- Communication: "couple conversation", "relationship talk"
- Self-care: "meditation", "wellness", "self love"
- Stress: "workplace stress", "office anxiety"
- Depression: "mental health support", "therapy"
- Boundaries: "confident woman", "saying no"

Unsplash URL formatı:
```
https://images.unsplash.com/photo-XXXXXXXXX?w=1200&h=600&fit=crop&fm=webp&q=85
```

---

## 🧪 Test Checklist

Her değişiklikten sonra:
- [ ] index.html çalışıyor mu?
- [ ] blog.html çalışıyor mu?
- [ ] Blog yazısı linkleri çalışıyor mu?
- [ ] Mobil görünüm düzgün mü?
- [ ] Tablet görünüm düzgün mü?
- [ ] Desktop görünüm düzgün mü?
- [ ] Görseller yükleniyor mu?
- [ ] Navigation menüsü çalışıyor mu?
- [ ] Floating butonlar görünüyor mu?
- [ ] Git commit yapıldı mı?
- [ ] GitHub'a push edildi mi?

---

## 📞 Site Konfigürasyonu

### Telefon Numarasını Değiştirmek

`index.html` ve `blog.html` içinde:

```javascript
const SITE_CONFIG = {
    countryCode: '1',        // Ülke kodu (90=Türkiye, 1=ABD)
    phoneNumber: '5551234567', // Ülke kodu olmadan
    email: 'dr.mitchell@example.com',
    location: 'Los Angeles, CA',
    doctorName: 'Dr. Sarah Mitchell'
};
```

---

## 🆘 Sorun Giderme

### Git Conflict Olursa
```bash
git stash          # Değişikliklerini kaydet
git pull           # Remote'tan çek
git stash pop      # Değişikliklerini geri getir
# Çakışmaları manuel düzelt
git add .
git commit -m "Resolve conflicts"
git push
```

### Live Server Çalışmıyorsa
1. VS Code'u yeniden başlat
2. Uzantıları kontrol et
3. Alternatif: Python HTTP Server
   ```bash
   python -m http.server 8000
   # http://localhost:8000 'e git
   ```

### CSS Değişiklikleri Görünmüyorsa
- Hard refresh: Ctrl+Shift+R (Chrome)
- Cache temizle
- Incognito/Private mode'da aç

---

## 🎯 Sonraki Adımlar İçin Öneriler

1. **Blog yazılarını bitir** (en öncelikli)
2. **Contact form backend** (EmailJS ücretsiz)
3. **Google Analytics** ekle (opsiyonel)
4. **Sitemap.xml** oluştur (SEO için)
5. **Custom domain** bağla (opsiyonel)

---

## 📚 Faydalı Kaynaklar

- **GitHub Repo**: https://github.com/ozerkulak-spec/therapist-landing-page
- **Live Site**: https://ozerkulak-spec.github.io/therapist-landing-page/
- **Unsplash**: https://unsplash.com (ücretsiz görseller)
- **Google Fonts**: https://fonts.google.com
- **Can I Use**: https://caniuse.com (tarayıcı uyumluluğu)
- **PageSpeed Insights**: https://pagespeed.web.dev/ (performans testi)

---

## 🤖 GitHub Copilot ile Verimli Çalışma

### İyi Prompt Örnekleri:

✅ **İyi**: "blog-post-communication.html dosyasını oluştur. 7 iletişim kuralını anlat, her birini H3 başlık altında detaylandır. 2500 kelime olsun. blog-post-anxiety.html'deki yapıyı takip et."

✅ **İyi**: "Blog kartlarındaki unsplash görsellerini değiştir. Daha profesyonel mental health görselleri kullan. Her kategori için farklı görsel bul."

❌ **Kötü**: "blog yaz"

❌ **Kötü**: "düzelt"

### Copilot'a Söyleyebileceklerin:

- "Mevcut dosya yapısını incele ve..."
- "blog-post-anxiety.html'i referans alarak..."
- "SEO best practices'lere göre..."
- "Responsive tasarımı koruyarak..."
- "Aynı gradient renkleri kullanarak..."

---

## ✅ Final Checklist (Projeyi Bitirmeden Önce)

- [ ] 6 blog yazısının hepsi tamamlandı
- [ ] Tüm linkler çalışıyor
- [ ] Görseller yükleniyor
- [ ] Mobil responsive düzgün
- [ ] SEO meta tags eksiksiz
- [ ] Contact form çalışıyor (veya devre dışı)
- [ ] Social media linkleri güncellendi
- [ ] Telefon numarası doğru
- [ ] Email adresi doğru
- [ ] GitHub README güncel
- [ ] Git'te uncommitted değişiklik yok
- [ ] PageSpeed score > 90

---

**Son Güncelleme**: 11 Kasım 2025  
**Proje Durumu**: %85 Tamamlandı  
**Kalan İş**: 5 blog yazısı

Başarılar! 🚀
