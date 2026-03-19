import {
  BriefcaseBusiness,
  BookOpen,
  GraduationCap,
  Landmark,
  Wrench,
} from "lucide-react";
import type { ReactElement } from "react";

type IconProps = { className?: string };
type IconComponent = (props: IconProps) => ReactElement;

export default function ModelosMonetizacao() {
  const leftCards = [
    {
      title: "Operação e serviços",
      items: [
        "Implantação em municípios",
        "Comércio com parceiros e franquias",
        "Consulta e acesso a conteúdos científicos",
      ],
      Icon: BriefcaseBusiness as unknown as IconComponent,
      accent: "text-[var(--color-cyan)]",
      chipBg: "bg-[var(--color-cyan)]/10",
      chipBorder: "border-[var(--color-cyan)]/25",
    },
    {
      title: "P&D e capacitação",
      items: [
        "Treinamento e homologação de estudantes e médicos",
        "Desenvolvimento de novos produtos (cosmetologia e biotecnologia)",
      ],
      Icon: GraduationCap as unknown as IconComponent,
      accent: "text-[var(--color-primary-light)]",
      chipBg: "bg-[var(--color-primary-light)]/10",
      chipBorder: "border-[var(--color-primary-light)]/25",
    },
  ] as const;

  return (
    <section
      id="modelos-monetizacao"
      className="py-20 border-t border-[#1A1A1A] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_60%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.06em] uppercase text-white mb-4">
          Modelos de monetização
        </h2>
        <div className="h-px w-56 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-cyan)]/80 mb-10" />

        <div className="grid xl:grid-cols-2 gap-6">
          {leftCards.map(({ title, items, Icon, accent, chipBg, chipBorder }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_34px_rgba(34,211,238,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={[
                    "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-[0_0_26px_rgba(34,211,238,0.16)]",
                    chipBg,
                    chipBorder,
                  ].join(" ")}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <div className={`text-lg font-extrabold uppercase tracking-widest ${accent}`}>
                    {title}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Estrutura pronta para expansão com qualidade.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {items.map((it) => (
                  <div key={it} className="flex items-start gap-3">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_18px_rgba(34,197,94,0.55)]" />
                    <div className="text-gray-300 leading-relaxed text-sm">{it}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B0B0B]/40 p-6 shadow-[0_0_24px_rgba(34,211,238,0.05)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-[var(--color-primary-light)]" />
            </div>
            <div>
              <div className="text-white font-extrabold text-lg leading-snug">
                Receita recorrente + royalties + expansão internacional.
              </div>
              <div className="text-gray-400 text-sm mt-1">
                  Monetização alinhada com trilhas, homologações e parcerias.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

