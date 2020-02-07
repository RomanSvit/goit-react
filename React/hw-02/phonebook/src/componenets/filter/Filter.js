import React from "react";
const Filter = ({ onHandleFind, value }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={onHandleFind}
        placeholder="Type to filter contacts...."
      ></input>
    </>
  );
};

export default Filter;
