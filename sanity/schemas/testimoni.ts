import { defineField, defineType } from "sanity";

export const testimoni = defineType({
    name: "testimoni",
    title: "Testimoni",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Customer Name / Username",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "product",
            title: "Product Bought",
            type: "string",
        }),
        defineField({
            name: "message",
            title: "Message",
            type: "text",
            validation: (rule) => rule.required(),
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
            subtitle: "product",
        },
    },
});
