import React from "react";
import css from "./Form.module.css";

const Form = ({ showName, handleSubmit, name ,number}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>        
          <span>Name</span>
          <input
            type="text"
            name="name"
            onChange={showName}
            value={name}
          ></input>        
          <span>Number</span>
          <input
            type="tel"
            name="number"
            onChange={showName}
            value={number}
          ></input>
        <button type="submit" className={css.button}>Add contact</button>
      </form>
    </>
  );
};

export default Form;
