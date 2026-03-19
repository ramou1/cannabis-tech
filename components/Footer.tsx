"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F0F0F] to-[#0B0B0B] py-14 border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo01.png"
                alt="Cannabis Tech"
                className="h-11 w-auto object-contain opacity-95"
              />
              <span className="text-lg font-bold text-white">Cannabis</span>
              <span className="text-lg font-bold text-[var(--color-primary-light)]">Tech</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cannabis Tech. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
