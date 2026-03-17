"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
    settings?: {
        tagline?: string;
        waNumber?: string;
        email?: string;
        instagramUrl?: string;
        tiktokUrl?: string;
        shopeeUrl?: string;
    };
}

const footerNav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Catatan Alam", href: "/catatan-alam" },
    { label: "Hasil Alam", href: "/hasil-alam" },
];

export function Footer({ settings }: FooterProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const waNumber = settings?.waNumber || process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890";
    const email = settings?.email || "hello@akegunonaturals.com";
    const tagline = settings?.tagline || "Honors nature's gifts through authenticity and shared purpose.";

    return (
        <footer id="contact" className="bg-urbane-bronze text-authentic-linen/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="font-heading text-2xl font-semibold text-white">
                            Akeguno Naturals
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-authentic-linen/60">
                            {tagline}
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-authentic-linen">
                            Navigasi
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {footerNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            if (item.href === "/" && isHome) {
                                                e.preventDefault();
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }
                                        }}
                                        className="font-body text-sm text-authentic-linen/60 transition-colors hover:text-terracotta-earth"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-authentic-linen">
                            Hubungi Kami
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Akeguno Naturals, saya ingin bertanya...")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-body text-sm text-authentic-linen/60 transition-colors hover:text-eucalyptus-calm"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${email}`}
                                    className="inline-flex items-center gap-2 font-body text-sm text-authentic-linen/60 transition-colors hover:text-eucalyptus-calm"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 7l-10 6L2 7" />
                                    </svg>
                                    {email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-authentic-linen">
                            Ikuti Kami
                        </h4>
                        <div className="mt-4 flex gap-4">
                            {settings?.instagramUrl && (
                                <a
                                    href={settings.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white"
                                    aria-label="Instagram"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            )}
                            {settings?.tiktokUrl && (
                                <a
                                    href={settings.tiktokUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white"
                                    aria-label="TikTok"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46v-7.15a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-3.77-1.82 4.83 4.83 0 003.77-2.75z" />
                                    </svg>
                                </a>
                            )}
                            {settings?.shopeeUrl && (
                                <a
                                    href={settings.shopeeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white"
                                    aria-label="Shopee"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a3 3 0 013 3h-2a1 1 0 00-2 0H9a3 3 0 013-3zm6 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6z" />
                                    </svg>
                                </a>
                            )}
                            {/* Fallback placeholder social links */}
                            {!settings?.instagramUrl && !settings?.tiktokUrl && !settings?.shopeeUrl && (
                                <>
                                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white" aria-label="Instagram">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                    </a>
                                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white" aria-label="TikTok">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46v-7.15a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-3.77-1.82 4.83 4.83 0 003.77-2.75z" /></svg>
                                    </a>
                                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-authentic-linen/10 text-authentic-linen/60 transition-colors hover:bg-terracotta-earth hover:text-white" aria-label="Shopee">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a3 3 0 013 3h-2a1 1 0 00-2 0H9a3 3 0 013-3zm6 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6z" /></svg>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-authentic-linen/10 pt-6 text-center">
                    <p className="font-body text-xs text-authentic-linen/40">
                        © {new Date().getFullYear()} Akeguno Naturals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
