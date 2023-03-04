import { useCallback } from "react";
import Auth, { AuthFormState } from "../components/Auth";

export default function RegisterPage() {
  const registerRequest = useCallback(async (state: AuthFormState) => {
    const url = "http://localhost:8000/v1/auth/register";
  }, []);
  return (
    <Auth
      title="Register a new user"
      errorMsg={null}
      onFormSubmit={registerRequest}
    ></Auth>
  );
}
