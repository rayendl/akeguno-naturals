import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            initialValue: "Honors nature's gifts through authenticity and shared purpose.",
        }),
        defineField({
            name: "waNumber",
            title: "WhatsApp Number",
            type: "string",
            description: "Format: 6281234567890 (tanpa + atau spasi)",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "instagramUrl",
            title: "Instagram URL",
            type: "url",
        }),
        defineField({
            name: "tiktokUrl",
            title: "TikTok URL",
            type: "url",
        }),
        defineField({
            name: "shopeeUrl",
            title: "Shopee URL",
            type: "url",
        }),
    ],
    preview: {
        prepare() {
            return { title: "Site Settings" };
        },
    },
});
