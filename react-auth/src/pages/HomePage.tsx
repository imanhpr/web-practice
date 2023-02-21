import React, { useContext } from "react";
import { authCtx } from "../contexts/auth-context";
import styles from "./HomePage.module.css";

function HomePage() {
  const ctx = useContext(authCtx)!;
  const onExit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await ctx.sendLogout();
  };
  let user: null | JSX.Element = null;
  if (ctx.user) {
    user = (
      <div className={styles["user-div"]}>
        <p>id : {ctx.user.id}</p>
        <p>username : {ctx.user.username}</p>
        <p>email : {ctx.user.email}</p>
        <p>age : {ctx.user.age}</p>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>
            Login status :
            {ctx.isAuth ? (
              <span style={{ color: "green" }}> success</span>
            ) : (
              <span style={{ color: "red" }}> faild</span>
            )}
          </h2>
          {user}
          {ctx.isAuth && (
            <button onClick={onExit} className={styles["exit-btn"]}>
              exit
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
