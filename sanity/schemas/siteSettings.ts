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
            description: "Format: 6281313963935 (tanpa + atau spasi)",
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
        defineField({
            name: "lazadaUrl",
            title: "Lazada URL",
            type: "url",
        }),
        defineField({
            name: "tokopediaUrl",
            title: "Tokopedia URL",
            type: "url",
        }),
        defineField({
            name: "address",
            title: "Address / Alamat",
            type: "text",
            rows: 3,
        }),
    ],
    preview: {
        prepare() {
            return { title: "Site Settings" };
        },
    },
});
