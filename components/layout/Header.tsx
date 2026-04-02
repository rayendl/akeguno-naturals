"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MobileMenu } from "./MobileMenu";

const navItems = [
    { label: "About", href: "/about" },
    { label: "Catatan Alam", href: "/catatan-alam" },
    { label: "Hasil Alam", href: "/hasil-alam" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const isHome = pathname === "/";
    const isTransparentAndHome = !isScrolled && isHome;

    return (
        <header 
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                isScrolled 
                    ? "bg-authentic-linen shadow-sm border-b border-morning-dew/30 lg:bg-authentic-linen/90 lg:backdrop-blur-md" 
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-2"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                    >
                        <Image 
                            src="/logo-akeguno.png" 
                            alt="Akeguno Naturals Logo" 
                            width={40} 
                            height={40} 
                            className={`object-contain transition-all duration-300 ${isTransparentAndHome ? "brightness-0 invert" : ""}`}
                        />
                        {/* Mobile: text only (logomark placeholder) */}
                        <span className={`font-heading text-xl font-semibold lg:text-2xl transition-colors ${
                            isTransparentAndHome ? "text-white" : "text-urbane-bronze"
                        }`}>
                            Akeguno
                        </span>
                        <span className={`hidden font-heading text-xl font-normal sm:inline lg:text-2xl transition-colors ${
                            isTransparentAndHome ? "text-white/80" : "text-text-secondary"
                        }`}>
                            Naturals
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:items-center lg:gap-8" aria-label="Main navigation">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const isAnchor = item.href.startsWith("/#");

                            const baseTextColor = isTransparentAndHome ? "text-white/90" : "text-text-secondary";

                            return isAnchor ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`relative py-1 font-body text-sm font-medium transition-colors hover:text-terracotta-earth after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta-earth after:transition-transform after:duration-300 hover:after:scale-x-100 ${baseTextColor}`}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative py-1 font-body text-sm font-medium transition-colors hover:text-terracotta-earth after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta-earth after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive
                                            ? "text-terracotta-earth after:scale-x-100"
                                            : baseTextColor
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
                        className={`flex h-10 w-10 items-center justify-center rounded-md bg-transparent lg:hidden transition-colors ${
                            isTransparentAndHome ? "text-white" : "text-urbane-bronze"
                        }`}
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
