"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-urbane-bronze/5">
            {/* Background Image Area */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Akeguno Naturals Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
            </div>

            {/* Decorative natural pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-eucalyptus-calm) 1px, transparent 1px),
                          radial-gradient(circle at 80% 30%, var(--color-cinnamon) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                {/* Tagline */}
                <FadeIn delay={0.1} direction="up">
                    <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-terracotta-earth">
                        Akeguno Naturals
                    </p>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <h1 className="font-heading text-[32px] font-semibold leading-tight text-white md:text-[44px] lg:text-[56px]">
                        Honors Nature&apos;s Gifts Through Authenticity and Shared Purpose
                    </h1>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-white/90 lg:text-lg">
                        Produk alami berkualitas tinggi yang menghormati kekayaan alam Indonesia.
                        Akeh Guna — Banyak Manfaat.
                    </p>
                </FadeIn>

                <FadeIn delay={0.7} direction="up">
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/hasil-alam"
                            className="inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white shadow-sm transition-all hover:bg-terracotta-hover hover:scale-[1.02] active:scale-95"
                        >
                            Jelajahi Hasil Alam
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex h-12 items-center rounded-[4px] border border-white/20 bg-transparent px-8 font-body text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:scale-[1.02] active:scale-95"
                        >
                            Baca Cerita Kami
                        </Link>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex h-10 w-10 items-center justify-center text-white/70"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
