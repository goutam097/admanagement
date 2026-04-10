import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { login as loginApi, myProfileDetails as fetchProfileDetails } from "../apis/auth";

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
  console.log(user,'ccccccccccc')
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const loadUserProfile = useCallback(async () => {
    const profile = await fetchProfileDetails();
    if (profile) {
      setUser(profile);
      setIsAuthenticated(true);
      return profile;
    }
    return null;
  }, []);

  const login = useCallback(
    async (formData: { email: string; password: string }) => {
      await loginApi(formData);
      try {
        await loadUserProfile();
      } catch (error) {
        logout();
        throw error;
      }
    },
    [loadUserProfile, logout]
  );

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        await loadUserProfile();
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [loadUserProfile, logout]);

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
