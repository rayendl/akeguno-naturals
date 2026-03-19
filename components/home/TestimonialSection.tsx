"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "btixpkt8hz",
    role: "Madu Multiflora, 250 gr",
    content: "Rasanya seimbang dan segar, manisnya pas tidak berlebihan. Keasliannya terjamin karena proses panennya transparan. Sangat bangga bisa mendukung produk yang memberdayakan peternak lokal!",
  },
  {
    id: 2,
    name: "agustriwahjudi93",
    role: "Madu Signature Blend, 315 gr",
    content: "Sangat puas! Begitu dibuka ada suara desis khas madu murni tanpa campuran. Rasanya benar-benar enak dan autentik.",
  },
  {
    id: 3,
    name: "ndymawar",
    role: "Madu Durian 250 & Multiflora 250",
    content: "Madu murni & raw dengan enzim yang masih aktif. Varian bunga durian ini aromanya sangat wangi dan unik. Pengemasan sangat aman dengan bubble wrap tebal dan kardus.",
  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-eucalyptus-calm/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pb-8">
        <h2 className="font-heading text-[26px] font-semibold text-urbane-bronze md:text-[34px] lg:text-[40px]">
          Apa Kata Mereka
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-body text-sm text-text-secondary lg:text-base">
          Pengalaman nyata dari mereka yang telah merasakan manfaat Akeguno Naturals.
        </p>
      </div>

      <div className="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Left and Right Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-eucalyptus-calm/[0.15] to-transparent sm:w-32 lg:w-64" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-eucalyptus-calm/[0.15] to-transparent sm:w-32 lg:w-64" />

        {/* Mobile View: Fade in/out */}
        <div className="relative flex w-full h-[320px] items-center justify-center sm:hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-4"
            >
              <div className="flex h-[260px] flex-col mx-auto w-full max-w-[320px] rounded-2xl bg-white p-5 shadow-sm border border-morning-dew/40">
                <div className="flex text-terracotta-earth mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`star-mobile-${i}`} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`flex-grow overflow-y-auto pr-2 font-body text-text-secondary leading-relaxed mb-4 ${testimonials[activeIndex].content.length > 150 ? "text-xs" : "text-sm"}`}>
                  &quot;{testimonials[activeIndex].content}&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-heading text-base font-semibold text-urbane-bronze">{testimonials[activeIndex].name}</p>
                  <p className="font-body text-xs text-eucalyptus-calm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="hidden sm:flex gap-6 pb-4"
        >
          {/* Double the array to create a seamless loop effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex h-full min-h-[260px] flex-col w-72 sm:w-80 flex-shrink-0 rounded-2xl bg-white p-5 shadow-sm border border-morning-dew/40"
            >
              <div className="flex text-terracotta-earth mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`star-desktop-${t.id}-${i}`} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={`flex-grow font-body text-text-secondary leading-relaxed mb-6 ${t.content.length > 150 ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>
                &quot;{t.content}&quot;
              </p>
              <div className="mt-auto">
                <p className="font-heading text-base font-semibold text-urbane-bronze">{t.name}</p>
                <p className="font-body text-xs text-eucalyptus-calm">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
