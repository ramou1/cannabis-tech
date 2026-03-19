import { Building2, Cpu, Factory, Leaf, Megaphone, Shield, Wrench } from "lucide-react";

export default function EstruturaOperacional() {
  const basesFisicas = [
    { icon: Factory, text: "Produção própria: Santa Catarina" },
    { icon: Building2, text: "Vitrine estratégica: Foz do Iguaçu" },
  ];

  const escala = [
    { icon: Shield, text: "Parceiros homologados" },
    { icon: Wrench, text: "Operações de franquia" },
    { icon: Cpu, text: "Plataforma global digital" },
  ];

  return (
    <section
      id="estrutura-operacional"
      className="py-20 border-t border-[#1A1A1A] bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.09),transparent_52%),radial-gradient(circle_at_right,rgba(34,197,94,0.12),transparent_58%),#0F0F0F]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.06em] uppercase text-white mb-4">
          Estrutura operacional
        </h2>
        <div className="h-px w-56 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary-light)]/80 mb-10" />

        <div className="grid xl:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_34px_rgba(34,211,238,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/25 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[var(--color-primary-light)]" />
                </div>
                <div className="text-white font-extrabold uppercase tracking-widest">
                  Bases físicas
                </div>
              </div>
              <div className="space-y-3">
                {basesFisicas.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[var(--color-primary-light)] mt-1" />
                    <div className="text-gray-300 text-sm leading-relaxed">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_34px_rgba(34,211,238,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/25 flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-[var(--color-cyan)]" />
                </div>
                <div className="text-white font-extrabold uppercase tracking-widest">
                  Escala
                </div>
              </div>
              <div className="space-y-3">
                {escala.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[var(--color-cyan)] mt-1" />
                    <div className="text-gray-300 text-sm leading-relaxed">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0B0B0B]/40 p-5 shadow-[0_0_22px_rgba(34,197,94,0.06)]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center">
                  <span className="text-[var(--color-primary-light)] font-extrabold">i</span>
                </div>
                <div>
                  <div className="text-[var(--color-primary-light)] font-extrabold">
                    Pesquisa e comercialização já atuando
                  </div>
                  <div className="text-gray-300 text-sm mt-1 leading-relaxed">
                    mercados europeu e asiático.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.05)] min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,15,0.05),rgba(15,15,15,0.95))]" />
            <div className="relative p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyan)] shadow-[0_0_24px_rgba(34,211,238,0.65)]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-cyan)]">
                    Operação
                  </span>
                </div>
                <div className="h-px w-28 bg-gradient-to-r from-[var(--color-primary-light)] to-transparent" />
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-[#0B0B0B]/45 p-6 flex flex-col justify-center">
                <div className="flex items-center justify-center">
                  <div className="relative w-72 max-w-[90%] h-64 rounded-2xl border border-[var(--color-cyan)]/20 bg-gradient-to-br from-[var(--color-cyan)]/10 via-white/5 to-[var(--color-primary-light)]/10 shadow-[0_0_44px_rgba(34,211,238,0.18)] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <Factory className="w-16 h-16 text-[var(--color-cyan)] opacity-90" />
                      <div className="text-white font-extrabold uppercase tracking-widest text-sm">
                        Produção e escala
                      </div>
                      <div className="text-gray-400 text-sm">
                        Controle, qualidade e continuidade operacional.
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-primary)]/10 blur-xl" />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-400 text-sm leading-relaxed">
                Um modelo replicável: bases físicas sólidas + parceiros homologados + plataforma digital.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

