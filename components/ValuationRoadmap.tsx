import { DollarSign, Flag, Scale, Wallet } from "lucide-react";

type TimelineItem = {
  year: string;
  label: string;
  color: "cyan" | "primary";
};

export default function ValuationRoadmap() {
  const roadmap: TimelineItem[] = [
    { year: "2026", label: "Lançamento plataforma nacional", color: "cyan" },
    { year: "2027", label: "Lançamento plataforma global", color: "primary" },
    { year: "2028", label: "Tokenização", color: "cyan" },
    { year: "2029", label: "Lojas próprias + franquias", color: "primary" },
    { year: "2030", label: "IPO na LSE e Nasdaq", color: "cyan" },
  ];

  return (
    <section
      id="valuation-roadmap"
      className="py-20 border-t border-[#1A1A1A] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_50%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.14),transparent_55%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.06em] uppercase text-white mb-4">
          Valuation & roadmap
        </h2>
        <div className="h-px w-56 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary-light)]/80 mb-10" />

        <div className="grid xl:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_38px_rgba(34,211,238,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/25 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[var(--color-cyan)]" />
                </div>
                <div className="text-white font-extrabold uppercase tracking-widest">
                  Valuation atual
                </div>
              </div>

              <div className="text-[var(--color-cyan)] font-extrabold text-5xl leading-none mt-2 drop-shadow-[0_0_24px_rgba(34,211,238,0.20)]">
                US$ 3-5 mi
              </div>
              <div className="text-gray-400 text-sm mt-3 leading-relaxed">
                Baseado no faturamento e tendência.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B0B0B]/35 p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/25 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <div className="text-[var(--color-primary-light)] font-extrabold uppercase tracking-widest text-sm">
                    Estimativa 2030
                  </div>
                  <div className="text-white font-extrabold text-4xl mt-1">
                    US$ 1-5 bi
                  </div>
                </div>
              </div>
              <div className="text-gray-400 text-sm mt-2 leading-relaxed">
                Com investimento e expansão global.
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_38px_rgba(34,197,94,0.03)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/25 flex items-center justify-center">
                <Flag className="w-6 h-6 text-[var(--color-primary-light)]" />
              </div>
              <div className="text-white font-extrabold uppercase tracking-widest">
                Roadmap
              </div>
            </div>

            <div className="space-y-3">
              {roadmap.map(({ year, label, color }) => (
                <div
                  key={year}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0B0B0B]/35 p-4"
                >
                  <div
                    className={[
                      "flex-none w-12 h-10 rounded-lg flex items-center justify-center border font-extrabold",
                      color === "cyan"
                        ? "bg-[var(--color-cyan)]/10 border-[var(--color-cyan)]/25 text-[var(--color-cyan)]"
                        : "bg-[var(--color-primary-light)]/10 border-[var(--color-primary-light)]/25 text-[var(--color-primary-light)]",
                    ].join(" ")}
                  >
                    {year}
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B0B0B]/35 p-5">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-[var(--color-cyan)]" />
                <div className="text-white font-extrabold">
                  Planejamento para crescimento com rastreabilidade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

