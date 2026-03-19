"use client";

import { GraduationCap, BookOpen, Landmark, Pill } from "lucide-react";

export default function Solucoes() {
  const cards = [
    {
      title: "Educação",
      description: "Conteúdo técnico e capacitação para profissionais e instituições.",
      Icon: GraduationCap,
      accent: "text-[var(--color-primary-light)]",
    },
    {
      title: "Pesquisa",
      description: "Integração e acesso a evidências para acelerar inovação científica.",
      Icon: BookOpen,
      accent: "text-[var(--color-cyan)]",
    },
    {
      title: "Regulamentação",
      description: "Apoio à conformidade e ao avanço responsável no ecossistema regulatório.",
      Icon: Landmark,
      accent: "text-[var(--color-primary-light)]",
    },
    {
      title: "Acesso",
      description: "Caminhos claros para acesso à cannabis medicinal com segurança e rastreabilidade.",
      Icon: Pill,
      accent: "text-[var(--color-cyan)]",
    },
  ] as const;

  return (
    <section
      id="solucoes"
      className="py-20 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_50%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_55%)] border-t border-[#1A1A1A]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 uppercase tracking-wider">
          SOLUÇÕES
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary-light)]/70 mb-8" />

        <p className="text-gray-400 max-w-3xl text-lg">
          Soluções para educação, pesquisa, regulamentação e acesso à cannabis medicinal,
          com foco em profissionais de saúde, instituições e órgãos governamentais.
        </p>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map(({ title, description, Icon, accent }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-transform hover:-translate-y-1 hover:border-[var(--color-cyan)]/40"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-xl border border-white/10 bg-white/5 p-3 ${accent}`}
                >
                  <Icon className={`w-6 h-6 ${accent}`} />
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold uppercase tracking-widest ${accent}`}
                  >
                    {title}
                  </div>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-4 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                Centralizado em qualidade, rastreabilidade e impacto.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
