import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: false, // Set false to ensure we get fresh data
    // Temporarily disable Next.js caching to ensure fresh data shows
    fetch: { cache: "no-store" },
    stega: {
        // Hanya nyalakan stega kalau mau pakai visual editing (agar tidak muncul "Open in Studio" saat mode biasa)
        enabled: false,
        studioUrl: "/studio",
    },
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}
