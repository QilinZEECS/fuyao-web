"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/components/LanguageProvider";

export function HeroSection() {
  const { HERO } = useContent();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85" />

      <div className="blob top-1/4 left-1/4 h-96 w-96 bg-blue-500/30" />
      <div className="blob blob-2 bottom-1/3 right-1/4 h-96 w-96 bg-indigo-500/25" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="glass-dark mb-7 inline-block rounded-full px-7 py-2.5 text-base font-semibold uppercase tracking-[0.25em] text-white/95 md:text-lg">
            {HERO.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mb-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl"
        >
          {HERO.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-base text-white/85 md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-dark mt-12 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white/90 transition-all duration-500 hover:scale-105 hover:bg-white/20"
        >
          <span>{HERO.cta}</span>
          <span className="animate-bounce">↓</span>
        </motion.a>
      </div>
    </section>
  );
}
