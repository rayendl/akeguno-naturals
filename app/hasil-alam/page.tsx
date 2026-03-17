import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { allProductsQuery, productCategoriesQuery } from "@/sanity/queries";
import { HasilAlamClient } from "@/components/hasil-alam/HasilAlamClient";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Hasil Alam",
    description:
        "Jelajahi koleksi produk alami dari Akeguno Naturals. Essential oils, body care, dan home wellness — langsung dari alam untuk Anda.",
};

async function getData() {
    try {
        const [products, categories] = await Promise.all([
            client.fetch(allProductsQuery),
            client.fetch(productCategoriesQuery),
        ]);
        return { products: products || [], categories: categories || [] };
    } catch {
        return { products: [], categories: [] };
    }
}

export default async function HasilAlamPage() {
    const { products, categories } = await getData();

    return (
        <div className="section-padding">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="text-center">
                    <StaggerItem>
                        <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-terracotta-earth">
                            Koleksi Kami
                        </p>
                    </StaggerItem>
                    <StaggerItem>
                        <h1 className="mt-3 font-heading text-[32px] font-semibold text-urbane-bronze md:text-[44px] lg:text-[56px]">
                            Hasil Alam
                        </h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mx-auto mt-3 max-w-lg font-body text-base text-text-secondary">
                            Produk alami berkualitas tinggi, langsung dari alam untuk Anda.
                            Klik produk untuk melihat detail, lalu beli di marketplace terpercaya.
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                <Suspense fallback={<div className="mt-8 text-center text-urbane-bronze">Memuat produk...</div>}>
                    <HasilAlamClient products={products} categories={categories} />
                </Suspense>
            </div>
        </div>
    );
}
