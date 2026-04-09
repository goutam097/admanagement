import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { login as loginApi } from "../apis/auth";

type AuthUser = Record<string, any> | null;

interface AuthContextValue {
  user: AuthUser;
  isAuthenticated: boolean;
  loading: boolean;
  login: (formData: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<AuthUser>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("userProfile");

    if (token) {
      setIsAuthenticated(true);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        localStorage.removeItem("userProfile");
      }
    }

    setLoading(false);
  }, []);

  const login = useCallback(async (formData: { email: string; password: string }) => {
    const data = await loginApi(formData);
    const userData = data?.data?.user ?? null;

    setUser(userData);
    setIsAuthenticated(true);

    if (userData) {
      localStorage.setItem("userProfile", JSON.stringify(userData));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userProfile");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, login, logout }),
    [user, isAuthenticated, loading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
