"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/client";

interface Product {
    _id: string;
    name: string;
    slug: string;
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
    lazadaUrl?: string;
    tokopediaUrl?: string;
    category?: { name: string; slug: string };
}

interface Props {
    product: Product;
}

const MARKETPLACE_CONFIG = [
    {
        key: "shopeeUrl" as const,
        label: "Beli di Shopee",
        emoji: "🟠",
        bg: "bg-[#EE4D2D]",
        hoverBg: "hover:bg-[#d94424]",
        text: "text-white",
    },
    {
        key: "tiktokUrl" as const,
        label: "Beli di TikTok Shop",
        emoji: "🎵",
        bg: "bg-[#111010]",
        hoverBg: "hover:bg-[#2a2929]",
        text: "text-white",
    },
    {
        key: "tokopediaUrl" as const,
        label: "Beli di Tokopedia",
        emoji: "🟢",
        bg: "bg-[#42B549]",
        hoverBg: "hover:bg-[#359a3c]",
        text: "text-white",
    },
    {
        key: "lazadaUrl" as const,
        label: "Beli di Lazada",
        emoji: "🔵",
        bg: "bg-[#0F146D]",
        hoverBg: "hover:bg-[#0b1060]",
        text: "text-white",
    },
];

export function ProductDetailClient({ product }: Props) {
    const allImages = [
        product.image,
        ...(product.images ?? []),
    ].filter(Boolean);

    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = allImages[activeIndex];

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            {/* Back link */}
            <Link
                href="/hasil-alam"
                className="mb-8 inline-flex items-center gap-1.5 font-body text-sm text-text-secondary transition-colors hover:text-terracotta-earth"
            >
                <span aria-hidden>←</span> Kembali ke Hasil Alam
            </Link>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                {/* ── LEFT: Image Gallery ── */}
                <div className="space-y-4">
                    {/* Main image */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-cinnamon/5">
                        {activeImage?.asset ? (
                            <Image
                                src={urlFor(activeImage).width(800).height(800).url()}
                                alt={activeImage.alt || product.name}
                                fill
                                className="object-cover transition-opacity duration-300"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center">
                                <span className="text-6xl">🧴</span>
                            </div>
                        )}
                        {product.badge && (
                            <span className="absolute left-4 top-4 rounded-full bg-muted-gold px-3 py-1 font-body text-xs font-semibold text-white">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {allImages.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-1">
                            {allImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                                        i === activeIndex
                                            ? "border-terracotta-earth"
                                            : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    {img?.asset ? (
                                        <Image
                                            src={urlFor(img).width(160).height(160).url()}
                                            alt={img.alt || `${product.name} ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-cinnamon/5">
                                            <span className="text-xl">🧴</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── RIGHT: Product Info ── */}
                <div className="flex flex-col">
                    {/* Category */}
                    {product.category && (
                        <Link
                            href={`/hasil-alam?category=${product.category.slug}`}
                            className="inline-block self-start rounded-full bg-eucalyptus-calm/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-eucalyptus-calm transition-colors hover:bg-eucalyptus-calm/20"
                        >
                            {product.category.name}
                        </Link>
                    )}

                    {/* Name & Price */}
                    <h1 className="mt-3 font-heading text-2xl font-semibold text-urbane-bronze sm:text-3xl lg:text-4xl">
                        {product.name}
                    </h1>
                    <p className="mt-2 font-body text-xl font-bold text-terracotta-earth">
                        {product.price}
                    </p>

                    {/* Size */}
                    {product.size && (
                        <p className="mt-1 font-body text-sm text-text-secondary">
                            Ukuran / Varian: <span className="font-medium text-urbane-bronze">{product.size}</span>
                        </p>
                    )}

                    {/* Divider */}
                    <hr className="my-5 border-morning-dew/30" />

                    {/* Description */}
                    {product.description && (
                        <div className="mb-5">
                            <h2 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-urbane-bronze">
                                Deskripsi
                            </h2>
                            <p className="font-body text-sm leading-relaxed text-text-secondary whitespace-pre-line">
                                {product.description}
                            </p>
                        </div>
                    )}

                    {/* Benefits */}
                    {product.benefits && product.benefits.length > 0 && (
                        <div className="mb-5">
                            <h2 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-urbane-bronze">
                                Manfaat
                            </h2>
                            <ul className="space-y-1.5">
                                {product.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2 font-body text-sm text-text-secondary">
                                        <span className="mt-0.5 text-terracotta-earth">✓</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Ingredients */}
                    {product.ingredients && (
                        <div className="mb-6">
                            <h2 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-urbane-bronze">
                                Komposisi / Bahan
                            </h2>
                            <p className="font-body text-sm leading-relaxed text-text-secondary">
                                {product.ingredients}
                            </p>
                        </div>
                    )}

                    {/* CTA — Marketplace Buttons */}
                    <div className="mt-auto space-y-3">
                        <p className="font-body text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            Beli Sekarang Di:
                        </p>
                        {MARKETPLACE_CONFIG.map(({ key, label, emoji, bg, hoverBg, text }) => {
                            const url = product[key];
                            if (!url) return null;
                            return (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold ${bg} ${hoverBg} ${text} transition-all hover:scale-[1.02] active:scale-95 shadow-sm`}
                                >
                                    <span>{emoji}</span>
                                    {label}
                                </a>
                            );
                        })}
                        {!product.shopeeUrl && !product.tiktokUrl && !product.lazadaUrl && !product.tokopediaUrl && (
                            <p className="rounded-lg bg-cinnamon/5 px-4 py-3 text-center font-body text-sm text-text-secondary">
                                Hubungi kami untuk pembelian produk ini.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
