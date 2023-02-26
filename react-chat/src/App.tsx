import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import AuthPage from "./Pages/AuthPage";
import IndexPage from "./Pages/IndexPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth">
          <Route
            path="login"
            element={
              <AuthPage title="Login with your phone number" apiToCall="" />
            }
          />
          <Route
            path="register"
            element={<AuthPage title="Register a new account" apiToCall="" />}
          />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
