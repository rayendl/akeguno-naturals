"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { article } from "./schemas/article";
import { category } from "./schemas/category";
import { product } from "./schemas/product";
import { productCategory } from "./schemas/productCategory";
import { faqItem } from "./schemas/faqItem";
import { siteSettings } from "./schemas/siteSettings";

export default defineConfig({
    name: "akeguno-naturals",
    title: "Akeguno Naturals CMS",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: "/studio",
    plugins: [structureTool(), visionTool()],
    schema: {
        types: [article, category, product, productCategory, faqItem, siteSettings],
    },
});
