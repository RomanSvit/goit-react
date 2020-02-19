import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Nav.module.css"

const activeStyle = {
  color: "white",
  textDecoration: "none"
};
const Nav = () => {
  return (
    <>
      <ul className={css.menu}>
        <li className={css.menuItem}>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className={css.menuItem}>
          <NavLink to="/movies" activeStyle={activeStyle}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
