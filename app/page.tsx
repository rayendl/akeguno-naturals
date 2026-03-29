import { client } from "@/sanity/client";
import { featuredProductsQuery, featuredArticlesQuery, activeFaqItemsQuery, activeTestimoniQuery } from "@/sanity/queries";

import { Hero } from "@/components/home/Hero";
import { BrandPromise } from "@/components/home/BrandPromise";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { CatatanAlamPreview } from "@/components/home/CatatanAlamPreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqSection } from "@/components/home/FaqSection";

async function getData() {
  try {
    const [products, articles, faqItems, testimoni] = await Promise.all([
      client.fetch(featuredProductsQuery),
      client.fetch(featuredArticlesQuery),
      client.fetch(activeFaqItemsQuery),
      client.fetch(activeTestimoniQuery),
    ]);
    return { products: products || [], articles: articles || [], faqItems: faqItems || [], testimoni: testimoni || [] };
  } catch {
    return { products: [], articles: [], faqItems: [], testimoni: [] };
  }
}

export default async function HomePage() {
  const { products, articles, faqItems, testimoni } = await getData();

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <TestimonialSection testimoni={testimoni} />
      <StoryTeaser />
      <BrandPromise />
      <CatatanAlamPreview articles={articles} />
      <FaqSection items={faqItems} />
    </>
  );
}
