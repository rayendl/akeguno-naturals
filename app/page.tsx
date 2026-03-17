import { client } from "@/sanity/client";
import { featuredProductsQuery, featuredArticlesQuery, activeFaqItemsQuery } from "@/sanity/queries";

import { Hero } from "@/components/home/Hero";
import { BrandPromise } from "@/components/home/BrandPromise";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { CatatanAlamPreview } from "@/components/home/CatatanAlamPreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqSection } from "@/components/home/FaqSection";

async function getData() {
  try {
    const [products, articles, faqItems] = await Promise.all([
      client.fetch(featuredProductsQuery),
      client.fetch(featuredArticlesQuery),
      client.fetch(activeFaqItemsQuery),
    ]);
    return { products: products || [], articles: articles || [], faqItems: faqItems || [] };
  } catch {
    return { products: [], articles: [], faqItems: [] };
  }
}

export default async function HomePage() {
  const { products, articles, faqItems } = await getData();

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <TestimonialSection />
      <StoryTeaser />
      <BrandPromise />
      <CatatanAlamPreview articles={articles} />
      <FaqSection items={faqItems} />
    </>
  );
}
