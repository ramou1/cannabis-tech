"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function Contato() {
  const tr = useTranslations();

  return (
    <section id="contato" className="py-20 bg-[#0F0F0F] border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">{tr.nav.contato}</h2>
        <p className="text-gray-400 max-w-2xl">
          Entre em contato conosco para mais informações sobre a plataforma Cannabis Tech.
        </p>
      </div>
    </section>
  );
}
