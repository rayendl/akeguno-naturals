import Link from "next/link";
import Image from "next/image";
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
                            <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="https://res.cloudinary.com/dex0zf5nl/image/upload/v1773918244/Tim_Akeguno_kfirqz.png"
                                    alt="Tim Akeguno Naturals"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
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
                                Madu Murni, Tanpa Adulterasi
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-text-secondary lg:text-lg">
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
