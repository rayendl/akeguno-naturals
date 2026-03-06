# Product Requirements Document (PRD)
# Website — Akeguno Naturals
**Version:** 2.3
**Date:** 3 Maret 2026
**Author:** Chisa (AI Product Assistant) for Kak Rayen
**Status:** Final Draft — Locked

---

## Changelog

### v2.3 — 3 Maret 2026
| Poin | Perubahan |
|------|-----------|
| Navigasi | Contact & FAQ **bukan sub-page** — anchor scroll dari header ke section di halaman |
| Contact | Dihapus sebagai halaman terpisah. Info kontak hanya di **Footer** (WA, IG, email teks) |
| FAQ | Menjadi **section di Home Page** (`#faq`). Tab FAQ di header = smooth scroll ke section ini |
| Email/Form | Transactional email & contact form **dihapus dari scope MVP** — digantikan WA direct |
| Newsletter | Dihapus dari MVP — belum relevan untuk brand yang baru mulai |
| Tech Stack | Hapus Resend dan Upstash Redis (tidak lagi dibutuhkan) |

### v2.2 — 3 Maret 2026
| Poin | Perubahan |
|------|-----------|
| Sitemap | Hapus utility pages (Privacy Policy & T&C) |
| FAQ | Jadi halaman terpisah (direvisi lagi di v2.3) |

### v2.1 — 3 Maret 2026
| Poin | Perubahan |
|------|-----------|
| Tech Stack | Semua resource dipastikan **Free Tier** / Open Source |
| Mobile-First | Seluruh layout, typography, dan interaksi menggunakan pendekatan mobile-first |
| Produk | Tambah Quick View (modal) + fields CMS lebih lengkap untuk *future-proof* |
| Catatan Alam | Tambah fitur Search + Table of Contents sticky |
| Technical | Sitemap & robots via file-based routing Next.js App Router |
| Analytics | Vercel Analytics & Speed Insights (gratis) ditambahkan |

---

## 1. Executive Summary

### 1.1 Overview
Website resmi Akeguno Naturals berfungsi sebagai *brand presence*, *content hub*, dan *product showcase* yang mengarahkan pembelian ke marketplace (Shopee/TikTok Shop). Bukan e-commerce mandiri, tapi *brand storytelling platform* yang membangun kepercayaan dan mengedukasi audiens.

Website dibangun dengan pendekatan **Mobile-First** — desain dimulai dari layar terkecil (360px), kemudian diperluas ke tablet dan desktop secara progresif.

### 1.2 Objectives
| # | Objective | Success Metric |
|---|-----------|---------------|
| 1 | Membangun **brand awareness** dan kredibilitas digital | Bounce rate < 40%, avg. session > 2 menit |
| 2 | Menampilkan **katalog produk** yang redirect ke marketplace | Click-through rate ke Shopee/TikTok > 10% |
| 3 | Mengedukasi audiens lewat konten **Catatan Alam** | Scroll depth > 70%, return visitors > 20% |
| 4 | Memudahkan calon pembeli menghubungi brand via **WhatsApp** | Klik WA button > 5% dari total visitors |

### 1.3 Target Users
| Persona | Deskripsi | Kebutuhan |
|---------|-----------|-----------| 
| **Conscious Consumer** | 25-40, urban, peduli bahan alami | Transparansi *ingredients*, edukasi, link beli mudah |
| **Brand Explorer** | Pertama kenal via socmed | Visual menarik, navigasi simpel, trust signals |
| **Content Reader** | Suka baca soal wellness/natural living | Artikel berkualitas, search konten, tips bermanfaat |

---

## 2. Brand Implementation Guidelines

### 2.1 Color System
```css
:root {
  --authentic-linen: #F5F0E8;       /* Background utama */
  --eucalyptus-calm: #8FA68A;       /* Aksen, hover states */
  --morning-dew: #A8B5BE;           /* Subtle elements, dividers */
  --terracotta-earth: #C17B5A;      /* CTA primary */
  --cinnamon: #B89A7E;              /* Warm accents */
  --muted-gold: #C4A96A;            /* Badges, premium accents */
  --urbane-bronze: #3D3630;         /* Text utama */

  --bg-primary: var(--authentic-linen);
  --bg-secondary: #FFFFFF;
  --text-primary: var(--urbane-bronze);
  --text-secondary: #6B6560;
  --cta-primary: var(--terracotta-earth);
  --cta-hover: #A8603F;
}
```

### 2.2 Typography (Mobile-First Scale)
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');

h1, h2, h3 { font-family: 'Cormorant Garamond', serif; }
body, p, button { font-family: 'Raleway', sans-serif; }
```

| Element | Font | Weight | Mobile (default) | Tablet (md) | Desktop (lg) |
|---------|------|--------|------------------|-------------|--------------|
| H1 Hero | Cormorant | 600 | 32px | 44px | 56px |
| H2 Section | Cormorant | 600 | 26px | 34px | 40px |
| H3 Sub | Cormorant | 500 | 20px | 24px | 28px |
| Body | Raleway | 400 | 15px | 15px | 16px |
| Button | Raleway | 600 | 14px | 14px | 14px |

### 2.3 Breakpoints (Mobile-First)
```css
/* Default: Mobile 360px+ */
/* sm: 480px+ */
/* md: 768px+ (Tablet) */
/* lg: 1024px+ (Desktop) */
/* xl: 1280px+ (Wide Desktop) */
```

### 2.4 Logo Usage
- **Header Mobile:** Logomark (simbol saja) — lebih ringkas di layar kecil.
- **Header Desktop:** Simbol + Nama Brand.
- **Favicon:** Logomark .ico / .svg.
- **Footer:** Logo lengkap + tagline.

---

## 3. Sitemap & Navigasi

### Sub-pages (Halaman Terpisah)
```
/              → Home (semua sections termasuk FAQ)
/about         → About / Tentang Kami
/catatan-alam  → Article Listing
/catatan-alam/[slug] → Article Detail
/hasil-alam    → Product Listing
```

### Header Navigation
| Tab | Behavior | Keterangan |
|-----|----------|------------|
| **Home** | Navigate ke `/` | Sub-page |
| **About** | Navigate ke `/about` | Sub-page |
| **Catatan Alam** | Navigate ke `/catatan-alam` | Sub-page |
| **Hasil Alam** | Navigate ke `/hasil-alam` | Sub-page |
| **FAQ** | Smooth scroll ke `/#faq` | Anchor — section di Home Page |
| **Contact** | Smooth scroll ke `/#contact` (Footer) | Anchor — selalu ada di semua halaman |

**Total sub-pages: 4 route.** Contact & FAQ berbasis anchor scroll, bukan halaman terpisah.

---

## 4. Page-by-Page Requirements

### 4.1 Home Page
**Purpose:** First impression + navigasi ke semua section utama.

| # | Section | ID Anchor | Mobile Layout | Desktop Layout |
|---|---------|-----------|--------------|----------------|
| 1 | **Hero** | — | Full-height, teks di atas foto, CTA di bawah | Split atau full-width |
| 2 | **Brand Promise** | — | Stack vertikal, 1 kolom | 3 kolom ikon |
| 3 | **Featured Products** | — | Horizontal scroll (carousel) | Grid 3-4 kolom |
| 4 | **Story Teaser** | — | Foto atas, teks bawah | Split: Foto kiri + teks kanan |
| 5 | **Catatan Alam Preview** | — | 1 kolom cards | Grid 3 kolom |
| 6 | **FAQ** | `id="faq"` | Accordion 1 kolom, full-width | Accordion 1 kolom, max-width 720px centered |
| 7 | **Footer** | `id="contact"` | Stack vertikal, info kontak + social links | 3-4 kolom horizontal |

**Design Notes:**
- Background: `--authentic-linen`.
- CTA buttons: `--terracotta-earth`, border-radius 4px.
- Whitespace: min **40px** antar section di mobile, **80px** di desktop.
- Foto: natural lighting, earthy tones.
- **Floating WhatsApp Button:** Fixed bottom-right, muncul di **semua halaman**.
- FAQ section menggunakan data dari Sanity CMS (`FaqItem` schema).
- Footer berfungsi ganda sebagai **Contact section** — berisi no. WA, email teks, social links.

### 4.2 About (Tentang Kami)
**Purpose:** Brand storytelling mendalam.

| # | Section | Mobile Layout | Desktop Layout |
|---|---------|--------------|----------------|
| 1 | **Hero** | Foto penuh + overlay judul | Foto alam/tim + judul overlay |
| 2 | **Origin Story** | 1 kolom, foto di antara teks | Teks kiri, foto kanan |
| 3 | **Three Pillars** | 1 kolom, ikon + teks stacked | 3 kolom dengan animated icons |
| 4 | **Values** | Full-width `--eucalyptus-calm` | Full-width, teks centered |
| 5 | **CTA** | Full-width tombol | Tombol centered |

### 4.3 Catatan Alam (Blog/Content)
**Purpose:** Edukasi, SEO, dan brand storytelling berkelanjutan.
**CMS:** Sanity.io — Admin bisa buat/edit artikel tanpa coding.

#### Listing Page
- **Search Bar:** Input pencarian *keyword* di bagian atas — prioritas mobile (full-width).
- **Filter Kategori:** Chip/pill buttons horizontal scroll di mobile, pilihan terbuka di desktop.
- **Layout Mobile:** 1 kolom cards.
- **Layout Desktop:** Grid 3 kolom.
- **Card:** Cover image, kategori tag, judul, excerpt (2 baris), tanggal, read time.
- **Pagination:** "Load More" button (bukan pagination nomor — lebih ramah mobile).

#### Detail Page
- **Mobile:** Konten *full-width*, tidak ada sidebar. TOC ditaruh di atas konten (collapsible accordion dengan `<details>` tag).
- **Desktop:** Layout 2 kolom. Kolom kiri konten (max-width 720px), kolom kanan sidebar sticky.
  - **Sidebar:** Newsletter CTA + artikel terkait (3 cards) + TOC (Table of Contents) sticky.
- **Elemen Artikel:** Hero image, judul (H1 Cormorant), author + tanggal + read time, body content (rich text dari Sanity), inline images.
- **Bottom:** Share buttons (WhatsApp, X, Copy Link) + Related Articles.

#### Sanity CMS Schema (Content Model)
```
Article {
  title: string (required)
  slug: slug (auto-generate dari title)
  coverImage: image (required)
  category: reference → Category
  excerpt: text (max 160 chars, untuk SEO)
  body: portable text (rich text: headings, bold, italic, links, images, quotes, blockquotes)
  author: string
  publishedAt: datetime
  readTime: number (auto-calculate atau manual)
  featured: boolean (tandai artikel unggulan untuk ditampilkan di Home)
  seo: {
    metaTitle: string
    metaDescription: text
  }
}

Category {
  name: string
  slug: slug
  description: text
}
```

#### Sanity Studio (Admin Panel)
- Accessible via `/studio` atau subdomain `studio.akegunonaturals.com`.
- Login: Email/Password atau Google OAuth.
- Features: WYSIWYG editor, image upload + crop, draft/publish workflow, preview before publish.

### 4.4 Hasil Alam (Produk)
**Purpose:** Showcase produk + direct link ke marketplace. **BUKAN e-commerce.**

#### Listing Page
- **Mobile Layout:** Grid 2 kolom (hemat ruang, mudah di-scroll jempol).
- **Desktop Layout:** Grid 3 kolom.
- **Product Card:**
  - Foto produk (1:1 ratio, clean background)
  - Nama produk (Cormorant Garamond)
  - Harga (atau range harga)
  - Badge: ikon Shopee 🟠 / TikTok 🖤
  - Tombol **"Lihat Detail"** → buka Quick View Modal
- **Filter:** Chip/pill horizontal scroll by kategori produk.

#### Quick View Modal (NEW)
Menggantikan "no detail page" langsung ke marketplace. Modal muncul *bottom sheet* di mobile, *centered modal* di desktop.
- **Konten:**
  - Foto produk (bisa scroll jika ada multiple gambar)
  - Nama produk + harga
  - Deskripsi singkat (1-2 kalimat)
  - Manfaat / Keunggulan (bullet points)
  - Bahan/Ingredients (collapsible)
  - Ukuran/Varian
  - CTA Besar: **"Beli di Shopee"** / **"Beli di TikTok Shop"** (external link, `target="_blank"`)

#### Data Source — Sanity CMS (Extended)
```
Product {
  name: string (required)
  image: image (required)
  images: array of image (multiple product photos)
  price: string (e.g., "Rp 85.000" atau "Rp 75.000 - Rp 150.000")
  description: text (deskripsi singkat untuk Quick View)
  benefits: array of string (bullet points keunggulan)
  ingredients: text (daftar bahan, collapsible)
  size: string (ukuran/varian)
  category: reference → ProductCategory
  shopeeUrl: url
  tiktokUrl: url
  badge: string (e.g., "Bestseller", "New", "Limited")
  isActive: boolean (show/hide)
  order: number (urutan tampil)
  featured: boolean (tampil di Featured section Home)
}

ProductCategory {
  name: string
  slug: slug
}
```

### 4.5 Contact — Footer Section (`id="contact"`)
**Purpose:** Info kontak yang selalu dapat diakses dari semua halaman via anchor scroll di header.
**Bukan halaman terpisah** — Contact adalah bagian dari Footer di `layout.tsx`.

#### Konten Footer / Contact Section
| Info | Detail |
|------|--------|
| **WhatsApp** | Tombol "Chat di WhatsApp" → `wa.me/[nomor]` (direct link, `target="_blank"`) |
| **Email** | Teks biasa (bukan form) — e.g., `hello@akegunonaturals.com` |
| **Instagram** | Link ke profil IG |
| **TikTok** | Link ke profil TikTok |
| **Shopee** | Link ke toko Shopee |

#### Layout
- **Mobile:** Stack vertikal — Logo + tagline, navigasi singkat, info kontak, social icons.
- **Desktop:** 3-4 kolom — Kolom 1: Logo + tagline, Kolom 2: Navigasi, Kolom 3: Info Kontak.

### 4.6 FAQ — Home Section (`id="faq"`)
**Purpose:** Menjawab pertanyaan umum secara mandiri. Muncul sebagai section di Home Page, **bukan halaman terpisah**.
Tab "FAQ" di header = smooth scroll ke section ini dari mana saja (`/#faq`).

#### Layout
- **Mobile & Desktop:** Accordion 1 kolom, full-width (mobile) / max-width 720px centered (desktop).
- Dikelompokkan berdasarkan kategori pertanyaan.

#### Konten FAQ (Contoh Item — diisi dari Sanity CMS)
| Kategori | Pertanyaan |
|----------|------------|
| **Produk** | Apakah produk cocok untuk ibu hamil/menyusui? |
| **Produk** | Apakah semua bahan 100% alami? |
| **Produk** | Apakah ada uji dermatologis? |
| **Pembelian** | Bagaimana cara order? |
| **Pembelian** | Berapa lama pengiriman? |
| **Pembelian** | Apakah ada reseller resmi? |
| **Lainnya** | Bisa kerja sama/kolaborasi? |

#### Data Source — Sanity CMS
```
FaqItem {
  question: string (required)
  answer: portable text (required)
  category: string (e.g., "Produk", "Pembelian", "Lainnya")
  order: number
  isActive: boolean
}
```

#### CTA di Bawah Section
- Teks + icon: **"Masih ada pertanyaan? Chat kami di WhatsApp →"** (direct WA link).

---

## 5. Technical Requirements

### 5.1 Tech Stack (Semua Free / Open Source)
| Layer | Technology | Plan/Biaya | Rationale |
|-------|-----------|-----------|-----------|
| **Framework** | Next.js 15 (App Router) | **Gratis** (OSS) | SSR/SSG untuk SEO, image optimization |
| **Styling** | Tailwind CSS v4 | **Gratis** (OSS) | Utility-first, mobile-first by default |
| **Animation** | Framer Motion | **Gratis** (OSS) | Scroll animations, modal transitions |
| **CMS** | Sanity.io | **Free Tier** (3 users, 500K req/bulan) | Headless CMS untuk konten, produk & FAQ |
| **Hosting** | Vercel | **Free Tier** (Hobby plan) | Edge network, auto deploy dari GitHub |
| **Analytics** | Vercel Analytics | **Free Tier** | Real-time traffic analytics |
| **Speed Insights** | Vercel Speed Insights | **Free Tier** | Real User Monitoring Core Web Vitals |
| **GA4** | Google Analytics 4 | **Gratis** | Behavior tracking & conversion |
| **Image CDN** | Sanity Image Pipeline | **Gratis** (termasuk di Sanity) | Auto-resize, WebP, srcset |

> **Catatan:** Semua resource di atas 100% gratis dan tidak memerlukan kartu kredit. Stack sengaja disederhanakan untuk brand yang baru mulai — tidak ada backend tambahan, tidak ada email transaksional. Kontak via WhatsApp langsung.

### 5.2 Sanity.io Setup
- **Plan:** Free (3 users, 500K API requests/month) — lebih dari cukup untuk skala MVP.
- **Studio:** Embedded di `/studio` route (protected, login required).
- **Content Types:** Article, Category, Product, ProductCategory, **FaqItem**, SiteSettings.
- **SiteSettings Schema:** Schema untuk mengatur konten global (tagline, no WA, social links, email) agar bisa diubah tanpa coding.
- **Preview:** Real-time preview saat draft artikel.

### 5.3 Performance Targets
| Metric | Mobile Target | Desktop Target |
|--------|--------------|----------------|
| Lighthouse Performance | > 85 | > 90 |
| First Contentful Paint | < 2.0s | < 1.5s |
| Largest Contentful Paint | < 3.0s | < 2.5s |
| Cumulative Layout Shift | < 0.1 | < 0.1 |
| Time to Interactive | < 3.5s | < 2.5s |

### 5.4 SEO (App Router Approach)
- Dynamic `generateMetadata()` per halaman (dari Sanity untuk artikel/produk).
- Open Graph & Twitter Card meta via `generateMetadata()`.
- **`app/sitemap.ts`** — File-based sitemap auto-generated (Next.js App Router native, tanpa library eksternal).
- **`app/robots.ts`** — File-based robots.txt (Next.js App Router native).
- Structured data JSON-LD: Organization, Article, Product.
- Canonical URLs.

### 5.5 Kontak via WhatsApp
Tidak ada form atau backend email. Semua inquiry diarahkan ke WhatsApp admin secara langsung.
- Floating WA Button: `https://wa.me/[nomor]?text=Halo+Akeguno+Naturals...` (pre-filled message)
- Nomor WA admin disimpan di Sanity **SiteSettings** — bisa diubah kapan saja tanpa coding.

---

## 6. UI/UX Design Principles

### 6.1 Mobile-First Visual Guidelines
1. **Touch-Friendly:** Semua tap target minimal **44x44px** (Apple HIG standard).
2. **Thumb Zone:** CTA utama (WhatsApp, Beli Sekarang) ditempatkan di area jangkauan jempol (bagian bawah layar).
3. **Organic Minimalism** — Bersih, elemen alam yang *subtle*, tidak berlebihan.
4. **Generous Whitespace** — Min **40px** antar section di mobile, **80px** di desktop.
5. **Warm Palette** — `--terracotta-earth` dan `--cinnamon` untuk elemen interaktif.
6. **Typography-driven** — Cormorant Garamond dominan di headings.
7. **Natural Photography** — Warm tones, close-up bahan, lifestyle shots.

### 6.2 Interactions & Animations
- **Scroll Animations:** Fade-in subtle (Framer Motion). Jangan berlebihan; matikan animation jika `prefers-reduced-motion` aktif.
- **Hover (Desktop):** Scale 1.02 + shadow lift untuk cards.
- **Modal (Quick View):**
  - Mobile: *Bottom Sheet* — slide up dari bawah layar.
  - Desktop: *Centered Modal* — fade in dengan backdrop blur.
- **Loading:** Skeleton screen (bukan spinner) — lebih baik untuk persepsi kecepatan.
- **Marketplace Links:** Jelas ditandai dengan ikon marketplace + buka di tab baru.
- **Floating WhatsApp:** Muncul setelah scroll 300px, animasi *bounce* subtil untuk menarik perhatian.

### 6.3 Accessibility (WCAG 2.1 AA)
- Contrast ratio min **4.5:1** untuk body text, **3:1** untuk UI components.
- Alt text semua gambar (diisi dari Sanity CMS field).
- Keyboard navigation (Tab, Enter, Escape untuk modal).
- `prefers-reduced-motion` support — matikan semua animasi Framer Motion.
- Focus visible (outline jelas) untuk semua elemen interaktif.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.

---

## 7. Folder Structure (Next.js App Router)

```
akeguno-naturals/
├── app/
│   ├── layout.tsx              # Root layout (header + footer/contact + WA float)
│   ├── page.tsx                # Home (termasuk FAQ section #faq)
│   ├── sitemap.ts              # Auto-generated sitemap (App Router native)
│   ├── robots.ts               # robots.txt (App Router native)
│   ├── about/
│   │   └── page.tsx            # About / Tentang Kami
│   ├── catatan-alam/
│   │   ├── page.tsx            # Article Listing (+ Search)
│   │   └── [slug]/
│   │       └── page.tsx        # Article Detail (+ TOC)
│   ├── hasil-alam/
│   │   └── page.tsx            # Product Listing (+ Quick View Modal)
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx        # Sanity Studio (embedded, protected)
├── components/
│   ├── ui/                     # Button, Card, Modal, Skeleton, Accordion
│   ├── layout/                 # Header, Footer, Navigation, MobileMenu, WhatsAppFloat
│   ├── home/                   # Hero, BrandPromise, FeaturedProducts, StoryTeaser,
│   │   │                       # CatatanAlamPreview, FaqSection
│   ├── catatan-alam/           # ArticleCard, ArticleGrid, SearchBar, CategoryFilter,
│   │   │                       # TableOfContents, ShareButtons
│   └── hasil-alam/             # ProductCard, ProductGrid, QuickViewModal, CategoryFilter
├── sanity/
│   ├── schemas/                # article.ts, category.ts, product.ts,
│   │   │                       # productCategory.ts, faqItem.ts, siteSettings.ts
│   ├── queries.ts              # GROQ queries (articles, products, faq, settings)
│   ├── client.ts               # Sanity client config
│   └── sanity.config.ts        # Sanity Studio config
├── lib/
│   └── utils.ts                # Helper functions (formatDate, calculateReadTime, cn)
├── public/
│   ├── images/                 # Static images (logo, favicon, fallback)
│   └── favicon.ico
└── tailwind.config.ts          # Tailwind + brand colors custom tokens
```

---

## 8. Launch Plan (Updated — Mobile-First Priority)

### Phase 1 — MVP (3-4 Minggu)
- [ ] Init project: Next.js 15 + Tailwind v4 + Sanity
- [ ] Setup Sanity CMS schemas: Article, Category, Product, ProductCategory, FaqItem, SiteSettings
- [ ] **Global:** Header (smooth scroll anchor untuk FAQ & Contact) + Mobile Nav
- [ ] **Global:** Footer / Contact section (`id="contact"`) — WA, email teks, social links
- [ ] **Global:** Floating WhatsApp Button (fixed bottom-right, semua halaman)
- [ ] Home Page: semua sections termasuk FAQ accordion (`id="faq"`)
- [ ] About Page
- [ ] Hasil Alam (product listing + Quick View Modal)
- [ ] SEO: `generateMetadata()`, `sitemap.ts`, `robots.ts`, JSON-LD
- [ ] Setup GA4 + Vercel Analytics + Speed Insights
- [ ] Responsive check: 360px → 768px → 1280px
- [ ] Deploy ke Vercel (connect GitHub repo)

### Phase 2 — Content (Minggu 4-5)
- [ ] Catatan Alam listing page (+ Search + filter kategori)
- [ ] Catatan Alam detail page (+ TOC collapsible mobile, sticky desktop)
- [ ] Share buttons (WhatsApp, X, Copy Link)

### Phase 3 — Polish (Minggu 5-6)
- [ ] Scroll animations (Framer Motion) + `prefers-reduced-motion`
- [ ] Skeleton loading screens
- [ ] Image optimization & lazy loading (Sanity Image Pipeline)
- [ ] Performance tuning — target Lighthouse Mobile > 85
- [ ] Cross-browser testing (Chrome, Safari Mobile, Firefox)

---

## 9. Success Metrics

| Category | Metric | Target (Month 3) |
|----------|--------|------------------|
| **Traffic** | Monthly Unique Visitors | 3,000+ |
| **Engagement** | Avg. Session Duration | > 2 menit |
| **Engagement** | Pages per Session | > 2.5 |
| **Mobile** | Mobile Traffic Share | > 70% (target utama) |
| **Conversion** | Click-through ke Marketplace | > 10% |
| **Conversion** | Klik WhatsApp Button | > 5% dari visitors |
| **Content** | Artikel Published | > 8/bulan |
| **Performance** | Lighthouse Mobile | > 85 |
| **Performance** | Core Web Vitals (Pass) | LCP < 3s, CLS < 0.1 |

---

## 10. Competitive References

| Brand | URL | Takeaway |
|-------|-----|----------|
| Sensatia Botanicals | sensatia.com | Clean layout, brand story kuat |
| Juara Skincare | juaraskincare.com | Cultural storytelling yang kuat |
| Aesop | aesop.com | Minimalist, typography-driven |
| Utama Spice | utamaspice.com | Lokal, natural, katalog sederhana |

---

*Document prepared by Chisa — March 3, 2026*
*For: Akeguno Naturals Website Project*
*Version 2.3 — Final. Arsitektur navigasi final: 4 sub-pages + FAQ & Contact sebagai anchor scroll.*
