"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { LoggedInUser } from "@/lib/types";
import {
  loginWithFirebase,
  logoutFirebase,
  onAuthChange,
} from "@/lib/firebaseAuth";
import { isFirebaseReady } from "@/lib/firebase";
import { USE_MOCK_AUTH } from "@/lib/authMock";

interface AuthContextType {
  user: LoggedInUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  authError: string | null;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    if (!USE_MOCK_AUTH && isFirebaseReady) {
      const unsubscribe = onAuthChange((authUser) => {
        setUser(authUser);
      });
      return () => unsubscribe();
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setAuthError(null);
    if (USE_MOCK_AUTH) {
      // Mock: autentica sem chamar Firebase (para validar UI/conteúdo agora).
      if (!email.trim() || password.length < 1) {
        setAuthError("Credenciais inválidas.");
        return false;
      }

      // Nome simples; pode ser expandido no futuro quando o registro real estiver pronto.
      const nameFromEmail = email.split("@")[0]?.replace(/[._-]+/g, " ") || "Usuário";
      const prettyName =
        nameFromEmail
          .split(" ")
          .filter(Boolean)
          .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
          .join(" ") || "Usuário";

      setUser({
        id: "mock-user",
        email,
        name: prettyName,
        role: "user",
      });
      return true;
    }

    const result = await loginWithFirebase(email, password);
    if (result.success && result.user) {
      setUser(result.user);
      return true;
    }
    setAuthError(result.success === false ? result.error : null);
    return false;
  }, []);

  const logout = useCallback(async () => {
    if (!USE_MOCK_AUTH) {
      await logoutFirebase();
    }
    setUser(null);
  }, []);

  const clearAuthError = useCallback(() => setAuthError(null), []);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    authError,
    clearAuthError,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
