# 🏠 Evde Projeye Devam Etme Rehberi

Bu doküman, projeyi farklı bir bilgisayarda (evde) devam ettirmeniz için gereken tüm adımları içerir.

## 📋 Ön Gereksinimler

### Yazılımlar (İndir ve Kur)

1. **Git** (Versiyon Kontrol)
   - İndir: https://git-scm.com/download/win
   - Kurulum sırasında "Git Bash" ve "Git from the command line" seçeneklerini işaretle

2. **Visual Studio Code** (Kod Editörü)
   - İndir: https://code.visualstudio.com/
   - Ücretsiz ve güçlü kod editörü

3. **Web Tarayıcı**
   - Chrome, Firefox, veya Edge (güncel versiyon)

## 🚀 Projeyi İlk Kez Klonlama

### Adım 1: Git'i Kontrol Et

PowerShell veya Git Bash'i aç ve şunu çalıştır:
```powershell
git --version
```

Versiyon numarası görüyorsan Git kurulu demektir.

### Adım 2: Çalışma Klasörü Oluştur

```powershell
# İstediğin bir klasöre git (örnek)
cd C:\Users\YourUsername\Documents

# Veya Masaüstü
cd C:\Users\YourUsername\Desktop

# Projeler klasörü oluştur (opsiyonel)
mkdir Projects
cd Projects
```

### Adım 3: Projeyi Klonla

```powershell
git clone https://github.com/ozerkulak-spec/therapist-landing-page.git
```

Bu komut projeyi GitHub'dan indirecek.

### Adım 4: Proje Klasörüne Gir

```powershell
cd therapist-landing-page
```

### Adım 5: Projeyi Visual Studio Code'da Aç

```powershell
code .
```

Veya VS Code'u manuel olarak aç ve **File → Open Folder** ile `therapist-landing-page` klasörünü aç.

## 📂 Proje Yapısı

Klonladıktan sonra göreceğin dosyalar:

```
therapist-landing-page/
├── index.html                      # Ana sayfa
├── blog.html                       # Blog liste sayfası
├── blog-post-anxiety.html          # Blog yazısı (anxiety)
├── style.css                       # Ana stil dosyası
├── blog.css                        # Blog stil dosyası
├── config.js                       # Telefon/ülke ayarları
├── README.md                       # Proje dokümantasyonu
├── IMAGE-UPLOAD-GUIDE.md           # Görsel yükleme rehberi
├── PERFORMANCE-SEO-GUIDE.md        # SEO rehberi
├── HOME-SETUP-GUIDE.md             # Bu dosya (evde kurulum)
└── LICENSE.txt                     # Lisans
```

## 🔧 Git Yapılandırması (İlk Defa)

Ev bilgisayarında ilk kez çalışıyorsan, Git'e ismini ve e-postanı tanıt:

```powershell
git config --global user.name "Özer Kulak"
git config --global user.email "ozer.kulak@gmail.com"
```

## 💻 Çalışma Akışı

### 1. Son Değişiklikleri Al (Her Çalışmaya Başlamadan)

```powershell
# Ana branch'e geç
git checkout main

# Son değişiklikleri çek
git pull origin main
```

**ÖNEMLİ:** İşe başlamadan önce MUTLAKA `git pull` yap! Böylece ofisteki veya başka yerdeki değişiklikleri alırsın.

### 2. Değişiklik Yap

- VS Code'da dosyaları düzenle
- Tarayıcıda test et (çift tıklayarak `index.html` veya `blog.html` aç)

### 3. Değişiklikleri Kaydet

```powershell
# Hangi dosyalar değişmiş görmek için
git status

# Tüm değişiklikleri stage'e al
git add .

# Veya sadece belirli dosyaları ekle
git add index.html
git add style.css

# Commit yap (açıklayıcı mesaj yaz)
git commit -m "Açıklayıcı mesaj buraya: örneğin 'Blog sayfası güncellendi'"

# GitHub'a yükle
git push origin main
```

## 📝 Örnek Çalışma Senaryosu

### Senaryo: Blog yazısı eklemek istiyorsun

```powershell
# 1. Son değişiklikleri al
git pull origin main

# 2. Yeni blog dosyası oluştur
# VS Code'da: blog-post-yeni-konu.html

# 3. Değişiklikleri kontrol et
git status

# 4. Yeni dosyayı ekle
git add blog-post-yeni-konu.html
git add blog.html  # eğer blog listesini de güncellediysen

# 5. Commit yap
git commit -m "Yeni blog yazısı eklendi: Konunun adı"

# 6. GitHub'a yükle
git push origin main
```

## 🌐 Canlı Siteyi Görüntüleme

Değişikliklerini GitHub'a yükledikten 1-2 dakika sonra:

**Canlı Site:** https://ozerkulak-spec.github.io/therapist-landing-page/

GitHub otomatik olarak yeni versiyonu yayınlar (GitHub Pages).

## 🔍 Sık Kullanılan Git Komutları

```powershell
# Mevcut durumu göster
git status

# Değişiklikleri göster
git diff

# Commit geçmişini göster
git log

# Son commit'i geri al (dosyalar kalır)
git reset --soft HEAD~1

# Dosyadaki değişiklikleri geri al (kaydetmeden)
git checkout -- dosya-adi.html

# Branch listesini göster
git branch

# Yeni branch oluştur
git checkout -b yeni-branch-ismi
```

## ⚠️ Yaygın Sorunlar ve Çözümleri

### Sorun 1: "Permission denied" hatası

**Çözüm:** GitHub hesabına giriş yap
```powershell
# Credentials Manager'da GitHub bilgilerini güncelle
# Veya SSH key kullan (gelişmiş)
```

### Sorun 2: "Conflict" (Çakışma) hatası

Bu, hem ofiste hem evde aynı dosyayı değiştirdiysen olur.

**Çözüm:**
```powershell
# 1. Çakışan dosyayı aç, VS Code otomatik olarak gösterir
# 2. Hangi versiyonu tutacağını seç
# 3. Kaydet ve commit yap

git add .
git commit -m "Conflict çözüldü"
git push origin main
```

### Sorun 3: "Your local changes would be overwritten"

**Çözüm:** Önce değişikliklerini kaydet
```powershell
git stash  # Değişiklikleri geçici olarak sakla
git pull   # Son versiyonu al
git stash pop  # Değişiklikleri geri getir
```

## 🎨 VS Code Önerilen Eklentiler

Daha iyi geliştirme deneyimi için:

1. **Live Server** (ritwickdey.liveserver)
   - Dosyaları kaydettiğinde tarayıcıyı otomatik yeniler
   - Sağ tık → "Open with Live Server"

2. **HTML CSS Support** (ecmel.vscode-html-css)
   - HTML'de CSS class önerileri

3. **Prettier** (esbenp.prettier-vscode)
   - Kod formatlama

4. **GitLens** (eamodio.gitlens)
   - Git geçmişini detaylı gösterir

**Kurulum:** VS Code'da `Ctrl+Shift+X` → Eklenti ismini ara → Install

## 📞 Yapılandırma Dosyası (config.js)

Evde farklı ayarlar kullanmak istersen:

```javascript
// config.js dosyasını düzenle
const SITE_CONFIG = {
    countryCode: '90',              // Türkiye için
    phoneNumber: '5551234567',      // Senin numaran
    email: 'senin@emailin.com',
    location: 'İstanbul, Türkiye',
    doctorName: 'Dr. İsim Soyisim'
};
```

## 🧪 Yerel Test

Değişikliklerini test etmek için:

1. **Basit Yöntem:**
   - `index.html` veya `blog.html` dosyasına çift tıkla
   - Tarayıcıda açılır

2. **Live Server ile (Önerilen):**
   ```
   - VS Code'da dosyaya sağ tık
   - "Open with Live Server"
   - Otomatik yenileme aktif
   ```

3. **Python ile (Alternatif):**
   ```powershell
   # Python yüklüyse
   python -m http.server 8000
   # Sonra tarayıcıda: http://localhost:8000
   ```

## 📚 Yararlı Kaynaklar

- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **VS Code Shortcuts:** `Ctrl+K Ctrl+S` (VS Code içinde)
- **HTML/CSS Reference:** https://developer.mozilla.org/en-US/
- **Unsplash (Ücretsiz Görseller):** https://unsplash.com/

## 🎯 İlk Gün Kontrol Listesi

Evde ilk kez çalışırken:

- [ ] Git kuruldu mu? (`git --version`)
- [ ] VS Code kuruldu mu?
- [ ] Proje klonlandı mı? (`git clone ...`)
- [ ] Git config yapıldı mı? (isim ve email)
- [ ] Projeyi VS Code'da açabildin mi?
- [ ] `index.html` tarayıcıda açılıyor mu?
- [ ] `git pull` çalışıyor mu?
- [ ] Küçük bir değişiklik yapıp `git push` yapabildin mi?

## 🔄 Farklı Bilgisayarlar Arası Senkronizasyon

**Ofiste:**
```powershell
git add .
git commit -m "Ofiste yapılan değişiklikler"
git push origin main
```

**Evde:**
```powershell
git pull origin main  # Ofisteki değişiklikleri al
# Çalışmaya devam et...
git add .
git commit -m "Evde yapılan değişiklikler"
git push origin main
```

**Ertesi gün ofiste:**
```powershell
git pull origin main  # Evdeki değişiklikleri al
```

## 💡 İpuçları

1. **Sık commit yap:** Her mantıklı değişiklikte commit yap (her 30-60 dakika)
2. **Açıklayıcı mesajlar:** "düzeltme" yerine "Blog kartlarında hover efekti eklendi" yaz
3. **Push'lamayı unutma:** Günün sonunda mutlaka `git push` yap
4. **Pull'u unutma:** İşe başlarken mutlaka `git pull` yap
5. **Test et:** Push'lamadan önce değişiklikleri tarayıcıda kontrol et

## 🆘 Yardım Gerekirse

### GitHub Repository
https://github.com/ozerkulak-spec/therapist-landing-page

### Git Komutları İçin Yardım
```powershell
git help
git help commit
git help push
```

### VS Code Yardım
- `F1` veya `Ctrl+Shift+P` → Komut paleti
- `Ctrl+` → Terminal aç

---

## ✅ Hızlı Başlangıç (Özet)

```powershell
# 1. İlk Kurulum (Tek seferlik)
git clone https://github.com/ozerkulak-spec/therapist-landing-page.git
cd therapist-landing-page
git config --global user.name "İsmin"
git config --global user.email "email@adresin.com"

# 2. Her Gün Başlarken
git pull origin main

# 3. Çalış, Değiştir, Test Et
# (VS Code'da düzenle, tarayıcıda test et)

# 4. Her Gün Sonunda
git add .
git commit -m "Bugün yaptıklarının özeti"
git push origin main
```

---

**Başarılar! 🚀**

Herhangi bir sorun yaşarsan:
1. Önce `git status` ile durumu kontrol et
2. Google'da "git [sorun]" ara
3. Git dokümantasyonuna bak: https://git-scm.com/doc
