"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, User, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex">
      <aside className="w-64 border-r border-[#1A1A1A] bg-[#0F0F0F] flex flex-col">
        <div className="p-6 border-b border-[#1A1A1A]">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">Cannabis</span>
            <span className="text-lg font-bold text-[var(--color-primary-light)]">Tech</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Início
          </Link>

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <User className="w-5 h-5" />
            Perfil
          </Link>

          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1A1A1A] hover:text-white transition-colors mt-4"
          >
            ← Voltar ao site
          </Link>
        </nav>

        <div className="p-4 border-t border-[#1A1A1A]">
          <button
            onClick={() => logout()}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1A1A1A] hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
