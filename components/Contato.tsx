"use client";

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.10),transparent_50%),linear-gradient(to_bottom,rgba(15,15,15,0.0),rgba(15,15,15,0.95))] border-t border-[#1A1A1A]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 uppercase tracking-wider">
          CONTATO
        </h2>
        <div className="h-px w-28 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-cyan)]/70 mb-8" />

        <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 shadow-[0_0_28px_rgba(34,211,238,0.06)]">
          <p className="text-gray-300 text-lg leading-relaxed">
            Entre em contato conosco para mais informações sobre a plataforma Cannabis
            Tech.
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-4 text-sm text-gray-400">
            Parcerias, pesquisa e apoio à regulamentação.
          </div>
        </div>
      </div>
    </section>
  );
}
