import React from "react";
import  css  from "../button/Button.module.css";
const Button = () => {
  return (
    <>
      {window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })}
    </>
  );
};

export default Button;
