import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

const pillars = [
    {
        icon: "🌿",
        title: "Alam & Autentisitas",
        description:
            "Setiap produk kami berasal dari bahan alami pilihan yang diolah dengan penuh ketulusan dan transparansi.",
    },
    {
        icon: "🤝",
        title: "Tujuan Bersama",
        description:
            "Kami percaya bahwa kebermanfaatan harus dirasakan bersama — dari alam, untuk semua.",
    },
    {
        icon: "🌏",
        title: "Ekosistem Holistik",
        description:
            "Membangun ekosistem yang menyeimbangkan kebutuhan manusia dengan kelestarian alam.",
    },
];

export function BrandPromise() {
    return (
        <section className="section-padding bg-eucalyptus-calm/5">
            <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerItem>
                    <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Akeh Guna — Banyak Manfaat
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                        Tiga pilar yang menjadi pondasi setiap langkah Akeguno Naturals.
                    </p>
                </StaggerItem>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-14 lg:gap-12">
                    {pillars.map((pillar) => (
                        <StaggerItem
                            key={pillar.title}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-eucalyptus-calm/10 text-3xl transition-transform hover:scale-110">
                                {pillar.icon}
                            </div>
                            <h3 className="mt-5 font-heading text-[20px] font-medium text-urbane-bronze md:text-[24px]">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary lg:text-base">
                                {pillar.description}
                            </p>
                        </StaggerItem>
                    ))}
                </div>
            </StaggerContainer>
        </section>
    );
}
