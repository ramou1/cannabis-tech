import {
  BookText,
  Bot,
  BadgeCheck,
  Handshake,
  ShieldCheck,
  Stethoscope,
  UserPlus,
} from "lucide-react";
import type { ReactElement } from "react";

const iconClass = "w-6 h-6";
type IconProps = { className?: string };
type IconComponent = (props: IconProps) => ReactElement;

export default function FluxoBase() {
  const steps: Array<{
    n: number;
    title: string;
    description: string;
    color: "primary" | "cyan";
    Icon: IconComponent;
  }> = [
    {
      n: 1,
      title: "Estudo e compartilhamento global (base soberana)",
      description: "Conteúdo técnico e padronização de conhecimento científico.",
      color: "cyan",
      Icon: BookText as unknown as IconComponent,
    },
    {
      n: 2,
      title: "Cadastro de usuários, pacientes, médicos e parceiros",
      description: "Perfis confiáveis para trilhas e triagens seguras.",
      color: "primary",
      Icon: UserPlus as unknown as IconComponent,
    },
    {
      n: 3,
      title: "Triagem médica com IA + supervisão",
      description: "Apoio inteligente com validação humana em cada decisão.",
      color: "cyan",
      Icon: Bot as unknown as IconComponent,
    },
    {
      n: 4,
      title: "Controle industrial e selo de qualidade",
      description: "Rastreabilidade e conformidade para garantir o padrão do produto.",
      color: "primary",
      Icon: BadgeCheck as unknown as IconComponent,
    },
    {
      n: 5,
      title: "Comercialização via parceiros e assinaturas",
      description: "Canais homologados para escala e acesso consistente.",
      color: "cyan",
      Icon: Handshake as unknown as IconComponent,
    },
  ];

  return (
    <section
      id="fluxo-base"
      className="py-20 border-t border-[#1A1A1A] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_50%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.14),transparent_55%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.06em] uppercase text-white mb-4">
          FLUXO BASE DA PLATAFORMA
        </h2>
        <div className="h-px w-56 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary-light)]/80 mb-10" />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_36px_rgba(34,211,238,0.05)]">
            <div className="space-y-5">
              {steps.map(({ n, title, description, color, Icon }) => (
                <div key={n} className="flex gap-4 items-start">
                  <div
                    className={[
                      "mt-0.5 flex-none w-10 h-10 rounded-xl flex items-center justify-center border shadow-[0_0_22px_rgba(34,197,94,0.25)]",
                      color === "primary"
                        ? "bg-[var(--color-primary)]/15 border-[var(--color-primary)]/30 text-[var(--color-primary-light)]"
                        : "bg-[var(--color-cyan)]/10 border-[var(--color-cyan)]/25 text-[var(--color-cyan)]",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold">{n}</span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          "text-sm font-semibold uppercase tracking-widest",
                          color === "primary"
                            ? "text-[var(--color-primary-light)]"
                            : "text-[var(--color-cyan)]",
                        ].join(" ")}
                      >
                        {title.split(" ")[0]}
                      </span>
                      <Icon className={iconClass + " opacity-90"} />
                    </div>
                    <div className="text-white font-semibold leading-relaxed">
                      {title}
                    </div>
                    <div className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#0B0B0B] border border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center shadow-[0_0_26px_rgba(34,197,94,0.25)]">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <div className="text-[var(--color-primary-light)] font-semibold text-lg">
                    Ecossistema fechado, rastreável e escalável.
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Um fluxo completo para transformar pesquisa em produto com qualidade.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,15,0.1),rgba(15,15,15,0.9))]" />

            <div className="relative p-6">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_24px_rgba(34,197,94,0.65)]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary-light)]">
                    Plataforma integrada
                  </span>
                </div>
                <div className="h-px w-28 bg-gradient-to-r from-[var(--color-cyan)] to-transparent" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B0B0B]/60 p-6">
                <div className="text-white font-semibold text-lg mb-2">
                  Visão clínica e operacional
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  Acompanhamento do fluxo com validações e rastreabilidade em cada etapa.
                </div>

                <div className="mt-6 flex items-center justify-center">
                  <div className="relative w-60 h-44 rounded-2xl border border-[var(--color-cyan)]/20 bg-gradient-to-br from-[var(--color-cyan)]/10 via-white/5 to-[var(--color-primary-light)]/10 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.18)]">
                    <Stethoscope className="w-16 h-16 text-[var(--color-cyan)] opacity-90" />
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[var(--color-primary)]/10 blur-xl" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[var(--color-cyan)] font-semibold text-sm uppercase tracking-widest">
                    IA assistiva
                  </div>
                  <div className="text-gray-300 text-sm mt-2">
                    Sugestões com supervisão e trilhas claras.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[var(--color-primary-light)] font-semibold text-sm uppercase tracking-widest">
                    Conformidade
                  </div>
                  <div className="text-gray-300 text-sm mt-2">
                    Qualidade e rastreabilidade com transparência.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

