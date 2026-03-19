"use client";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_45%),linear-gradient(to_bottom,rgba(15,15,15,0.95),#0F0F0F)] border-t border-[#1A1A1A]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 uppercase tracking-wider">
          Sobre o{" "}
          <span className="text-[var(--color-primary-light)] drop-shadow-[0_0_16px_rgba(34,197,94,0.22)]">
            Cannabis Tech
          </span>
        </h2>

        <div className="mb-8 h-px w-20 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-cyan)]/60" />

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_38px_rgba(34,211,238,0.06)]">
            <p className="text-gray-300 text-lg leading-relaxed">
              Plataforma dedicada à inovação e à ciência em cannabis medicinal, conectando
              estudantes, médicos, professores, farmacêuticos, corporações e órgãos
              governamentais em um ecossistema de conhecimento e regulamentação.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)] mb-4">
              Ecossistema
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Estudantes",
                "Médicos",
                "Professores",
                "Farmacêuticos",
                "Corporações",
                "Órgãos governamentais",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mt-5 text-gray-400 text-sm">
              Um ambiente para conectar pesquisa, educação e regulamentação com foco em
              acesso seguro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
