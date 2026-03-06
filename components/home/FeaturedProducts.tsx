"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/client";

interface Product {
    _id: string;
    name: string;
    image: { asset: { _ref: string }; alt?: string };
    price: string;
    badge?: string;
    shopeeUrl?: string;
    tiktokUrl?: string;
}

interface FeaturedProductsProps {
    products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
    // Fallback sample products when Sanity has no data yet
    const displayProducts = products.length > 0 ? products : sampleProducts;

    return (
        <section className="section-padding">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                    Hasil Alam Pilihan
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                    Produk unggulan dari Akeguno Naturals, langsung dari alam untuk Anda.
                </p>

                {/* Mobile: horizontal scroll / Desktop: grid */}
                <div className="mt-10 flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-4">
                    {displayProducts.map((product) => (
                        <div
                            key={product._id}
                            className="group min-w-[240px] flex-shrink-0 lg:min-w-0"
                        >
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                                {product.image?.asset ? (
                                    <Image
                                        src={urlFor(product.image).width(400).height(400).url()}
                                        alt={product.image.alt || product.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 240px, (max-width: 1024px) 33vw, 25vw"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-cinnamon/5">
                                        <span className="text-4xl">🌿</span>
                                    </div>
                                )}
                                {/* Badge */}
                                {product.badge && (
                                    <span className="absolute left-3 top-3 rounded-full bg-muted-gold px-3 py-1 font-body text-xs font-semibold text-white">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Info */}
                            <div className="mt-3">
                                <h3 className="font-heading text-lg font-medium text-urbane-bronze">
                                    {product.name}
                                </h3>
                                <p className="mt-1 font-body text-sm font-semibold text-terracotta-earth">
                                    {product.price}
                                </p>
                                {/* Marketplace links */}
                                <div className="mt-3 flex gap-2">
                                    {product.shopeeUrl && (
                                        <a
                                            href={product.shopeeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 rounded-[4px] bg-[#EE4D2D] px-3 py-1.5 font-body text-xs font-medium text-white transition-opacity hover:opacity-90"
                                        >
                                            🟠 Shopee
                                        </a>
                                    )}
                                    {product.tiktokUrl && (
                                        <a
                                            href={product.tiktokUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 rounded-[4px] bg-urbane-bronze px-3 py-1.5 font-body text-xs font-medium text-white transition-opacity hover:opacity-90"
                                        >
                                            🎵 TikTok
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/hasil-alam"
                        className="inline-flex h-11 items-center rounded-[4px] border border-terracotta-earth px-6 font-body text-sm font-semibold text-terracotta-earth transition-colors hover:bg-terracotta-earth hover:text-white"
                    >
                        Lihat Semua Produk →
                    </a>
                </div>
            </div>
        </section>
    );
}

const sampleProducts: Product[] = [
    { _id: "1", name: "Jahe Merah Kering Premium", image: null as unknown as Product["image"], price: "Rp 35.000", badge: "Bestseller", shopeeUrl: "#", tiktokUrl: "#" },
    { _id: "2", name: "Kunyit Asem Instan", image: null as unknown as Product["image"], price: "Rp 28.000", badge: "New", shopeeUrl: "#", tiktokUrl: "#" },
    { _id: "3", name: "Minyak Kelapa Murni (VCO)", image: null as unknown as Product["image"], price: "Rp 65.000", shopeeUrl: "#" },
];
