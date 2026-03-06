"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { formatDate } from "@/lib/utils";

interface Article {
    _id: string;
    title: string;
    slug: string;
    coverImage?: { asset: { _ref: string }; alt?: string };
    excerpt?: string;
    publishedAt?: string;
    readTime?: number;
    category?: { name: string; slug: string };
}

interface ArticleCategory {
    _id: string;
    name: string;
    slug: string;
}

interface CatatanAlamClientProps {
    articles: Article[];
    categories: ArticleCategory[];
}

export function CatatanAlamClient({ articles, categories }: CatatanAlamClientProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredArticles = activeCategory
        ? articles.filter((a) => a.category?.slug === activeCategory)
        : articles;

    return (
        <>
            {/* Category filter chips */}
            {categories.length > 0 && (
                <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-4">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`flex-shrink-0 rounded-full px-5 py-2 font-body text-sm font-medium transition-colors ${!activeCategory
                            ? "bg-eucalyptus-calm text-white"
                            : "bg-white text-text-secondary hover:bg-cinnamon/10"
                            }`}
                    >
                        Semua Artikel
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat._id}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`flex-shrink-0 rounded-full px-5 py-2 font-body text-sm font-medium transition-colors ${activeCategory === cat.slug
                                ? "bg-eucalyptus-calm text-white"
                                : "bg-white text-text-secondary hover:bg-cinnamon/10"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Article Grid */}
            {filteredArticles.length > 0 ? (
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {filteredArticles.map((article) => (
                        <Link
                            key={article._id}
                            href={`/catatan-alam/${article.slug}`}
                            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
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
                                    <p className="mt-2 line-clamp-3 font-body text-sm text-text-secondary">
                                        {article.excerpt}
                                    </p>
                                )}
                                <div className="mt-4 flex items-center gap-3 font-body text-xs text-text-secondary">
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
                    ))}
                </div>
            ) : (
                <div className="mt-16 text-center">
                    <p className="font-body text-lg text-text-secondary">Belum ada artikel di kategori ini.</p>
                </div>
            )}
        </>
    );
}
