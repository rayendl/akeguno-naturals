import { defineField, defineType } from "sanity";

export const article = defineType({
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
            description: "Short description for SEO and cards (max 160 chars)",
            validation: (rule) => rule.max(160),
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alt Text",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }),
        defineField({
            name: "readTime",
            title: "Read Time (minutes)",
            type: "number",
        }),
        defineField({
            name: "featured",
            title: "Featured on Home",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                { name: "metaTitle", title: "Meta Title", type: "string" },
                { name: "metaDescription", title: "Meta Description", type: "text", rows: 3 },
            ],
        }),
    ],
    orderings: [
        {
            title: "Published Date (New)",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "publishedAt",
            media: "coverImage",
        },
    },
});
