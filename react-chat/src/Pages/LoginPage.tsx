import React, { useCallback, useContext, useState } from "react";
import Auth, { AuthFormState } from "../components/Auth";
import { AuthActionType, AuthCtx } from "../context/auth-context";
function LoginPage() {
  const authContext = useContext(AuthCtx)!;
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const loginRequest = useCallback(async (state: AuthFormState) => {
    const url = "http://localhost:8000/v1/auth/login";
    const payload = JSON.stringify({
      phoneNumber: state.number,
      password: state.password,
    });
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
    if (!response.ok) {
      setErrorMsg((await response.json()).msg);
    } else {
      const token = (await response.json()).token;
      authContext.authDispatch({
        type: AuthActionType.SET_TOKEN,
        payload: token,
      });
      setErrorMsg(null);
    }
  }, []);
  return (
    <React.Fragment>
      <Auth
        title="Login with your phone number"
        onFormSubmit={loginRequest}
        errorMsg={errorMsg}
      />
    </React.Fragment>
  );
}
export default LoginPage;
