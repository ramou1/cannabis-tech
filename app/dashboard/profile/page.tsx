"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Perfil</h1>
      <div className="space-y-2 text-gray-400">
        <p>
          <span className="text-gray-500">Nome:</span> {user?.name}
        </p>
        <p>
          <span className="text-gray-500">E-mail:</span> {user?.email}
        </p>
        <p>
          <span className="text-gray-500">Tipo de conta:</span>{" "}
          {user?.role === "admin" ? "Administrador" : "Usuário"}
        </p>
      </div>
      <p className="text-gray-500 text-sm mt-6">
        A edição do perfil (nome, país, cidade, telefone, documento) pode ser
        adicionada aqui, integrando com Firestore como no Blackwolf.
      </p>
    </div>
  );
}
