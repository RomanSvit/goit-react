import React from "react";
import css from "../button/Button.module.css";
const Button = ({ onClickButton }) => {
  return (
    <>
      <button onClick={onClickButton} type="button" className={css.Button}>
        Load more
      </button>
    </>
  );
};

export default Button;
