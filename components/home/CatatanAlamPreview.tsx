import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { formatDate } from "@/lib/utils";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

interface Article {
    _id: string;
    title: string;
    slug: string;
    coverImage?: { asset: { _ref: string }; alt?: string };
    excerpt?: string;
    publishedAt?: string;
    readTime?: number;
    category?: { name: string };
}

interface CatatanAlamPreviewProps {
    articles: Article[];
}

export function CatatanAlamPreview({ articles }: CatatanAlamPreviewProps) {
    return (
        <section className="section-padding bg-white">
            <StaggerContainer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerItem>
                    <h2 className="text-center font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
                        Catatan Alam
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="mx-auto mt-3 max-w-lg text-center font-body text-sm text-text-secondary lg:text-base">
                        Cerita, tips, dan edukasi seputar kehidupan alami dan wellness.
                    </p>
                </StaggerItem>

                {articles.length > 0 ? (
                    <>
                        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {articles.map((article) => (
                                <StaggerItem key={article._id}>
                                <Link
                                    href={`/catatan-alam/${article.slug}`}
                                    className="group overflow-hidden rounded-xl bg-authentic-linen transition-shadow hover:shadow-lg"
                                >
                                    {/* Cover image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-cinnamon/5">
                                        {article.coverImage?.asset ? (
                                            <Image
                                                src={urlFor(article.coverImage).width(600).height(375).url()}
                                                alt={article.coverImage.alt || article.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <span className="text-4xl">📖</span>
                                            </div>
                                        )}
                                        {/* Category tag */}
                                        {article.category && (
                                            <span className="absolute left-3 top-3 rounded-full bg-eucalyptus-calm/90 px-3 py-1 font-body text-xs font-medium text-white">
                                                {article.category.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="font-heading text-lg font-medium leading-snug text-urbane-bronze transition-colors group-hover:text-terracotta-earth md:text-xl">
                                            {article.title}
                                        </h3>
                                        {article.excerpt && (
                                            <p className="mt-2 line-clamp-2 font-body text-sm text-text-secondary">
                                                {article.excerpt}
                                            </p>
                                        )}
                                        <div className="mt-3 flex items-center gap-3 font-body text-xs text-text-secondary">
                                            {article.publishedAt && (
                                                <span>{formatDate(article.publishedAt)}</span>
                                            )}
                                            {article.readTime && (
                                                <>
                                                    <span>·</span>
                                                    <span>{article.readTime} min read</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                </StaggerItem>
                            ))}
                        </div>

                        <StaggerItem>
                            <div className="mt-8 text-center">
                                <Link
                                    href="/catatan-alam"
                                    className="inline-flex h-11 items-center rounded-[4px] border border-terracotta-earth px-6 font-body text-sm font-semibold text-terracotta-earth transition-colors hover:bg-terracotta-earth hover:text-white"
                                >
                                    Baca Selengkapnya →
                                </Link>
                            </div>
                        </StaggerItem>
                    </>
                ) : (
                    <StaggerItem>
                        <div className="mt-12 flex flex-col items-center justify-center text-center py-12 rounded-xl bg-authentic-linen/40 border border-morning-dew/30">
                            <span className="text-5xl mb-4">🌿</span>
                            <h3 className="font-heading text-xl font-medium text-urbane-bronze">
                                Segera Hadir
                            </h3>
                            <p className="mt-2 font-body text-sm text-text-secondary max-w-sm">
                                Kami sedang menyiapkan konten terbaik untuk Anda. Pantau terus untuk cerita dan tips seputar alam dari Akeguno Naturals.
                            </p>
                        </div>
                    </StaggerItem>
                )}
            </StaggerContainer>
        </section>
    );
}
