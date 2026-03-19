"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import PasswordInput from "./PasswordInput";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login, authError, clearAuthError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      onClose();
    }
  };

  const error =
    authError &&
    (authError === "Credenciais inválidas."
      ? "E-mail ou senha incorretos. Tente novamente."
      : authError);

  useEffect(() => {
    if (isOpen) clearAuthError();
  }, [isOpen, clearAuthError]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#2A2A2A]">
          <h2 className="text-xl font-semibold text-white">Entrar</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              E-mail
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Senha
            </label>
            <PasswordInput
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-70 text-white font-medium rounded-lg transition-colors"
          >
            {loading ? "..." : "Entrar"}
          </button>

          <p className="text-center text-sm text-gray-400">
            Não tem uma conta?{" "}
            <Link
              href="/cadastro"
              onClick={onClose}
              className="text-[var(--color-primary-light)] hover:underline font-medium"
            >
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
