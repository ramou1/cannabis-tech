"use client";

import Link from "next/link";
import { useTranslations } from "@/context/LanguageContext";

export default function Hero() {
  const tr = useTranslations();

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0F0F0F] via-[#0a1f0a] to-[#0F0F0F] pt-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          {tr.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl text-[var(--color-primary-light)] mb-2">
          {tr.hero.subtitle}
        </p>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          {tr.hero.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/cadastro"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium transition-colors"
          >
            Criar conta
          </Link>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 font-medium transition-colors"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
