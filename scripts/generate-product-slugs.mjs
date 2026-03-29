/**
 * One-time migration script: generates slugs for all products in Sanity
 * that don't have a slug yet.
 *
 * Usage: node scripts/generate-product-slugs.mjs
 *
 * Requires: SANITY_API_TOKEN in .env.local (write token)
 */

import { createClient } from "next-sanity";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Manually parse .env.local
try {
    const envPath = resolve(__dirname, "../.env.local");
    const envContent = readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = val;
    }
} catch {
    // .env.local not found — rely on existing process.env
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
    console.error("❌ Missing env vars. Make sure these are set in .env.local:");
    console.error("   NEXT_PUBLIC_SANITY_PROJECT_ID");
    console.error("   NEXT_PUBLIC_SANITY_DATASET");
    console.error("   SANITY_API_TOKEN  (needs write permission)");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    token,
    useCdn: false,
});

/** Convert a product name to a URL-safe slug */
function toSlug(name) {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove diacritics
        .replace(/[^a-z0-9\s-]/g, "")   // keep only alphanum, space, hyphen
        .trim()
        .replace(/\s+/g, "-")            // spaces → hyphens
        .replace(/-+/g, "-");            // collapse multiple hyphens
}

async function run() {
    console.log("🔍 Fetching products without a slug...");
    const products = await client.fetch(
        `*[_type == "product" && !defined(slug.current)]{ _id, name }`
    );

    if (products.length === 0) {
        console.log("✅ All products already have a slug. Nothing to do!");
        return;
    }

    console.log(`📝 Found ${products.length} product(s) to update:\n`);

    // Collect used slugs to handle duplicates
    const usedSlugs = new Set();

    // Fetch already-used slugs from Sanity
    const existing = await client.fetch(
        `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`
    );
    existing.forEach((p) => usedSlugs.add(p.slug));

    for (const product of products) {
        let slug = toSlug(product.name);

        // Handle duplicates by appending -2, -3, etc.
        let candidate = slug;
        let counter = 2;
        while (usedSlugs.has(candidate)) {
            candidate = `${slug}-${counter++}`;
        }
        usedSlugs.add(candidate);

        console.log(`  • "${product.name}" → "${candidate}"`);

        await client
            .patch(product._id)
            .set({ slug: { _type: "slug", current: candidate } })
            .commit();
    }

    console.log(`\n✅ Done! ${products.length} product(s) updated.`);
}

run().catch((err) => {
    console.error("❌ Error:", err.message);
    process.exit(1);
});
