"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";

import { article } from "./schemas/article";
import { category } from "./schemas/category";
import { product } from "./schemas/product";
import { productCategory } from "./schemas/productCategory";
import { faqItem } from "./schemas/faqItem";
import { siteSettings } from "./schemas/siteSettings";
import { testimoni } from "./schemas/testimoni";

export default defineConfig({
    name: "akeguno-naturals",
    title: "Akeguno Naturals CMS",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: "/studio",
    plugins: [
        structureTool(),
        visionTool(),
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: "/api/draft-mode/enable",
                },
            },
        }),
    ],
    schema: {
        types: [article, category, product, productCategory, faqItem, siteSettings, testimoni],
    },
});
