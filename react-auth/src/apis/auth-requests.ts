import { User } from "../publicInterFace";

async function loginRequest(email: string, password: string) {
  const url = "http://localhost:8000/login-user";
  const payload = JSON.stringify({ email, password });
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: payload,
    credentials: "include",
  });
  if (response.ok) {
    return (await response.json()) as User;
  }
  throw new Error((await response.json())["message"]);
}

async function getProfile() {
  const url = "http://localhost:8000/profile";
  const response = await fetch(url, { method: "GET", credentials: "include" });
  if (response.ok) {
    return (await response.json()) as User;
  }
  throw new Error("Auth field");
}
export { loginRequest, getProfile };
