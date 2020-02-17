import React from "react";
import { NavLink } from "react-router-dom";
// Ключ API (v3 auth)--- 6760bd47a4eee027c4d8920912c403b1
// Пример API-запроса --- https://api.themoviedb.org/3/movie/550?api_key=6760bd47a4eee027c4d8920912c403b1
// Ключ доступа к API (v4 auth) ---- eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYwYmQ0N2E0ZWVlMDI3YzRkODkyMDkxMmM0MDNiMSIsInN1YiI6IjVlNGE5MWFiOWI4NjE2MDAxNjYzZmMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TxRBuDgb3UHaKMqE0x26mdhOjzmhO5JiJQqeqL1SQI8
const activeStyle = {
  color: "violet"
};
const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeStyle={activeStyle}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
