import { useReducer } from "react";
import CenterSection from "./CenterSection";

const FORM_INPUT_CLASS =
  "rounded font-font-semibold bg-zinc-700 p-3 text-2xl text-indigo-300";
const FORM_CONTAINER_CLASS = "flex flex-col space-y-2";

enum ActionType {
  SET_NUMBER,
  SET_PASSWORD,
}

export interface AuthFormState {
  number: string;
  password: string;
}

function formReducer(
  state: AuthFormState,
  action: { type: ActionType; payload: string }
) {
  switch (action.type) {
    case ActionType.SET_NUMBER: {
      if (/^\d+$/.test(action.payload) || action.payload === "") {
        return { ...state, number: action.payload };
      }
      return state;
    }
    case ActionType.SET_PASSWORD:
      return { ...state, password: action.payload };
  }
}
function Auth({
  title,
  errorMsg,
  onFormSubmit,
}: {
  title: string;
  errorMsg: null | string;
  onFormSubmit: (state: AuthFormState) => void;
}) {
  const [state, dispatch] = useReducer(formReducer, {
    number: "",
    password: "",
  });
  const changeHandler = (type: ActionType, payload: string) =>
    dispatch({ type, payload });

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(state);
  };
  return (
    <CenterSection>
      <header>
        <h2 className="font-bold text-indigo-400 text-3xl capitalize">
          {title}
        </h2>
      </header>
      <form onSubmit={submitFormHandler} className={FORM_CONTAINER_CLASS}>
        {errorMsg && (
          <h5 className="font-bold text-center text-red-700 capitalize">
            {errorMsg}
          </h5>
        )}
        <div className={FORM_CONTAINER_CLASS}>
          <label htmlFor="PhoneNumber">Number : </label>
          <input
            onChange={(e) =>
              changeHandler(ActionType.SET_NUMBER, e.target.value)
            }
            className={FORM_INPUT_CLASS}
            type="text"
            id="PhoneNumber"
            value={state.number}
          />
        </div>
        <div className={FORM_CONTAINER_CLASS}>
          <label htmlFor="Password">Password : </label>
          <input
            onChange={(e) =>
              changeHandler(ActionType.SET_PASSWORD, e.target.value)
            }
            className={FORM_INPUT_CLASS}
            type="password"
            id="Password"
            value={state.password}
          />
        </div>
        <button
          className="rounded bg-sky-700 py-2 px-4 self-center hover:bg-sky-900"
          type="submit"
        >
          Submit
        </button>
      </form>
    </CenterSection>
  );
}

export default Auth;
