import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description:
        "Cerita di balik Akeguno Naturals — madu murni dari peternak lokal Jawa Tengah. Jujur dari hulu ke hilir.",
};

const pillars = [
    {
        icon: "🍯",
        title: "Kualitas Raw",
        desc: "Nutrisi Utuh, Tanpa Sentuh. Kami menjaga kemurnian madu apa adanya dan menolak penggunaan mesin pemanas, demi memprioritaskan khasiat.",
    },
    {
        icon: "🔍",
        title: "Transparansi Proses",
        desc: "Bicara Fakta, Bekerja Nyata. Dokumentasi setiap proses untuk memberikan kepastian. Transparansi kami adalah janji, dokumentasi kami adalah bukti.",
    },
    {
        icon: "🏅",
        title: "Standar Legal",
        desc: "Teruji Teks, Terjamin Praktis. Kualitas melewati audit NKV, memastikan standar kebersihan, keamanan pangan dan operasional memenuhi regulasi negara.",
    },
    {
        icon: "🤝",
        title: "Ekonomi Lokal",
        desc: "Berdayakan Desa, Majukan Bangsa. Kami bekerja langsung dengan peternak Jawa Tengah untuk mendukung kesejahteraan warga desa dan peternak lebah.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex pt-32 pb-12 lg:pt-40 lg:pb-16 items-center justify-center overflow-hidden bg-eucalyptus-calm/10">
                <div className="absolute inset-0 bg-gradient-to-b from-eucalyptus-calm/15 to-authentic-linen" />
                <StaggerContainer className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                    <StaggerItem>
                        <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                            Tentang Kami
                        </p>
                    </StaggerItem>
                    <StaggerItem>
                        <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight text-urbane-bronze md:text-[44px] lg:text-[56px]">
                            Akeh Guna —<br />
                            Banyak Manfaat
                        </h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mt-4 font-body text-base text-text-secondary lg:text-lg">
                            Honors nature&apos;s gift through authenticity and shared purpose.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* Origin Story */}
            <section className="pb-16 pt-10 md:pb-24 md:pt-16 lg:pt-20">
                <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <StaggerItem>
                                <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                                    Madu Murni, Tanpa Adulterasi
                                </h2>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="mt-1 space-y-4 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                                    <p>
                                        Akeguno lahir dari keresahan kami melihat sulitnya mendapatkan madu yang benar-benar murni dan jelas asal-usulnya. Di tengah pasar yang penuh dengan madu sirupan atau campuran, Akeguno hadir dengan satu janji sederhana: <strong className="text-urbane-bronze">Jujur dari hulu ke hilir.</strong>
                                    </p>
                                    <p>
                                        Akeguno digerakkan oleh kolaborasi tiga sahabat: <strong className="text-urbane-bronze">Fata, Aji, dan Matthew</strong>. Tiga kepala dengan latar belakang berbeda, namun bergerak dalam satu irama.
                                    </p>
                                    <p>
                                        Kami mengombinasikan transparansi dokumentasi, ketelitian operasional, dan visi untuk membawa hasil bumi ke level profesional tanpa kehilangan jati diri.
                                    </p>
                                </div>
                            </StaggerItem>
                        </div>
                        <StaggerItem>
                            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-cinnamon/10 lg:aspect-square">
                                <Image
                                    src="/tim-akeguno.png"
                                    alt="Tim Akeguno Naturals"
                                    fill
                                    quality={85}
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* Four Pillars */}
            <section className="section-padding bg-white">
                <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <StaggerItem>
                        <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                            Kenapa Akeguno?
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                            Empat pilar yang membedakan kami dari yang lain.
                        </p>
                    </StaggerItem>
                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-14 lg:gap-12">
                        {pillars.map((p) => (
                            <StaggerItem key={p.title} className="flex gap-4">
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-eucalyptus-calm/10 text-3xl">
                                    {p.icon}
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-medium text-urbane-bronze md:text-2xl">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary lg:text-base">
                                        {p.desc}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-eucalyptus-calm/10">
                <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <StaggerItem>
                            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-eucalyptus-calm/10 lg:aspect-square shadow-sm">
                                <Image
                                    src="/about-farm.jpg"
                                    alt="Visi Misi Akeguno Naturals"
                                    fill
                                    quality={85}
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </StaggerItem>
                        <div>
                            <StaggerItem>
                                <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                                    Visi &amp; Misi
                                </h2>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="mt-1 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                                    <p className="font-medium text-urbane-bronze mb-4">
                                        Visi: Honors nature&apos;s gift through authenticity and shared purpose.
                                    </p>
                                    <ul className="text-left space-y-3 list-disc list-inside pl-4">
                                        <li><strong>Kejujuran Nutrisi:</strong> Menjaga enzim madu tetap hidup tanpa proses pemanasan.</li>
                                        <li><strong>Transparansi Proses:</strong> Menjamin kepercayaan lewat dokumentasi yang konsisten.</li>
                                        <li><strong>Sinergi Ekonomi:</strong> Memajukan peternak lokal melalui rantai pasok yang berkeadilan.</li>
                                    </ul>
                                </div>
                            </StaggerItem>
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <StaggerContainer className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <StaggerItem>
                        <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px]">
                            Lihat Hasil Alam Kami
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mt-3 font-body text-sm text-text-secondary lg:text-base">
                            Jelajahi koleksi madu murni dari Akeguno Naturals.
                        </p>
                    </StaggerItem>
                    <StaggerItem>
                        <Link
                            href="/hasil-alam"
                            className="mt-6 inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white transition-colors hover:bg-terracotta-hover"
                        >
                            Jelajahi Hasil Alam
                        </Link>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </>
    );
}
