"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function Solucoes() {
  const tr = useTranslations();

  return (
    <section id="solucoes" className="py-20 bg-[#0a1510] border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">{tr.nav.solucoes}</h2>
        <p className="text-gray-400 max-w-3xl text-lg">
          Soluções para educação, pesquisa, regulamentação e acesso à cannabis medicinal,
          com foco em profissionais de saúde, instituições e órgãos governamentais.
        </p>
      </div>
    </section>
  );
}
