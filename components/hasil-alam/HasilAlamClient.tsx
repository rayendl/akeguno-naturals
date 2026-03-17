"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { QuickViewModal } from "./QuickViewModal";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

interface Product {
    _id: string;
    name: string;
    image: { asset: { _ref: string }; alt?: string };
    images?: { asset: { _ref: string }; alt?: string }[];
    price: string;
    description?: string;
    benefits?: string[];
    ingredients?: string;
    size?: string;
    badge?: string;
    shopeeUrl?: string;
    tiktokUrl?: string;
    category?: { name: string; slug: string };
}

interface ProductCategory {
    _id: string;
    name: string;
    slug: string;
}

interface HasilAlamClientProps {
    products: Product[];
    categories: ProductCategory[];
}

export function HasilAlamClient({ products, categories }: HasilAlamClientProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const searchParams = useSearchParams();
    const router = useRouter();

    const displayProducts = products.length > 0 ? products : sampleProducts;

    useEffect(() => {
        const productId = searchParams.get("product");
        if (productId) {
            const product = displayProducts.find((p) => p._id === productId);
            if (product) {
                setSelectedProduct(product);
            }
        }
    }, [searchParams, displayProducts]);

    const handleCloseModal = () => {
        setSelectedProduct(null);
        // Remove the query param from URL without refreshing the page
        if (searchParams.has("product")) {
            router.replace("/hasil-alam", { scroll: false });
        }
    };

    const filtered = activeCategory
        ? displayProducts.filter((p) => p.category?.slug === activeCategory)
        : displayProducts;

    return (
        <>
            {/* Category filter chips */}
            {categories.length > 0 && (
                <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`flex-shrink-0 rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${!activeCategory
                            ? "bg-terracotta-earth text-white"
                            : "bg-white text-text-secondary hover:bg-cinnamon/10"
                            }`}
                    >
                        Semua
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat._id}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`flex-shrink-0 rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${activeCategory === cat.slug
                                ? "bg-terracotta-earth text-white"
                                : "bg-white text-text-secondary hover:bg-cinnamon/10"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Product Grid */}
            <StaggerContainer className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
                {filtered.map((product) => (
                    <StaggerItem
                        key={product._id}
                        className="group cursor-pointer rounded-lg transition-shadow hover:shadow-lg p-2 -m-2"
                        direction="up"
                    >
                        <div onClick={() => setSelectedProduct(product)}>
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                            {product.image?.asset ? (
                                <Image
                                    src={urlFor(product.image).width(400).height(400).url()}
                                    alt={product.image.alt || product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center bg-cinnamon/5 transition-colors group-hover:bg-cinnamon/10">
                                    <span className="text-4xl">🧴</span>
                                </div>
                            )}
                            {product.badge && (
                                <span className="absolute left-2 top-2 rounded-full bg-muted-gold px-2.5 py-1 font-body text-[10px] font-semibold text-white lg:text-xs">
                                    {product.badge}
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <div className="mt-2.5">
                            <h3 className="font-heading text-sm font-medium text-urbane-bronze line-clamp-1 lg:text-base">
                                {product.name}
                            </h3>
                            <p className="mt-0.5 font-body text-xs font-semibold text-terracotta-earth lg:text-sm">
                                {product.price}
                            </p>
                            {/* Marketplace badges */}
                            <div className="mt-2 flex gap-1.5">
                                {product.shopeeUrl && (
                                    <span className="rounded bg-[#EE4D2D]/10 px-2 py-0.5 font-body text-[10px] font-medium text-[#EE4D2D]">
                                        🟠 Shopee
                                    </span>
                                )}
                                {product.tiktokUrl && (
                                    <span className="rounded bg-urbane-bronze/10 px-2 py-0.5 font-body text-[10px] font-medium text-urbane-bronze">
                                        🎵 TikTok
                                    </span>
                                )}
                            </div>
                            <button className="mt-2 w-full rounded-[4px] border border-terracotta-earth/30 py-2 font-body text-xs font-medium text-terracotta-earth shadow-sm transition-all hover:bg-terracotta-earth hover:text-white hover:scale-[1.02] active:scale-95 lg:text-sm">
                                Lihat Detail
                            </button>
                        </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* QuickView Modal */}
            {selectedProduct && (
                <QuickViewModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}

const sampleProducts: Product[] = [
    { _id: "1", name: "Jahe Merah Kering Premium", image: null as unknown as Product["image"], price: "Rp 35.000", badge: "Bestseller", description: "Jahe merah pilihan dari petani lereng gunung, dikeringkan secara alami tanpa bahan pengawet.", benefits: ["Meningkatkan imunitas tubuh", "Menghangatkan badan", "Bebas pengawet"], ingredients: "100% Jahe Merah Krim", size: "100g", shopeeUrl: "#", tiktokUrl: "#", category: { name: "Empon-Empon", slug: "empon-empon" } },
    { _id: "2", name: "Kunyit Asem Instan", image: null as unknown as Product["image"], price: "Rp 28.000", badge: "New", description: "Minuman tradisional kunyit asem yang menyegarkan. Dibuat dari kunyit segar pilihan.", benefits: ["Menyegarkan dan detoks alami", "Antioksidan tinggi", "Praktis diseduh"], ingredients: "Kunyit, asam jawa, gula jawa", size: "200g", shopeeUrl: "#", tiktokUrl: "#", category: { name: "Herbal & Jamu", slug: "herbal-jamu" } },
    { _id: "3", name: "Minyak Kelapa Murni (VCO)", image: null as unknown as Product["image"], price: "Rp 65.000", description: "Virgin Coconut Oil yang diproses dengan metode cold-pressed dari kelapa tua pilihan.", benefits: ["Kaya asam laurat", "Melembutkan kulit", "Bebas bahan kimia"], ingredients: "100% Cocos nucifera", size: "250ml", shopeeUrl: "#", category: { name: "Produk Kelapa", slug: "produk-kelapa" } },
    { _id: "4", name: "Temulawak Simplisia", image: null as unknown as Product["image"], price: "Rp 25.000", description: "Irisan temulawak kering berkualitas tinggi untuk ramuan herbal dan jamu tradisional.", benefits: ["Menjaga fungsi hati", "Meningkatkan nafsu makan"], ingredients: "100% Curcuma xanthorrhiza", size: "100g", shopeeUrl: "#", tiktokUrl: "#", category: { name: "Empon-Empon", slug: "empon-empon" } },
    { _id: "5", name: "Kayu Manis Ceylon Batang", image: null as unknown as Product["image"], price: "Rp 32.000", badge: "Premium", description: "Kayu manis Ceylon (true cinnamon) asli yang lebih lembut, manis, dan rendah kumarin.", benefits: ["Mengontrol gula darah", "Rendah kumarin"], ingredients: "100% Kayu manis Ceylon", size: "50g", shopeeUrl: "#", category: { name: "Rempah & Bumbu", slug: "rempah-bumbu" } },
    { _id: "6", name: "Santan Kelapa Bubuk", image: null as unknown as Product["image"], price: "Rp 42.000", description: "Santan kelapa segar yang diubah menjadi bubuk menggunakan metode spray drying.", benefits: ["Praktis", "Tanpa pengawet", "Mudah larut"], ingredients: "Kelapa, maltodekstrin", size: "200g", shopeeUrl: "#", tiktokUrl: "#", category: { name: "Produk Kelapa", slug: "produk-kelapa" } },
];
