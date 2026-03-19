"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function Footer() {
  const tr = useTranslations();

  return (
    <footer className="bg-[#0F0F0F] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">Cannabis</span>
              <span className="text-lg font-bold text-[var(--color-primary-light)]">Tech</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cannabis Tech. {tr.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
