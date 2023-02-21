import { useReducer, useState } from "react";
import { Post as PostInterFace } from "../publicInterFace";
import styles from "./PostForm.module.css";
import { useNavigate } from "react-router-dom";

enum FormAction {
  SET_TITLE,
  SET_CONTENT,
}
interface ReducerAction {
  type: FormAction;
  payload: string;
}
interface ReducerState {
  title: string;
  content: string;
}
function formReducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case FormAction.SET_CONTENT:
      return { ...state, content: action.payload };
    case FormAction.SET_TITLE:
      return { ...state, title: action.payload };
  }
}

function PostForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formState, formDispatch] = useReducer(formReducer, {
    title: "",
    content: "",
  });
  const sendPostToServer = async (title: string, content: string) => {
    const url = "http://localhost:8000/post";
    const payload = JSON.stringify({ title, content });
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: payload,
      credentials: "include",
    });
    if (response.ok) {
      return (await response.json()) as PostInterFace;
    }
    throw new Error((await response.json()).message);
  };
  const inputOnChange = (payload: string, type: FormAction) => {
    formDispatch({ type, payload });
  };
  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPostToServer(formState.title, formState.content);
      setError("");
      navigate("/post", { replace: true });
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <form className={styles.card} onSubmit={formOnSubmit}>
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      <div>
        <label htmlFor="title">Title : </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            inputOnChange(e.target.value, FormAction.SET_TITLE)
          }
        />
      </div>
      <div className={styles.content}>
        <label htmlFor="content">Content : </label>
        <textarea
          className={styles.input}
          id="content"
          cols={60}
          rows={10}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            inputOnChange(e.target.value, FormAction.SET_CONTENT)
          }
        ></textarea>
      </div>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default PostForm;
