import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/sanity/client";
import { articleBySlugQuery } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const article = await client.fetch(articleBySlugQuery, { slug: resolvedParams.slug });

    if (!article) return { title: "Artikel Tidak Ditemukan" };

    return {
        title: article.seo?.metaTitle || `${article.title} | Akeguno Naturals`,
        description: article.seo?.metaDescription || article.excerpt,
    };
}

export const revalidate = 60;

export default async function ArticleDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const article = await client.fetch(articleBySlugQuery, { slug: resolvedParams.slug });

    if (!article) {
        notFound();
    }

    return (
        <article className="pb-16 pt-32 sm:pt-40">
            {/* Header / Hero */}
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                {article.category && (
                    <span className="inline-block rounded-full bg-eucalyptus-calm/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-eucalyptus-calm">
                        {article.category.name}
                    </span>
                )}
                <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-urbane-bronze sm:text-4xl md:text-5xl lg:text-5xl">
                    {article.title}
                </h1>

                <div className="mt-6 flex items-center justify-center gap-4 border-b border-morning-dew/30 pb-8 font-body text-sm text-text-secondary">
                    {article.author && <span>Oleh {article.author}</span>}
                    {article.author && <span>·</span>}
                    <span>{formatDate(article.publishedAt)}</span>
                    {article.readTime && <span className="hidden sm:inline">·</span>}
                    {article.readTime && <span>{article.readTime} min read</span>}
                </div>
            </div>

            {/* Cover Image */}
            <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cinnamon/5">
                    {article.coverImage?.asset ? (
                        <Image
                            src={urlFor(article.coverImage).width(1200).height(675).url()}
                            alt={article.coverImage.alt || article.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <span className="text-6xl text-text-secondary/20">📖</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
                {article.excerpt && (
                    <p className="mb-10 text-xl italic leading-relaxed text-urbane-bronze">
                        {article.excerpt}
                    </p>
                )}

                <div className="prose prose-lg prose-headings:font-heading prose-headings:text-urbane-bronze prose-p:font-body prose-p:text-text-secondary prose-a:text-terracotta-earth hover:prose-a:text-cinnamon w-full max-w-none">
                    <PortableText value={article.body || []} />
                </div>

                <div className="mt-16 border-t border-morning-dew/30 pt-8 text-center">
                    <Link
                        href="/catatan-alam"
                        className="inline-flex h-11 items-center justify-center rounded-[4px] border border-urbane-bronze px-6 font-body text-sm font-semibold text-urbane-bronze transition-colors hover:bg-urbane-bronze hover:text-white"
                    >
                        ← Kembali ke Catatan Alam
                    </Link>
                </div>
            </div>
        </article>
    );
}
