import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ACTIVE_CLASS = "text-purple-500 font-medium no-underline";

const setActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? ACTIVE_CLASS : "no-underline text-light-200";

function NavBar() {
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
        <li>Profile</li>
        <li>
          <NavLink to="/auth/register" className={setActiveClass}>
            <span>Register</span>
          </NavLink>
          <span> / </span>
          <NavLink to="/auth/login" className={setActiveClass}>
            <span>Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
