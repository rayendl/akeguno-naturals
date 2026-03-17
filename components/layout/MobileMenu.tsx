"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: { label: string; href: string }[];
    pathname: string;
}

export function MobileMenu({ isOpen, onClose, navItems, pathname }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-urbane-bronze/40 backdrop-blur-sm lg:hidden"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 z-50 h-full w-72 bg-authentic-linen shadow-2xl lg:hidden"
                    >
                        <div className="flex h-16 items-center justify-between px-4">
                            <span className="font-heading text-lg font-semibold text-urbane-bronze">
                                Menu
                            </span>
                            <button
                                onClick={onClose}
                                className="flex h-10 w-10 items-center justify-center rounded-md bg-transparent"
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile navigation">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const isAnchor = item.href.startsWith("/#");

                                const linkClass = `block rounded-lg px-4 py-3 font-body text-base font-medium transition-colors ${isActive
                                        ? "bg-terracotta-earth/10 text-terracotta-earth"
                                        : "text-urbane-bronze hover:bg-cinnamon/10"
                                    }`;

                                return isAnchor ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={linkClass}
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={linkClass}
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
