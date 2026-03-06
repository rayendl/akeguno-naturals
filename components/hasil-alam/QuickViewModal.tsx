"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { AnimatePresence, motion } from "framer-motion";

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

interface QuickViewModalProps {
    product: Product | null;
    onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
    const [showIngredients, setShowIngredients] = useState(false);

    if (!product) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-end justify-center bg-urbane-bronze/50 backdrop-blur-sm lg:items-center"
            >
                {/* Mobile: bottom sheet / Desktop: centered modal */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-white lg:max-h-[80vh] lg:max-w-2xl lg:rounded-2xl"
                >
                    {/* Close button */}
                    <div className="sticky top-0 z-10 flex justify-end bg-white/80 p-3 backdrop-blur-sm">
                        <button
                            onClick={onClose}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-authentic-linen"
                            aria-label="Close"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-5 pb-8 lg:px-8">
                        {/* Product image */}
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-authentic-linen">
                            {product.image?.asset ? (
                                <Image
                                    src={urlFor(product.image).width(600).height(600).url()}
                                    alt={product.image.alt || product.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-6xl">🧴</span>
                                </div>
                            )}
                            {product.badge && (
                                <span className="absolute left-3 top-3 rounded-full bg-muted-gold px-3 py-1 font-body text-xs font-semibold text-white">
                                    {product.badge}
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <h2 className="mt-5 font-heading text-2xl font-semibold text-urbane-bronze lg:text-3xl">
                            {product.name}
                        </h2>
                        <p className="mt-1 font-body text-lg font-semibold text-terracotta-earth">
                            {product.price}
                        </p>
                        {product.size && (
                            <p className="mt-1 font-body text-sm text-text-secondary">
                                Ukuran: {product.size}
                            </p>
                        )}

                        {product.description && (
                            <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary lg:text-base">
                                {product.description}
                            </p>
                        )}

                        {/* Benefits */}
                        {product.benefits && product.benefits.length > 0 && (
                            <div className="mt-5">
                                <h3 className="font-body text-sm font-semibold text-urbane-bronze">
                                    Keunggulan:
                                </h3>
                                <ul className="mt-2 space-y-1.5">
                                    {product.benefits.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2 font-body text-sm text-text-secondary">
                                            <span className="mt-0.5 text-eucalyptus-calm">✓</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Ingredients (collapsible) */}
                        {product.ingredients && (
                            <div className="mt-5 border-t border-morning-dew/30 pt-4">
                                <button
                                    onClick={() => setShowIngredients(!showIngredients)}
                                    className="flex w-full items-center justify-between font-body text-sm font-semibold text-urbane-bronze"
                                >
                                    Bahan / Ingredients
                                    <svg
                                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        className={`transition-transform ${showIngredients ? "rotate-180" : ""}`}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                {showIngredients && (
                                    <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                                        {product.ingredients}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            {product.shopeeUrl && (
                                <a
                                    href={product.shopeeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[4px] bg-[#EE4D2D] font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    🟠 Beli di Shopee
                                </a>
                            )}
                            {product.tiktokUrl && (
                                <a
                                    href={product.tiktokUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[4px] bg-urbane-bronze font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    🎵 Beli di TikTok Shop
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
