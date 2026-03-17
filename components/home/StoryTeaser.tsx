import Link from "next/link";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

export function StoryTeaser() {
    return (
        <section className="section-padding bg-white">
            <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <StaggerItem>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-eucalyptus-calm/10 lg:aspect-square group">
                            <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                                <div className="text-center">
                                    <span className="text-6xl">🌿</span>
                                    <p className="mt-4 font-body text-sm text-text-secondary">
                                        Brand Photo Placeholder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Content */}
                    <div>
                        <StaggerItem>
                            <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                                Cerita Kami
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <h2 className="mt-3 font-heading text-[26px] font-semibold leading-tight text-urbane-bronze md:text-[34px] lg:text-[40px]">
                                Akeh Guna —<br />
                                Banyak Manfaat
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                                Berawal dari kecintaan terhadap kekayaan alam Indonesia, Akeguno
                                Naturals hadir untuk menghadirkan produk yang tidak hanya bermanfaat
                                bagi penggunanya, tetapi juga menghormati alam sebagai sumber
                                kehidupan.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
                                Nama &quot;Akeguno&quot; berasal dari bahasa Jawa yang berarti
                                &quot;banyak guna&quot; — sebuah filosofi yang menjadi pondasi
                                setiap produk yang kami buat.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <Link
                                href="/about"
                                className="mt-8 inline-flex h-12 items-center rounded-[4px] bg-terracotta-earth px-8 font-body text-sm font-semibold text-white transition-all hover:bg-terracotta-hover hover:scale-[1.02] active:scale-95"
                            >
                                Baca Cerita Kami
                            </Link>
                        </StaggerItem>
                    </div>
                </div>
            </StaggerContainer>
        </section>
    );
}
