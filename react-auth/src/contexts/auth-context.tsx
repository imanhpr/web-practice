import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../publicInterFace";
import { getProfile } from "../apis/auth-requests";

interface AuthContext {
  user: User | null;
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
  setUser: (user: User) => void;
  sendLogout: () => Promise<{ message: string }>;
}

export const authCtx = createContext<undefined | AuthContext>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const logout = async () => {
    const url = "http://localhost:8000/logout";
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    setUser(null);
    setIsAuth(false);
    return response.json() as Promise<{ message: string }>;
  };
  useEffect(() => {
    getProfile()
      .then((result) => {
        setUser(result);
        setIsAuth(true);
      })
      .catch((err) => {
        setUser(null);
        setIsAuth(false);
      });
  }, []);

  const valueToShare: AuthContext = {
    setUser,
    setIsAuth,
    sendLogout: logout,
    isAuth,
    user: user,
  };
  return <authCtx.Provider value={valueToShare}>{children}</authCtx.Provider>;
}

export default AuthProvider;
