import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import { authCtx } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

function App() {
  const authctx = useContext(authCtx)!;
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth">
          {!authctx.isAuth && <Route path="login" element={<LoginPage />} />}
          <Route path="profile" />
        </Route>
        <Route path="/post" element={<PostPage />} />
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
