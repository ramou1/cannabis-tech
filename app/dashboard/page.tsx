"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Área interna</h1>
      <p className="text-gray-400 mb-4">
        Olá, <span className="text-[var(--color-primary-light)]">{user?.name}</span>.
        Bem-vindo ao Cannabis Tech.
      </p>
      <p className="text-gray-500 text-sm">
        Esta é a área restrita. O painel admin e outras funcionalidades podem ser
        implementados conforme a necessidade (usuários com role &quot;admin&quot;).
      </p>
    </div>
  );
}
