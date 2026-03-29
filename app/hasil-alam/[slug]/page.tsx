import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { productBySlugQuery, allProductSlugsQuery } from "@/sanity/queries";
import { ProductDetailClient } from "@/components/hasil-alam/ProductDetailClient";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = await client.fetch(productBySlugQuery, { slug });

    if (!product) return { title: "Produk Tidak Ditemukan" };

    return {
        title: `${product.name} | Hasil Alam – Akeguno Naturals`,
        description:
            product.description
                ? product.description.slice(0, 160)
                : `Beli ${product.name} dari Akeguno Naturals. Produk alami berkualitas tinggi.`,
        openGraph: {
            title: `${product.name} | Akeguno Naturals`,
            description: product.description?.slice(0, 160),
        },
    };
}

export async function generateStaticParams() {
    const products = await client.fetch(allProductSlugsQuery);
    return products.map((p: { slug: string }) => ({ slug: p.slug }));
}

export const revalidate = 60;

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = await client.fetch(productBySlugQuery, { slug });

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 lg:pt-28">
            <ProductDetailClient product={product} />
        </main>
    );
}
