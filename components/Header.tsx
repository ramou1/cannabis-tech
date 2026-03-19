"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import LoginModal from "./LoginModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  const firstName = user?.name?.split(" ")[0] || user?.name || "USUÁRIO";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className="text-gray-300 hover:text-[var(--color-primary-light)] transition-colors text-xs font-bold uppercase tracking-wider"
      >
        HOME
      </button>
      <button
        onClick={() => scrollToSection("sobre")}
        className="text-gray-300 hover:text-[var(--color-primary-light)] transition-colors text-xs font-bold uppercase tracking-wider"
      >
        SOBRE
      </button>
      <button
        onClick={() => scrollToSection("solucoes")}
        className="text-gray-300 hover:text-[var(--color-primary-light)] transition-colors text-xs font-bold uppercase tracking-wider"
      >
        SOLUÇÕES
      </button>
      <button
        onClick={() => scrollToSection("contato")}
        className="text-gray-300 hover:text-[var(--color-primary-light)] transition-colors text-xs font-bold uppercase tracking-wider"
      >
        CONTATO
      </button>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-[#1A1A1A]/30">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <img
                src="/images/logo01.png"
                alt="Cannabis Tech"
                className="h-9 md:h-11 w-auto object-contain"
              />
              <span className="hidden sm:inline text-base md:text-xl font-bold text-white">Cannabis</span>
              <span className="hidden sm:inline text-base md:text-xl font-bold text-[var(--color-primary-light)]">Tech</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks}
              {user ? (
                <div className="relative flex items-center gap-2" ref={userMenuRef}>
                  <Link
                    href="/dashboard"
                    className="flex-shrink-0 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center overflow-hidden">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-0.5 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="uppercase tracking-wider text-xs font-bold">{firstName}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 py-2 w-48 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg shadow-xl">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-[#2A2A2A] hover:text-white transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        ÁREA INTERNA
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-[#2A2A2A] hover:text-white transition-colors"
                      >
                        <User className="w-4 h-4" />
                        Perfil
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 text-gray-300 hover:bg-[#2A2A2A] hover:text-red-400 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        SAIR
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-2 rounded-full transition-colors text-xs font-bold uppercase tracking-wider"
                >
                  ENTRAR
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center gap-2">
              {user ? (
                <Link href="/dashboard" className="flex items-center gap-2 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">{firstName}</span>
                </Link>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
                >
                  ENTRAR
                </button>
              )}
              <button
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#2A2A2A]">
              <div className="flex flex-col space-y-4">
                {navLinks}
                {user && (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-300 hover:text-[var(--color-primary-light)] transition-colors text-left"
                    >
                      ÁREA INTERNA
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors text-left"
                    >
                      SAIR
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
