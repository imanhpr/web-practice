import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import styles from "./loginPage.module.css";
import { loginRequest } from "../apis/auth-requests";
import { authCtx } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";

enum FormReducerAction {
  SET_USERNAME,
  SET_PASSWORD,
}
function formReducer(
  state: { username: string; password: string },
  action: { type: FormReducerAction; payload: string }
) {
  switch (action.type) {
    case FormReducerAction.SET_PASSWORD:
      return { ...state, password: action.payload };

    case FormReducerAction.SET_USERNAME:
      return { ...state, username: action.payload };
  }
}

function LoginPage() {
  const navigate = useNavigate();
  const authContext = useContext(authCtx)!;
  const [errorMessage, setErrorMessage] = useState<
    null | ["success" | "error", string]
  >(null);
  const [formState, formDispatch] = useReducer(formReducer, {
    username: "",
    password: "",
  });
  const onChangeInput = (type: FormReducerAction, value: string) => {
    formDispatch({ type, payload: value });
  };
  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginRequest(formState.username, formState.password);
      authContext.setUser(result);
      setTimeout(() => authContext.setIsAuth(true), 1500);
      setErrorMessage(["success", "success"]);
    } catch (err) {
      setErrorMessage(["error", (err as Error).message]);
    }
  };
  useEffect(() => {
    if (errorMessage?.[0] === "success")
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1500);
  }, [errorMessage]);
  return (
    <React.Fragment>
      <div className={styles["form-container"]}>
        <form className={styles.form} onSubmit={onSubmitForm}>
          {errorMessage && (
            <h4 className={styles[errorMessage[0]]}>{errorMessage[1]}</h4>
          )}
          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeInput(FormReducerAction.SET_USERNAME, e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeInput(FormReducerAction.SET_PASSWORD, e.target.value)
              }
            />
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default LoginPage;
