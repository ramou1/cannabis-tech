"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-44 left-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -top-56 right-10 h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.32),transparent_58%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,15,0.0),rgba(15,15,15,0.85))]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-[var(--color-primary-light)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_18px_rgba(34,197,94,0.55)]" />
          Cannabis Tech
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.08em] text-white drop-shadow-[0_0_18px_rgba(34,197,94,0.30)] mb-4">
          CANNABIS TECH
        </h1>

        <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent mb-6" />

        <p className="text-xl sm:text-2xl text-[var(--color-cyan)] mb-2 drop-shadow-[0_0_18px_rgba(34,211,238,0.25)] uppercase tracking-wider">
          INOVAÇÃO E CIÊNCIA EM CANNABIS MEDICINAL
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Conectando profissionais, pesquisadores e instituições.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/cadastro"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium transition-colors shadow-[0_0_28px_rgba(33,82,53,0.35)] border border-white/10"
          >
            Criar conta
          </Link>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[var(--color-cyan)]/35 text-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/10 font-medium transition-colors"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
