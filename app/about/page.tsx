import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description:
        "Cerita di balik Akeguno Naturals — brand skincare alami Indonesia yang menghormati kekayaan alam dengan filosofi Akeh Guna (Banyak Manfaat).",
};

const pillars = [
    {
        icon: "🌿",
        title: "Alam & Autentisitas",
        desc: "Kami memilih bahan-bahan dari alam dengan cermat, memastikan setiap produk murni dan autentik tanpa bahan sintetis yang berbahaya.",
    },
    {
        icon: "🤝",
        title: "Tujuan Bersama",
        desc: "Akeguno bukan sekadar brand, tapi gerakan. Kami membangun komunitas yang saling berbagi manfaat — untuk pelanggan, perajin lokal, dan lingkungan.",
    },
    {
        icon: "🌏",
        title: "Ekosistem Holistik",
        desc: "Setiap keputusan kami mempertimbangkan keseimbangan antara kebutuhan manusia dan kelestarian alam. Dari bahan baku hingga kemasan.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-eucalyptus-calm/10 lg:min-h-[60vh]">
                <div className="absolute inset-0 bg-gradient-to-b from-eucalyptus-calm/15 to-authentic-linen" />
                <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                    <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                        Tentang Kami
                    </p>
                    <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight text-urbane-bronze md:text-[44px] lg:text-[56px]">
                        Akeh Guna —<br />
                        Banyak Manfaat
                    </h1>
                </div>
            </section>

            {/* Origin Story */}
            <section className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                                Asal Mula Akeguno
                            </h2>
                            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                                <p>
                                    Akeguno lahir dari kecintaan yang mendalam terhadap kekayaan
                                    alam Indonesia. Nama &quot;Akeguno&quot; berasal dari bahasa
                                    Jawa, yang berarti &quot;banyak guna&quot; — filosofi yang
                                    mendasari setiap produk yang kami ciptakan.
                                </p>
                                <p>
                                    Kami percaya bahwa alam telah menyediakan segalanya yang kita
                                    butuhkan. Tugas kami adalah mengolahnya dengan penuh hormat,
                                    menjaga keasliannya, dan membagikan manfaatnya kepada sebanyak
                                    mungkin orang.
                                </p>
                                <p>
                                    Setiap bahan yang kami pilih, setiap formula yang kami racik,
                                    dan setiap produk yang kami ciptakan mencerminkan komitmen kami
                                    terhadap transparansi, kualitas, dan keberlanjutan.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cinnamon/10 lg:aspect-square">
                            <div className="flex h-full items-center justify-center">
                                <div className="text-center">
                                    <span className="text-7xl">🌿</span>
                                    <p className="mt-4 font-body text-sm text-text-secondary">
                                        Brand Story Photo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Tiga Pilar Kami
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-14 lg:gap-12">
                        {pillars.map((p) => (
                            <div key={p.title} className="text-center">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-eucalyptus-calm/10 text-4xl">
                                    {p.icon}
                                </div>
                                <h3 className="mt-5 font-heading text-xl font-medium text-urbane-bronze md:text-2xl">
                                    {p.title}
                                </h3>
                                <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary lg:text-base">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-eucalyptus-calm/10">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Komitmen Kami
                    </h2>
                    <p className="mt-6 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                        Kami berkomitmen untuk menghadirkan produk yang tidak hanya bermanfaat
                        bagi penggunanya, tetapi juga bertanggung jawab kepada alam dan
                        masyarakat. Dengan transparansi penuh, kami mengundang Anda untuk
                        menjadi bagian dari perjalanan ini.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px]">
                        Lihat Hasil Alam Kami
                    </h2>
                    <p className="mt-3 font-body text-sm text-text-secondary lg:text-base">
                        Jelajahi koleksi produk alami dari Akeguno Naturals.
                    </p>
                    <Link
                        href="/hasil-alam"
                        className="mt-6 inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white transition-colors hover:bg-terracotta-hover"
                    >
                        Jelajahi Hasil Alam
                    </Link>
                </div>
            </section>
        </>
    );
}
