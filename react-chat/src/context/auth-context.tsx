import { ReactNode, createContext, useEffect, useReducer } from "react";

interface AuthContext {
  authState: {
    token: string;
    isAuth: boolean;
  };
  authDispatch: React.Dispatch<{
    type: AuthActionType;
    payload: string;
  }>;
}
export const AuthCtx = createContext<AuthContext | null>(null);

export enum AuthActionType {
  SET_TOKEN,
}

function authReducer(
  state: {
    token: string;
    isAuth: boolean;
  },
  action: { type: AuthActionType; payload: string }
) {
  switch (action.type) {
    case AuthActionType.SET_TOKEN: {
      if (action.payload.length === 0) {
        return { isAuth: false, token: action.payload };
      }
      return { isAuth: true, token: action.payload };
    }
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, authDispatch] = useReducer(authReducer, {
    token: "",
    isAuth: false,
  });
  useEffect(() => {
    const local_token = localStorage.getItem("token");
    if (local_token) {
      authDispatch({ payload: local_token, type: AuthActionType.SET_TOKEN });
      return;
    }
    if (authState.token.length === 0) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", authState.token);
    }
  }, [authState.token]);
  return (
    <AuthCtx.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthCtx.Provider>
  );
}
