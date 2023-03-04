import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthActionType, AuthCtx } from "../context/auth-context";

export default function LogoutPage() {
  const auth = useContext(AuthCtx)!;
  const naviagte = useNavigate();
  useEffect(() => {
    localStorage.clear();
    auth.authDispatch({ type: AuthActionType.SET_TOKEN, payload: "" });
    naviagte("/", { replace: true });
  }, []);
  return <h2>Logging out ...</h2>;
}
