"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Catatan Alam", href: "/catatan-alam" },
    { label: "Hasil Alam", href: "/hasil-alam" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-authentic-linen/90 backdrop-blur-md border-b border-morning-dew/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* Mobile: text only (logomark placeholder) */}
                        <span className="font-heading text-xl font-semibold text-urbane-bronze lg:text-2xl">
                            Akeguno
                        </span>
                        <span className="hidden font-heading text-lg font-normal text-text-secondary sm:inline">
                            Naturals
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:items-center lg:gap-8" aria-label="Main navigation">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const isAnchor = item.href.startsWith("/#");

                            return isAnchor ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="font-body text-sm font-medium text-text-secondary transition-colors hover:text-terracotta-earth"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-body text-sm font-medium transition-colors hover:text-terracotta-earth ${isActive
                                            ? "text-terracotta-earth"
                                            : "text-text-secondary"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
                        aria-label="Open menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                navItems={navItems}
                pathname={pathname}
            />
        </header>
    );
}
