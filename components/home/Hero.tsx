import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-urbane-bronze/5 lg:min-h-[90vh]">
            {/* Background placeholder — will be replaced with real image */}
            <div className="absolute inset-0 bg-gradient-to-b from-eucalyptus-calm/20 via-authentic-linen to-authentic-linen" />

            {/* Decorative natural pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-eucalyptus-calm) 1px, transparent 1px),
                          radial-gradient(circle at 80% 30%, var(--color-cinnamon) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                {/* Tagline */}
                <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-terracotta-earth">
                    Akeguno Naturals
                </p>

                <h1 className="font-heading text-[32px] font-semibold leading-tight text-urbane-bronze md:text-[44px] lg:text-[56px]">
                    Honors Nature&apos;s Gifts Through Authenticity and Shared Purpose
                </h1>

                <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                    Produk alami berkualitas tinggi yang menghormati kekayaan alam Indonesia.
                    Akeh Guna — Banyak Manfaat.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/hasil-alam"
                        className="inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white transition-colors hover:bg-terracotta-hover"
                    >
                        Jelajahi Hasil Alam
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex h-12 items-center rounded-[4px] border border-urbane-bronze/20 px-8 font-body text-sm font-semibold text-urbane-bronze transition-colors hover:border-terracotta-earth hover:text-terracotta-earth"
                    >
                        Baca Cerita Kami
                    </Link>
                </div>
            </div>
        </section>
    );
}
