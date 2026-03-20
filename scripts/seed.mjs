/**
 * Akeguno Naturals — Sanity Seed Script
 *
 * Cara menjalankan:
 * 1. Buka sanity.io/manage → pilih project → API tab → "Add API token"
 *    - Label: "Seed Token", Permission: Editor → Save, copy token-nya
 * 2. Buat file .env.local dan tambahkan baris:
 *    SANITY_WRITE_TOKEN=<token_yang_dicopy>
 * 3. Jalankan dari terminal (bukan terminal yg sedang run dev):
 *    node scripts/seed.mjs
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-04",
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
});

// ────────────────────────────────────────────────────────────
// DATA SEED
// ────────────────────────────────────────────────────────────

const siteSettings = {
    _id: "siteSettings",
    _type: "siteSettings",
    tagline: "Akeh Guna — Banyak Manfaat dari Bumi Pertiwi",
    waNumber: "6281313963935",
    email: "hello@akegunonaturals.com",
    instagramUrl: "https://instagram.com/akegunonaturals",
    tiktokUrl: "https://tiktok.com/@akegunonaturals",
    shopeeUrl: "https://shopee.co.id/akegunonaturals",
};

const productCategories = [
    { _id: "cat-rempah", _type: "productCategory", name: "Rempah & Bumbu", slug: { _type: "slug", current: "rempah-bumbu" } },
    { _id: "cat-herbal", _type: "productCategory", name: "Herbal & Jamu", slug: { _type: "slug", current: "herbal-jamu" } },
    { _id: "cat-kelapa", _type: "productCategory", name: "Produk Kelapa", slug: { _type: "slug", current: "produk-kelapa" } },
    { _id: "cat-empon", _type: "productCategory", name: "Empon-Empon", slug: { _type: "slug", current: "empon-empon" } },
];

const products = [
    {
        _id: "prod-1",
        _type: "product",
        name: "Jahe Merah Kering Premium",
        price: "Rp 35.000",
        description: "Jahe merah pilihan dari petani lereng gunung, dikeringkan secara alami tanpa bahan pengawet. Kaya gingerol untuk menjaga daya tahan tubuh dan menghangatkan badan.",
        benefits: [
            "Meningkatkan imunitas tubuh",
            "Menghangatkan dan melancarkan peredaran darah",
            "Meredakan masuk angin dan mual",
            "Bebas pestisida dan pengawet",
        ],
        ingredients: "100% Zingiber officinale var. rubrum (jahe merah) kering",
        size: "100g",
        badge: "Bestseller",
        isActive: true,
        featured: true,
        order: 1,
        category: { _type: "reference", _ref: "cat-empon" },
        shopeeUrl: "https://shopee.co.id",
        tiktokUrl: "https://tiktok.com",
    },
    {
        _id: "prod-2",
        _type: "product",
        name: "Kunyit Asem Instan",
        price: "Rp 28.000",
        description: "Minuman tradisional kunyit asem yang menyegarkan. Dibuat dari kunyit segar pilihan dan asam jawa alami, tanpa perisa buatan.",
        benefits: [
            "Menyegarkan dan detoks alami",
            "Meredakan nyeri haid",
            "Antioksidan tinggi dari kurkumin",
            "Praktis diseduh kapan saja",
        ],
        ingredients: "Kunyit (Curcuma longa), asam jawa, gula jawa, garam himalaya",
        size: "200g (± 10 sachet)",
        badge: "New",
        isActive: true,
        featured: true,
        order: 2,
        category: { _type: "reference", _ref: "cat-herbal" },
        shopeeUrl: "https://shopee.co.id",
        tiktokUrl: "https://tiktok.com",
    },
    {
        _id: "prod-3",
        _type: "product",
        name: "Minyak Kelapa Murni (VCO)",
        price: "Rp 65.000",
        description: "Virgin Coconut Oil yang diproses dengan metode cold-pressed dari kelapa tua pilihan. Tidak dipanaskan berlebihan sehingga kandungan lauric acid terjaga.",
        benefits: [
            "Kaya asam laurat, baik untuk imunitas",
            "Melembutkan kulit dan rambut",
            "Cocok untuk memasak suhu rendah",
            "Bebas bahan kimia dan bleaching",
        ],
        ingredients: "100% Cocos nucifera (kelapa) cold-pressed",
        size: "250ml",
        isActive: true,
        featured: true,
        order: 3,
        category: { _type: "reference", _ref: "cat-kelapa" },
        shopeeUrl: "https://shopee.co.id",
    },
    {
        _id: "prod-4",
        _type: "product",
        name: "Temulawak Simplisia",
        price: "Rp 25.000",
        description: "Irisan temulawak kering berkualitas tinggi untuk ramuan herbal dan jamu tradisional. Dipanen saat tepat waktu agar kandungan xanthorrhizol optimal.",
        benefits: [
            "Menjaga kesehatan fungsi hati",
            "Meningkatkan nafsu makan",
            "Anti-inflamasi alami",
            "Murni tanpa campuran",
        ],
        ingredients: "100% Curcuma xanthorrhiza (temulawak) kering",
        size: "100g",
        isActive: true,
        featured: false,
        order: 4,
        category: { _type: "reference", _ref: "cat-empon" },
        shopeeUrl: "https://shopee.co.id",
        tiktokUrl: "https://tiktok.com",
    },
    {
        _id: "prod-5",
        _type: "product",
        name: "Kayu Manis Ceylon Batang",
        price: "Rp 32.000",
        description: "Kayu manis Ceylon (true cinnamon) asli yang berbeda dengan cassia biasa. Lebih lembut, manis, dan rendah kumarin — aman untuk konsumsi rutin.",
        benefits: [
            "Membantu mengontrol gula darah",
            "Aroma lebih halus dari cassia biasa",
            "Rendah kumarin, aman dikonsumsi rutin",
            "Cocok untuk minuman dan masakan",
        ],
        ingredients: "100% Cinnamomum verum (kayu manis Ceylon)",
        size: "50g",
        badge: "Premium",
        isActive: true,
        featured: false,
        order: 5,
        category: { _type: "reference", _ref: "cat-rempah" },
        shopeeUrl: "https://shopee.co.id",
    },
    {
        _id: "prod-6",
        _type: "product",
        name: "Santan Kelapa Bubuk",
        price: "Rp 42.000",
        description: "Santan kelapa segar yang diubah menjadi bubuk menggunakan metode spray drying. Tanpa pengawet dan mudah larut dalam air.",
        benefits: [
            "Praktis, ketahanan lebih lama",
            "Tidak perlu kulkas seperti santan cair",
            "Cocok untuk masak dan smoothies",
            "Bebas bahan pengawet",
        ],
        ingredients: "Kelapa (Cocos nucifera), maltodekstrin (dari singkong)",
        size: "200g",
        isActive: true,
        featured: false,
        order: 6,
        category: { _type: "reference", _ref: "cat-kelapa" },
        shopeeUrl: "https://shopee.co.id",
        tiktokUrl: "https://tiktok.com",
    },
];

const articleCategories = [
    { _id: "acat-edukasi", _type: "category", name: "Edukasi Bahan Alam", slug: { _type: "slug", current: "edukasi-bahan-alam" }, description: "Kenali bahan-bahan alam dan manfaatnya" },
    { _id: "acat-tips", _type: "category", name: "Tips & Resep", slug: { _type: "slug", current: "tips-resep" }, description: "Cara mengolah dan menggunakan produk Akeguno" },
    { _id: "acat-cerita", _type: "category", name: "Di Balik Layar", slug: { _type: "slug", current: "di-balik-layar" }, description: "Cerita dan proses di balik Akeguno Naturals" },
];

const articles = [
    {
        _id: "art-1",
        _type: "article",
        title: "Mengapa Jahe Merah Lebih Baik dari Jahe Biasa?",
        slug: { _type: "slug", current: "jahe-merah-vs-jahe-biasa" },
        excerpt: "Jahe merah (Zingibar officinale var. rubrum) mengandung gingerol 3x lebih tinggi dari jahe putih biasa. Inilah kenapa nenek moyang kita selalu memilihnya untuk jamu.",
        author: "Tim Akeguno",
        publishedAt: "2026-03-01T00:00:00.000Z",
        readTime: 5,
        featured: true,
        category: { _type: "reference", _ref: "acat-edukasi" },
        body: [
            { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Jahe merah telah menjadi bagian dari tradisi pengobatan Nusantara selama ribuan tahun. Namun, tahukah kamu apa yang membedakannya dari jahe putih yang sering kita gunakan sehari-hari?" }] },
            { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Kandungan Gingerol Lebih Tinggi" }] },
            { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Perbedaan utama terletak pada kandungan gingerol — senyawa aktif yang memberikan rasa pedas dan khasiat terapeutik. Jahe merah mengandung gingerol 3x lebih tinggi dibanding jahe putih, menjadikannya pilihan terbaik untuk ramuan kesehatan." }] },
        ],
        seo: { metaTitle: "Perbedaan Jahe Merah dan Jahe Biasa | Akeguno Naturals", metaDescription: "Jahe merah mengandung gingerol 3x lebih tinggi. Pelajari perbedaannya dan manfaatnya untuk kesehatan." },
    },
    {
        _id: "art-2",
        _type: "article",
        title: "5 Cara Menggunakan Kunyit Asem untuk Kesehatan Harian",
        slug: { _type: "slug", current: "cara-menggunakan-kunyit-asem" },
        excerpt: "Kunyit asem bukan hanya minuman penyegar biasa. Dari membantu detoks harian hingga meredakan nyeri, inilah 5 cara terbaik memaksimalkan manfaatnya.",
        author: "Tim Akeguno",
        publishedAt: "2026-02-25T00:00:00.000Z",
        readTime: 4,
        featured: true,
        category: { _type: "reference", _ref: "acat-tips" },
        body: [
            { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Kunyit asem adalah salah satu minuman jamu paling populer di Indonesia — dan bukan tanpa alasan. Kombinasi kurkumin dari kunyit dan vitamin C dari asam jawa menciptakan paduan yang luar biasa untuk tubuh." }] },
        ],
        seo: { metaTitle: "5 Cara Menggunakan Kunyit Asem | Akeguno Naturals", metaDescription: "Temukan 5 cara terbaik menggunakan kunyit asem untuk kesehatan harian, dari detoks hingga meredakan nyeri." },
    },
    {
        _id: "art-3",
        _type: "article",
        title: "Mengenal VCO: Bukan Sembarang Minyak Kelapa",
        slug: { _type: "slug", current: "mengenal-virgin-coconut-oil" },
        excerpt: "Virgin Coconut Oil (VCO) berbeda jauh dengan minyak kelapa biasa di pasaran. Cold-pressed, tidak dipanaskan, dan kaya lauric acid — inilah standar yang kami jaga.",
        author: "Tim Akeguno",
        publishedAt: "2026-02-20T00:00:00.000Z",
        readTime: 6,
        featured: true,
        category: { _type: "reference", _ref: "acat-edukasi" },
        body: [
            { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Tidak semua minyak kelapa diciptakan sama. VCO atau Virgin Coconut Oil adalah bentuk paling murni dari minyak kelapa, diproses tanpa panas berlebihan sehingga kandungan nutrisinya tetap terjaga." }] },
        ],
        seo: { metaTitle: "Apa Itu VCO? | Akeguno Naturals", metaDescription: "Pelajari perbedaan VCO dengan minyak kelapa biasa dan kenapa cold-pressed lebih baik untuk kesehatan." },
    },
];

const faqItems = [
    { _id: "faq-1", _type: "faqItem", question: "Dari mana bahan-bahan Akeguno Naturals berasal?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Semua bahan kami bersumber langsung dari petani lokal Indonesia — terutama dari Jawa Tengah, Jawa Timur, dan wilayah-wilayah lain yang dikenal sebagai penghasil rempah berkualitas. Kami membangun hubungan langsung dengan petani tanpa perantara berlebihan." }] }], category: "Tentang Produk", order: 1, isActive: true },
    { _id: "faq-2", _type: "faqItem", question: "Apakah produk Akeguno bebas bahan kimia tambahan?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Ya. Kami berkomitmen untuk tidak menambahkan bahan pengawet sintetis, pewarna buatan, atau perisa artifisial ke dalam produk kami. Komposisi yang tercantum adalah yang sebenarnya ada di dalam kemasan." }] }], category: "Tentang Produk", order: 2, isActive: true },
    { _id: "faq-3", _type: "faqItem", question: "Bagaimana cara memesan produk Akeguno Naturals?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Saat ini pembelian bisa dilakukan melalui toko resmi kami di Shopee dan TikTok Shop. Klik tombol 'Beli di Shopee' atau 'Beli di TikTok Shop' di halaman produk, atau hubungi kami langsung melalui WhatsApp." }] }], category: "Pembelian", order: 3, isActive: true },
    { _id: "faq-4", _type: "faqItem", question: "Berapa lama pengiriman ke daerah saya?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Estimasi pengiriman tergantung ekspedisi dan lokasi tujuan. Untuk Pulau Jawa biasanya 1-3 hari kerja, luar Pulau Jawa 3-7 hari kerja. Estimasi lebih akurat tersedia di halaman checkout marketplace." }] }], category: "Pembelian", order: 4, isActive: true },
    { _id: "faq-5", _type: "faqItem", question: "Apakah ada minimum pembelian?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Tidak ada minimum pembelian. Kamu bisa memesan satu produk sekaligus. Namun untuk pembelian reseller atau partai besar, silakan hubungi kami melalui WhatsApp untuk mendapatkan harga khusus." }] }], category: "Pembelian", order: 5, isActive: true },
    { _id: "faq-6", _type: "faqItem", question: "Bagaimana cara penyimpanan produk yang benar?", answer: [{ _type: "block", _key: "b1", children: [{ _type: "span", _key: "s1", text: "Simpan di tempat yang sejuk, kering, dan terhindar dari sinar matahari langsung. Produk simplisia dan bubuk sebaiknya disimpan dalam wadah tertutup rapat. Setelah dibuka, habiskan sesuai anjuran pada kemasan." }] }], category: "Tentang Produk", order: 6, isActive: true },
];

// ────────────────────────────────────────────────────────────
// RUNNER
// ────────────────────────────────────────────────────────────

async function seed() {
    console.log("🌱 Starting Akeguno Naturals seed...\n");

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your-project-id") {
        console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID belum diisi di .env.local");
        process.exit(1);
    }

    if (!process.env.SANITY_WRITE_TOKEN) {
        console.error("❌ SANITY_WRITE_TOKEN belum diisi di .env.local");
        console.error("   Buka sanity.io/manage → API → Tokens → Add API Token (Editor)");
        process.exit(1);
    }

    const allDocs = [
        siteSettings,
        ...productCategories,
        ...products,
        ...articleCategories,
        ...articles,
        ...faqItems,
    ];

    let success = 0;
    let failed = 0;

    for (const doc of allDocs) {
        try {
            await client.createOrReplace(doc);
            console.log(`✅ ${doc._type}: ${doc.name || doc.title || doc.question || doc._id}`);
            success++;
        } catch (err) {
            console.error(`❌ Gagal: ${doc._id} — ${err.message}`);
            failed++;
        }
    }

    console.log(`\n🎉 Selesai! ${success} dokumen berhasil, ${failed} gagal.`);
    console.log("   Buka /studio untuk memverifikasi data.\n");
}

seed();
