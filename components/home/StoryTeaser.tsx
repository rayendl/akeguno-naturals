import Link from "next/link";

export function StoryTeaser() {
    return (
        <section className="section-padding bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-eucalyptus-calm/10 lg:aspect-square">
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center">
                                <span className="text-6xl">🌿</span>
                                <p className="mt-4 font-body text-sm text-text-secondary">
                                    Brand Photo Placeholder
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                            Cerita Kami
                        </p>
                        <h2 className="mt-3 font-heading text-[26px] font-semibold leading-tight text-urbane-bronze md:text-[34px] lg:text-[40px]">
                            Akeh Guna —<br />
                            Banyak Manfaat
                        </h2>
                        <p className="mt-5 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                            Berawal dari kecintaan terhadap kekayaan alam Indonesia, Akeguno
                            Naturals hadir untuk menghadirkan produk yang tidak hanya bermanfaat
                            bagi penggunanya, tetapi juga menghormati alam sebagai sumber
                            kehidupan.
                        </p>
                        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                            Nama &quot;Akeguno&quot; berasal dari bahasa Jawa yang berarti
                            &quot;banyak guna&quot; — sebuah filosofi yang menjadi pondasi
                            setiap produk yang kami buat.
                        </p>
                        <Link
                            href="/about"
                            className="mt-8 inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white transition-colors hover:bg-terracotta-hover"
                        >
                            Baca Cerita Kami
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
