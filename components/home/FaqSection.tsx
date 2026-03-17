"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

interface FaqItem {
    _id: string;
    question: string;
    answer: PortableTextBlock[];
    category: string;
}

interface FaqSectionProps {
    items: FaqItem[];
}

function AccordionItem({
    question,
    answer,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: PortableTextBlock[];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-morning-dew/30">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-body text-base font-medium text-urbane-bronze pr-4 lg:text-lg">
                    {question}
                </span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 text-terracotta-earth transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 font-body text-sm leading-relaxed text-text-secondary lg:text-base prose-p:mb-2">
                            <PortableText value={answer} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FaqSection({ items }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const displayItems = items.length > 0 ? items : sampleFaqItems;

    // Group by category
    const grouped = displayItems.reduce<Record<string, typeof displayItems>>(
        (acc, item) => {
            const cat = item.category || "Lainnya";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
        },
        {}
    );

    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890";

    return (
        <section id="faq" className="section-padding bg-eucalyptus-calm/5">
            <StaggerContainer className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <StaggerItem>
                    <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Pertanyaan Umum
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                        Jawaban untuk pertanyaan yang sering ditanyakan.
                    </p>
                </StaggerItem>

                <div className="mt-10 space-y-8">
                    {Object.entries(grouped).map(([categoryName, categoryItems]) => (
                        <StaggerItem key={categoryName}>
                            <div>
                                <h3 className="mb-2 font-heading text-lg font-medium text-eucalyptus-calm">
                                    {categoryName}
                                </h3>
                                <div>
                                    {categoryItems.map((item, index) => (
                                        <AccordionItem
                                            key={item._id}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openIndex === displayItems.indexOf(item)}
                                            onToggle={() =>
                                                setOpenIndex(
                                                    openIndex === displayItems.indexOf(item) ? null : displayItems.indexOf(item)
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </div>

                {/* CTA */}
                <StaggerItem>
                    <div className="mt-10 text-center">
                        <p className="font-body text-sm text-text-secondary">
                            Masih ada pertanyaan?
                        </p>
                        <a
                            href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Akeguno Naturals, saya ingin bertanya...")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex h-11 items-center gap-2 rounded-[4px] bg-[#25D366] px-6 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat kami di WhatsApp
                        </a>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}

// Sample FAQ items for when Sanity has no data yet
const sampleFaqItems: FaqItem[] = [
    {
        _id: "f1",
        question: "Dari mana bahan-bahan Akeguno Naturals berasal?",
        answer: [{ _type: "block", _key: "a", children: [{ _type: "span", _key: "b", text: "Semua bahan kami bersumber langsung dari petani lokal Indonesia — terutama dari Jawa Tengah, Jawa Timur, dan wilayah penghasil rempah berkualitas. Kami membangun hubungan langsung dengan petani tanpa perantara berlebihan." }], markDefs: [], style: "normal" }] as unknown as PortableTextBlock[],
        category: "Tentang Produk",
    },
    {
        _id: "f2",
        question: "Apakah produk Akeguno bebas bahan kimia tambahan?",
        answer: [{ _type: "block", _key: "a", children: [{ _type: "span", _key: "b", text: "Ya. Kami tidak menambahkan pengawet sintetis, pewarna buatan, atau perisa artifisial. Komposisi yang tercantum adalah yang sebenarnya ada di dalam kemasan." }], markDefs: [], style: "normal" }] as unknown as PortableTextBlock[],
        category: "Tentang Produk",
    },
    {
        _id: "f3",
        question: "Bagaimana cara memesan produk Akeguno Naturals?",
        answer: [{ _type: "block", _key: "a", children: [{ _type: "span", _key: "b", text: "Pembelian bisa dilakukan melalui toko resmi kami di Shopee dan TikTok Shop. Klik tombol 'Beli' di halaman produk, atau hubungi kami langsung melalui WhatsApp." }], markDefs: [], style: "normal" }] as unknown as PortableTextBlock[],
        category: "Pembelian",
    },
    {
        _id: "f4",
        question: "Berapa lama pengiriman ke daerah saya?",
        answer: [{ _type: "block", _key: "a", children: [{ _type: "span", _key: "b", text: "Untuk Pulau Jawa umumnya 1–3 hari kerja, luar Pulau Jawa 3–7 hari kerja. Estimasi lebih akurat tersedia di halaman checkout marketplace." }], markDefs: [], style: "normal" }] as unknown as PortableTextBlock[],
        category: "Pembelian",
    },
    {
        _id: "f5",
        question: "Bagaimana cara penyimpanan produk yang benar?",
        answer: [{ _type: "block", _key: "a", children: [{ _type: "span", _key: "b", text: "Simpan di tempat sejuk, kering, dan terhindar dari sinar matahari langsung. Produk simplisia dan bubuk sebaiknya disimpan dalam wadah tertutup rapat setelah dibuka." }], markDefs: [], style: "normal" }] as unknown as PortableTextBlock[],
        category: "Tentang Produk",
    },
];

