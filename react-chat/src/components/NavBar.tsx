import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCtx } from "../context/auth-context";

const ACTIVE_CLASS = "text-purple-500 font-medium no-underline";

const setActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? ACTIVE_CLASS : "no-underline text-light-200";

function NavBar() {
  const auth = useContext(AuthCtx)!;
  return (
    <nav className="flex flex-col bg-dark-600 text-xl py-3 text-light-200 text-2xl justify-around items-center md:flex-row">
      <Link to="/" className="no-underline">
        <h1 className="font-bold text-center text-sky-400 text-3xl">
          React-Chat
        </h1>
      </Link>
      <ul className="flex flex-col text-center w-4/6 justify-evenly md:flex-row">
        <li>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
        </li>
        {auth.authState.isAuth && (
          <li>
            <NavLink to="/profile" className={setActiveClass}>
              Profile
            </NavLink>
          </li>
        )}
        {!auth.authState.isAuth && (
          <li>
            <NavLink to="/auth/register" className={setActiveClass}>
              <span>Register</span>
            </NavLink>
            <span> / </span>
            <NavLink to="/auth/login" className={setActiveClass}>
              <span>Login</span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default NavBar;
