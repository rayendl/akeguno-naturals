import { defineField, defineType } from "sanity";

export const faqItem = defineType({
    name: "faqItem",
    title: "FAQ Item",
    type: "document",
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "array",
            of: [{ type: "block" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Produk", value: "Produk" },
                    { title: "Pembelian", value: "Pembelian" },
                    { title: "Lainnya", value: "Lainnya" },
                ],
            },
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
        }),
        defineField({
            name: "isActive",
            title: "Active",
            type: "boolean",
            initialValue: true,
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
            title: "question",
            subtitle: "category",
        },
    },
});
