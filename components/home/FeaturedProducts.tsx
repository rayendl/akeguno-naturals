"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";
import Link from "next/link";

interface Product {
    _id: string;
    name: string;
    slug: string;
    image: { asset: { _ref: string }; alt?: string };
    price: string;
    badge?: string;
    shopeeUrl?: string;
    tiktokUrl?: string;
    lazadaUrl?: string;
    tokopediaUrl?: string;
    description?: string;
    size?: string;
    benefits?: string[];
    ingredients?: string;
}

interface FeaturedProductsProps {
    products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {

    const displayProducts = products;
    const isSparse = displayProducts.length <= 2;

    return (
        <section className="section-padding bg-white">
            <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerItem>
                    <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Hasil Alam Pilihan
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                        Produk unggulan dari Akeguno Naturals, langsung dari alam untuk Anda.
                    </p>
                </StaggerItem>

                {isSparse ? (
                    /* Centered layout for sparse products */
                    <div className="mt-10 grid grid-cols-2 gap-3 pb-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
                        {displayProducts.map((product) => (
                            <StaggerItem
                                key={product._id}
                                className="group w-full sm:max-w-[280px] rounded-lg transition-shadow hover:shadow-lg border border-gray-50 bg-white p-2 sm:p-3 cursor-pointer"
                                direction="up"
                            >
                                <Link href={`/hasil-alam/${product.slug}`} className="block">
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                                    {product.image?.asset ? (
                                        <Image
                                            src={urlFor(product.image).width(400).height(400).url()}
                                            alt={product.image.alt || product.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 640px) 50vw, 280px"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-cinnamon/5">
                                            <span className="text-4xl">🌿</span>
                                        </div>
                                    )}
                                    {product.badge && (
                                        <span className="absolute left-3 top-3 rounded-full bg-muted-gold px-3 py-1 font-body text-xs font-semibold text-white">
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-heading text-base sm:text-lg font-medium text-urbane-bronze leading-snug">{product.name}</h3>
                                    <p className="mt-1 font-body text-xs sm:text-sm font-semibold text-terracotta-earth">{product.price}</p>
                                    <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-2 flex-wrap">
                                        {product.shopeeUrl && (
                                            <button onClick={(e) => { e.preventDefault(); window.open(product.shopeeUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#EE4D2D] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🟠 Shopee</button>
                                        )}
                                        {product.tiktokUrl && (
                                            <button onClick={(e) => { e.preventDefault(); window.open(product.tiktokUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-urbane-bronze px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🎵 TikTok</button>
                                        )}
                                        {product.lazadaUrl && (
                                            <button onClick={(e) => { e.preventDefault(); window.open(product.lazadaUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#0F146D] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🔵 Lazada</button>
                                        )}
                                        {product.tokopediaUrl && (
                                            <button onClick={(e) => { e.preventDefault(); window.open(product.tokopediaUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#42B549] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🟢 Tokopedia</button>
                                        )}
                                    </div>
                                </div>
                                </Link>
                            </StaggerItem>
                        ))}
                        {/* Coming Soon Teaser Card */}
                        <StaggerItem
                            className="w-full sm:max-w-[280px] rounded-lg border-2 border-dashed border-eucalyptus-calm/30 bg-eucalyptus-calm/5 p-2"
                            direction="up"
                        >
                            <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-lg">
                                <span className="text-5xl">🍯</span>
                                <p className="font-heading text-base font-medium text-urbane-bronze">Segera Hadir</p>
                                <p className="px-4 text-center font-body text-xs text-text-secondary leading-relaxed">
                                    Produk baru sedang dalam persiapan. Pantau terus!
                                </p>
                            </div>
                        </StaggerItem>
                    </div>
                ) : (
                    /* Mobile: 2 columns grid / Desktop: grid */
                    <StaggerContainer className="mt-10 grid grid-cols-2 gap-3 pb-4 sm:gap-4 md:grid-cols-3 lg:gap-8 lg:pb-0 xl:grid-cols-4">
                        {displayProducts.map((product) => (
                            <StaggerItem
                                key={product._id}
                                className="group rounded-lg transition-shadow hover:shadow-lg p-2 sm:p-3 border border-gray-50 bg-white cursor-pointer"
                                direction="up"
                            >
                                <Link href={`/hasil-alam/${product.slug}`} className="block">
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                                    {product.image?.asset ? (
                                        <Image
                                            src={urlFor(product.image).width(400).height(400).url()}
                                            alt={product.image.alt || product.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-cinnamon/5">
                                            <span className="text-4xl">🌿</span>
                                        </div>
                                    )}
                                    {product.badge && (
                                        <span className="absolute left-3 top-3 rounded-full bg-muted-gold px-3 py-1 font-body text-xs font-semibold text-white">
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-heading text-base sm:text-lg font-medium text-urbane-bronze leading-snug">{product.name}</h3>
                                    <p className="mt-1 font-body text-xs sm:text-sm font-semibold text-terracotta-earth">{product.price}</p>
                                    <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-2 flex-wrap">
                                        {product.shopeeUrl && (<button onClick={(e) => { e.preventDefault(); window.open(product.shopeeUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#EE4D2D] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🟠 Shopee</button>)}
                                        {product.tiktokUrl && (<button onClick={(e) => { e.preventDefault(); window.open(product.tiktokUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-urbane-bronze px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🎵 TikTok</button>)}
                                        {product.lazadaUrl && (<button onClick={(e) => { e.preventDefault(); window.open(product.lazadaUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#0F146D] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🔵 Lazada</button>)}
                                        {product.tokopediaUrl && (<button onClick={(e) => { e.preventDefault(); window.open(product.tokopediaUrl, "_blank"); }} className="inline-flex items-center gap-1 rounded-[4px] bg-[#42B549] px-2 py-1 sm:px-3 sm:py-1.5 font-body text-[10px] sm:text-xs font-medium text-white transition-opacity hover:opacity-90">🟢 Tokopedia</button>)}
                                    </div>
                                </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                )}

                <StaggerItem>
                    <div className="mt-8 text-center">
                        <Link
                            href="/hasil-alam"
                            className="inline-flex h-11 items-center rounded-[4px] border border-terracotta-earth px-6 font-body text-sm font-semibold text-terracotta-earth shadow-sm transition-all hover:bg-terracotta-earth hover:text-white hover:scale-[1.02] active:scale-95"
                        >
                            Lihat Semua Produk →
                        </Link>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}

