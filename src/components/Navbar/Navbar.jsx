import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const setClass = ({ isActive }) => (isActive ? s.activeLink : s.item);
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={setClass}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={setClass}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={setClass}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={setClass}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={setClass}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={setClass}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
