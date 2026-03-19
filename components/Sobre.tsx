"use client";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Sobre o <span className="text-[var(--color-primary-light)]">Cannabis Tech</span>
        </h2>
        <p className="text-gray-400 max-w-3xl text-lg">
          Plataforma dedicada à inovação e à ciência em cannabis medicinal, conectando
          estudantes, médicos, professores, farmacêuticos, corporações e órgãos governamentais
          em um ecossistema de conhecimento e regulamentação.
        </p>
      </div>
    </section>
  );
}
