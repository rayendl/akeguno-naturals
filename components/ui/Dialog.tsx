"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <div className="relative z-50 w-full max-w-lg p-4">
                        {children}
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}

export function DialogContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function DialogHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`flex flex-col space-y-1.5 p-6 pb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`font-heading text-xl font-semibold leading-none text-urbane-bronze ${className}`}>{children}</h2>;
}

export function DialogDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`font-body text-sm text-text-secondary ${className}`}>{children}</p>;
}
