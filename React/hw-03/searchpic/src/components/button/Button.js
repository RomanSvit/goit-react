import React from "react";
import css from "../button/Button.module.css";
const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={css.Button}>
        Load more
      </button>
    </>
  );
};

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth"
// });

export default Button;
