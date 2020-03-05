import React from "react";
import css from "./Filter.module.css"
const Filter = ({ onHandleFind, value }) => {
  return (
    <>
      <span className={css.titleFind}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={onHandleFind}
        placeholder="Type to filter contacts...."
        className={css.filter}
      ></input>
    </>
  );
};

export default Filter;
