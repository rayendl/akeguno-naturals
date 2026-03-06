import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "images",
            title: "Additional Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "string",
            description: 'e.g., "Rp 85.000" atau "Rp 75.000 - Rp 150.000"',
        }),
        defineField({
            name: "description",
            title: "Short Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "benefits",
            title: "Benefits",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "ingredients",
            title: "Ingredients",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "size",
            title: "Size / Variant",
            type: "string",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "productCategory" }],
        }),
        defineField({
            name: "shopeeUrl",
            title: "Shopee URL",
            type: "url",
        }),
        defineField({
            name: "tiktokUrl",
            title: "TikTok Shop URL",
            type: "url",
        }),
        defineField({
            name: "badge",
            title: "Badge",
            type: "string",
            options: {
                list: [
                    { title: "Bestseller", value: "Bestseller" },
                    { title: "New", value: "New" },
                    { title: "Limited", value: "Limited" },
                ],
            },
        }),
        defineField({
            name: "isActive",
            title: "Active",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
        }),
        defineField({
            name: "featured",
            title: "Featured on Home",
            type: "boolean",
            initialValue: false,
        }),
    ],
    orderings: [
        {
            title: "Display Order",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "price",
            media: "image",
        },
    },
});
