import { groq } from "next-sanity";

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  tagline,
  waNumber,
  email,
  instagramUrl,
  tiktokUrl,
  shopeeUrl,
  lazadaUrl,
  tokopediaUrl,
  address
}`;

// Testimonials
export const activeTestimoniQuery = groq`*[_type == "testimoni" && isActive == true] | order(order asc) {
  _id,
  name,
  product,
  message
}`;


// Products
export const featuredProductsQuery = groq`*[_type == "product" && isActive == true && featured == true] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  image,
  price,
  badge,
  shopeeUrl,
  tiktokUrl,
  lazadaUrl,
  tokopediaUrl,
  description,
  size,
  benefits,
  ingredients
}`;

export const allProductsQuery = groq`*[_type == "product" && isActive == true] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  image,
  images,
  price,
  description,
  benefits,
  ingredients,
  size,
  badge,
  shopeeUrl,
  tiktokUrl,
  lazadaUrl,
  tokopediaUrl,
  "category": category->{ name, "slug": slug.current }
}`;

export const productCategoriesQuery = groq`*[_type == "productCategory"] | order(name asc) {
  _id,
  name,
  "slug": slug.current
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug && isActive == true][0] {
  _id,
  name,
  "slug": slug.current,
  image,
  images,
  price,
  description,
  benefits,
  ingredients,
  size,
  badge,
  shopeeUrl,
  tiktokUrl,
  lazadaUrl,
  tokopediaUrl,
  "category": category->{ name, "slug": slug.current }
}`;

export const allProductSlugsQuery = groq`*[_type == "product" && isActive == true && defined(slug.current)] {
  "slug": slug.current
}`;


// FAQ
export const activeFaqItemsQuery = groq`*[_type == "faqItem" && isActive == true] | order(order asc) {
  _id,
  question,
  answer,
  category
}`;

// Articles
export const featuredArticlesQuery = groq`*[_type == "article" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  excerpt,
  publishedAt,
  readTime,
  "category": category->{ name, "slug": slug.current }
}`;

export const allArticlesQuery = groq`*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  excerpt,
  publishedAt,
  readTime,
  "category": category->{ name, "slug": slug.current }
}`;

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  coverImage,
  excerpt,
  body,
  author,
  publishedAt,
  readTime,
  "category": category->{ name, "slug": slug.current },
  seo
}`;

export const articleCategoriesQuery = groq`*[_type == "category"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  description
}`;
