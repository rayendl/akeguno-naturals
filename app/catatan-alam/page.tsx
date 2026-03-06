import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { allArticlesQuery, articleCategoriesQuery } from "@/sanity/queries";
import { CatatanAlamClient } from "@/components/catatan-alam/CatatanAlamClient";

export const metadata: Metadata = {
    title: "Catatan Alam",
    description:
        "Cerita, tips, dan edukasi seputar kehidupan alami, wellness, dan bahan-bahan natural dari Akeguno Naturals.",
};

export const revalidate = 60;

export default async function CatatanAlamPage() {
    const articles = await client.fetch(allArticlesQuery);
    const categories = await client.fetch(articleCategoriesQuery);

    return (
        <div className="section-padding">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                        Blog
                    </p>
                    <h1 className="mt-3 font-heading text-[32px] font-semibold text-urbane-bronze md:text-[44px] lg:text-[56px]">
                        Catatan Alam
                    </h1>
                    <p className="mx-auto mt-3 max-w-lg font-body text-base text-text-secondary">
                        Cerita, tips, dan edukasi seputar kehidupan alami dan wellness.
                    </p>
                </div>

                <CatatanAlamClient articles={articles || []} categories={categories || []} />
            </div>
        </div>
    );
}
