import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { allArticlesQuery, articleCategoriesQuery } from "@/sanity/queries";
import { CatatanAlamClient } from "@/components/catatan-alam/CatatanAlamClient";
import { StaggerContainer } from "@/components/ui/animations/StaggerContainer";
import { StaggerItem } from "@/components/ui/animations/StaggerItem";

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
        <>
            <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-14 bg-eucalyptus-calm/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="text-center">
                        <StaggerItem>
                            <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-eucalyptus-calm">
                                Blog
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <h1 className="mt-3 font-heading text-[32px] font-semibold text-urbane-bronze md:text-[44px] lg:text-[56px]">
                                Catatan Alam
                            </h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="mx-auto mt-3 max-w-lg font-body text-base text-text-secondary">
                                Cerita, tips, dan edukasi seputar kehidupan alami dan wellness.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <div className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <CatatanAlamClient articles={articles || []} categories={categories || []} />
                </div>
            </div>
        </>
    );
}

