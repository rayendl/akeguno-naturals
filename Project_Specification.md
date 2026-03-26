# Project Specification (Current State)
# Website — Akeguno Naturals
**Version:** 1.0 (Aktualisasi dari PRD v2.3)
**Date:** Maret 2026

---

## 1. Executive Summary

### 1.1 Overview
Website resmi Akeguno Naturals berfungsi sebagai *brand presence*, *content hub*, dan *product showcase* yang mengarahkan pembelian ke marketplace (Shopee/TikTok Shop) atau WhatsApp.

Website ini telah dibangun sepenuhnya dengan pendekatan **Mobile-First** dan memanfaatkan kemampuan Static Site Generation (SSG) untuk memastikan kecepatan tinggi secara global.

### 1.2 Objectives
| # | Objective | Titik Implementasi Saat Ini |
|---|-----------|-----------------------------|
| 1 | Membangun **brand awareness** dan kredibilitas digital | Diselesaikan lewat UI/UX (Framer Motion, Font Serif/Sans perpaduan). |
| 2 | Menampilkan **katalog produk** yang redirect ke marketplace | Rute `/hasil-alam` dengan Quick View Modal terstruktur. |
| 3 | Mengedukasi audiens lewat konten **Catatan Alam** | Rute `/catatan-alam` dengan klien dinamis untuk filter. |
| 4 | Memudahkan calon pembeli menghubungi brand via **WhatsApp** | `WhatsAppFloat` komponen terpasang di semua rute halaman. |

---

## 2. Brand Implementation Guidelines

### 2.1 Color System
Palet berikut sudah terintegrasi ke dalam konfigurasi `tailwind.config.ts` dan global CSS:
*   Mata Utama: `--authentic-linen` (#F5F0E8)
*   Aksen/Hover: `--eucalyptus-calm` (#8FA68A)
*   CTA/Interaktif Utama: `--terracotta-earth` (#C17B5A)
*   Teks Gelap Utama: `--urbane-bronze` (#3D3630)

### 2.2 Typography
*   **Headings Utama (H1, H2, H3):** Cormorant Garamond (Serif klasikal, terinjeksi dari Google Fonts via `layout.tsx`).
*   **Body & Tombol:** Raleway (Modern Sans-serif legibilitas tinggi).

---

## 3. Sitemap & Navigasi Terkini

Website ini terbagi ke dalam _sub-pages_ mandiri dan _anchor points_ untuk efisiensi beban pengguna:

### Sub-pages (Rute Terpisah)
*   `/` → Home (Berisi 6 seksi utama, termasuk Highlight dan FAQ).
*   `/about` → Penceritaan *Brand* dan Visi Misi.
*   `/catatan-alam` → Artikel / Edukasi.
*   `/catatan-alam/[slug]` → Detail Artikel *Rich Text* berdinamis SEO.
*   `/hasil-alam` → Listing Produk + Modal interaktif "*Quick View*".

### Anchor Navigation (Header & Footer Links)
*   **FAQ (`/#faq`)** → *Smooth scroll* menuju akordeon jawaban umum di Beranda Utama.
*   **Contact (`/#contact`)** → *Smooth scroll* ke Footer di mana tautan sosmed, marketplace, dan WA bersemayam. 

---

## 4. Page-by-Page Requirements (Aktual)

### 4.1 Home Page
*   **Hero:** Implemetasi *Full-height* saat di-_load_ awal, ditumpuki *Scroll Indicator* animasi.
*   **Product & Story Teasers:** Dibangun lewat `<StaggerItem />` dan `<Section />` reusable.
*   **FAQ (`id="faq"`):** Telah mengkonsumsi skema `FaqItem` dari Sanity, diekspos sebagai akordeon yang mudah dimuat di ponsel.

### 4.2 About (Tentang Kami)
*   Mendeskripsikan 3 pilar utama: Kualitas Raw, Transparansi, Ekonomi Lokal. Termasuk profil para *Founders*.

### 4.3 Catatan Alam (Blog/Content)
*   **Fitur Spesial Server:** Penggunaan `generateMetadata` untuk menginjeksi SEO (Open Graph, title unik per artikel).
*   **Search Engine:** Memanfaatkan `useState` React di sisi Client (`CatatanAlamClient.tsx`) agar responsif merender pencarian secara instan.

### 4.4 Hasil Alam (Katalog Produk)
*   **Quick View:** Modal UI berwujud `Dialog.tsx` custom yang tampil di tengah layar desktop atau *pop-up bottom* di hp, tidak memindahkan user dari katalog, sehingga perambanan lebih cepat.

---

## 5. Technical Requirements & Updates

### 5.1 Tech Stack (All Free Tier Set-up)
| Layer | Technology | Status Terpasang |
|-------|-----------|------------------|
| **Framework** | Next.js 16.1 (App Router) dengan Turbopack | ✅ (Masalah import Turbopack tuntas) |
| **Konteks & Styling** | Tailwind CSS v4 | ✅ |
| **Animasi** | Framer Motion v12 | ✅ |
| **CMS** | Sanity.io v5.13 | ✅ (Terkoneksi lewat GROQ Query) |
| **Hosting** | Vercel | ✅ (CD/CI aktif) |
| **Tracking/Analytics** | Vercel Speed Insights + GA4 (`G-PKHCDQDYXY`) | ✅ (GA4 via `@next/third-parties`) |

### 5.2 Sanity.io Integration
*   Studio *embedded* sepenuhnya di Next.js (Dapat diakses lewat url lokal/produksi di subfolder `/studio`).
*   Daftar Schema: `product`, `productCategory`, `article`, `category`, `faqItem`, `siteSettings`. Tiga serangkai ini merender UI *out-of-the-box* setiap *build* Vercel selesai.
*   CORS & API *Tokens* terpasang lewat file `.env.local` saat *development*.

### 5.3 SEO (Search Engine Optimization)
*   `app/sitemap.ts` otomatis merender map yang mencakup daftar statis dan list produk/artikel dinamis untuk diregister rbot perayap Google.
*   `app/robots.ts` mensinyali agen bot mana yang boleh melintas (terkecuali di sub-ruang`/studio`).
*   `<SpeedInsights />` di `layout.tsx` meneliti Web Vitals pengguna sungguhan secara *realtime* di Vercel Dashboard.

---

## 6. UI/UX Design Principles
1.  **Mobile-First Murni:** Grid dimulai dari `1 kolom` (seluler), dan di ekstrak jadi `md:grid-cols-2` atau `lg:grid-cols-3` di media yang lebih besar.
2.  **Organik & Elegan:** Minimalis transparan ala estetika kebun. *Header* dibuat menyatu di titik nol *scrollbar*, dan mendapat background linen pekat begitu *scroll event* aktif.
3.  **Loading Skeleton:** Memanfaatkan Server Components NextJS sehingga halaman *skeleton-state* muncul sewaktu koneksi internet memanggil data ke SANITY API.

---

## 7. Folder Structure Aktual (App Router)
Penyimpanan logis proyek sejauh ini:
*   `app/` (Berisi top level routing `layout`, `page`, `sitemap`, `robots`, dan routing modular seperti `about/`, `hasil-alam/`, `catatan-alam/[slug]/`).
*   `components/` (Disiplin isolasi modular UI, terpisah ke folder `ui`, `layout`, `home`, `catatan-alam`).
*   `sanity/` (Konfigurasi Client API, Koleksi Schema, dan GROQ fetchers).
*   `lib/` (Koleksi utilities serbaguna).

---

## 8. Status Launch Plan (Progress Tracking)

### Fase MVP — Ceklis Status
- [x] Init project: Next.js 16 + Tailwind v4 + Sanity
- [x] Setup Sanity CMS schemas: Article, Category, Product, ProductCategory, FaqItem, SiteSettings
- [x] **Global:** Header responsif transparan + Hover Links
- [x] **Global:** Footer/Contact anchor
- [x] **Global:** Floating WhatsApp Button (*Fixed-bottom*)
- [x] Home Page & FAQ accordion tersinkronisasi
- [x] Katalog Hasil Alam + Quick View Dialog 
- [x] SEO: `generateMetadata()`, native `sitemap.ts`, `robots.ts`
- [x] Setup GA4 (`@next/third-parties`) + Vercel Analytics

---

*\* Dokumen Spesifikasi V1.0 - File *living-document* yang merefleksikan rupa produk saat di-deploy terkini pada server Vercel.*
