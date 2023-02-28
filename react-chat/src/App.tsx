import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import IndexPage from "./Pages/IndexPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import { AuthCtx } from "./context/auth-context";
import ChatRoomPage from "./Pages/ChatRoomPage";

function App() {
  const authContext = useContext(AuthCtx)!;
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth">
          {!authContext.authState.isAuth && (
            <Route path="login" element={<LoginPage />} />
          )}
          {/* <Route
            path="register"
            element={<AuthPage title="Register a new account" apiToCall="" />}
          /> */}
        </Route>
        {authContext.authState.isAuth && (
          <Route path="/profile" element={<ProfilePage />} />
        )}
        {authContext.authState.isAuth && (
          <Route path="/room/:roomId" element={<ChatRoomPage />} />
        )}
      </Routes>
    </React.Fragment>
  );
}

export default App;
