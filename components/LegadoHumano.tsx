import { Brain, HeartPulse, ShieldCheck, Syringe, ShieldPlus } from "lucide-react";
import type { ComponentType } from "react";

type Benefit = {
  icon: ComponentType<{ className?: string }>;
  text: string;
};

export default function LegadoHumano() {
  const benefits: Benefit[] = [
    { icon: HeartPulse, text: "Tratamento de doenças neurológicas" },
    { icon: Syringe, text: "Controle de dor crônica" },
    { icon: Brain, text: "Apoio oncológico" },
    { icon: ShieldPlus, text: "Ansiedade e distúrbios do sono" },
    { icon: ShieldCheck, text: "Potencial preventivo e anti-inflamatório" },
  ];

  const foundation = [
    "Soberania científica brasileira",
    "Acesso democrático à medicina avançada",
    "Tecnologia aplicada à saúde",
    "Um legado humano baseado em inovação",
  ];

  return (
    <section
      id="legado-humano"
      className="py-20 border-t border-[#1A1A1A] bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.08),transparent_52%),radial-gradient(circle_at_right,rgba(34,197,94,0.12),transparent_58%),#0F0F0F]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.06em] uppercase text-white mb-4">
          Legado humano & impacto
        </h2>
        <div className="h-px w-56 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-cyan)]/80 mb-10" />

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_36px_rgba(34,211,238,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/25 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-[var(--color-cyan)]" />
                </div>
                <div className="text-white font-extrabold uppercase tracking-widest">
                  A cannabis representa:
                </div>
              </div>

              <div className="space-y-3">
                {benefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[var(--color-cyan)] mt-0.5" />
                    <div className="text-gray-300 text-sm leading-relaxed">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/25 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-primary-light)]" />
                </div>
                <div className="text-white font-extrabold uppercase tracking-widest">
                  Cannabis Tech é a construção de:
                </div>
              </div>
              <div className="space-y-3">
                {foundation.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_18px_rgba(34,197,94,0.45)]" />
                    <div className="text-gray-300 text-sm leading-relaxed">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.05)] min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,15,0.05),rgba(15,15,15,0.95))]" />
            <div className="relative p-6 h-full flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyan)] shadow-[0_0_24px_rgba(34,211,238,0.65)]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-cyan)]">
                    Impacto real
                  </span>
                </div>
                <div className="h-px w-28 bg-gradient-to-r from-[var(--color-primary-light)] to-transparent" />
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-[#0B0B0B]/40 p-6 flex items-center justify-center">
                <div className="w-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl border border-[var(--color-cyan)]/25 bg-[var(--color-cyan)]/10 flex items-center justify-center shadow-[0_0_38px_rgba(34,211,238,0.18)]">
                    <Syringe className="w-10 h-10 text-[var(--color-cyan)]" />
                  </div>
                  <div className="text-white font-extrabold text-lg mt-5">
                    Acesso com segurança e rastreabilidade
                  </div>
                  <div className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Uma experiência desenhada para pacientes, profissionais e parceiros.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-400 text-sm leading-relaxed">
                Do aprendizado à entrega: qualidade, supervisão e evolução contínua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

