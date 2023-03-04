import { useCallback, useState } from "react";
import Auth, { AuthFormState } from "../components/Auth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const navigate = useNavigate();
  const registerRequest = useCallback(async (state: AuthFormState) => {
    const url = "http://localhost:8000/v1/auth/register";
    const payload = JSON.stringify({
      phoneNumber: state.number,
      user_name: state.user_name,
      password: state.password,
      name: state.name,
    });
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
    if (response.ok) {
      navigate("/auth/login", { replace: true });
      setErrorMsg(null);
      return;
    }
    setErrorMsg("Something went wrong.");
  }, []);
  return (
    <Auth
      title="Register a new user"
      errorMsg={errorMsg}
      register
      onFormSubmit={registerRequest}
    ></Auth>
  );
}
