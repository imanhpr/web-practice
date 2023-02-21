import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { authCtx } from "../contexts/auth-context";

function NavBar() {
  const auth = useContext(authCtx)!;
  return (
    <nav className={styles.nav}>
      <div className={styles.div}>
        <h2>Dummy Web Site</h2>
      </div>
      <div>
        <ul className={[styles.listUl].join(" ")}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!auth.isAuth && (
            <li>
              <NavLink to="/auth/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
